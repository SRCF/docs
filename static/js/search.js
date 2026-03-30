window.addEventListener("DOMContentLoaded", function() {
    const elSearchQuery = document.getElementById("srcf-search-input");
    const elSearchResults = document.getElementById("srcf-search-results");

    let selectedIndex = 0;

    let searcher = null;
    let searchIndex = null;
    let searcherFetcher = null;

    elSearchQuery.addEventListener("input", async function(event) {
        if (searcherFetcher === null) {
            searcherFetcher = fetch("/index.json")
                .then(response => response.json())
                .then(index => {
                    searchIndex = index;
                    fixupIndex(searchIndex);

                    searcher = new FlexSearch.Document({
                        document: {
                            id: "id",
                            index: [
                                {
                                    field: "title-forward",
                                    tokenize: "forward",
                                    boost: 3
                                },
                                {
                                    field: "title-tolerant",
                                    tokenize: "tolerant",
                                    boost: 3
                                },
                                {
                                    field: "heading-title-forward",
                                    tokenize: "forward",
                                    boost: 1
                                },
                                {
                                    field: "heading-title-tolerant",
                                    tokenize: "tolerant",
                                    boost: 1
                                },
                                {
                                    field: "contents",
                                    tokenize: "tolerant"
                                }
                            ]
                        },
                    });

                    searchIndex.forEach(item => {
                        let headings = item.headings.map(h => h.title);
                        searcher.add({
                            "id": item.id,
                            "contents": item.contents,
                            "title-forward": item.title,
                            "title-tolerant": item.title,
                            "heading-title-tolerant": headings,
                            "heading-title-forward": headings,
                            "permalink": item.permalink
                        });
                    });
                })
                .catch(error => {
                    console.error("Error loading search index:", error);
                    searcherFetcher = null;
                });
        }

        if (searcher === null) {
            await searcherFetcher;
        }

        const searchQuery = event.target.value;

        if (searchQuery.length > 0) {
            elSearchResults.classList.remove("d-none");
            executeSearch(searchQuery);
            selectedIndex = 0;
            updateSelected();
        } else {
            elSearchResults.classList.add("d-none");
        }
    });

    elSearchQuery.addEventListener("keydown", function(event) {
        const resultCount = elSearchResults.children.length;
        if (event.key === "ArrowDown") {
            event.preventDefault();
            selectedIndex = (selectedIndex + 1) % resultCount;
            updateSelected();
        } else if (event.key === "ArrowUp") {
            event.preventDefault();
            selectedIndex = (selectedIndex - 1 + resultCount) % resultCount;
            updateSelected();
        } else if (event.key === "Enter") {
            event.preventDefault();
            elSearchResults.children[selectedIndex].click();
        }
    });

    window.addEventListener("keydown", function(event) {
        if (event.key === "/" && (event.ctrlKey || event.metaKey)) {
            event.preventDefault();
            elSearchQuery.focus();
            elSearchQuery.select();
        }
    });

    window.addEventListener("mousedown", function(event) {
        if (!elSearchResults.contains(event.target) && event.target !== elSearchQuery) {
            elSearchResults.classList.add("d-none");
        }
    });

    function updateSelected() {
        for (let child of elSearchResults.children) {
            child.classList.remove("active");
            if (child === elSearchResults.children[selectedIndex]) {
                child.classList.add("active");
            }
        }
    }

    function fixupIndex(index) {
        const parser = new DOMParser();

        index.forEach((item, index) => {
            item.id = index;

            if (item.headingTags) {
                item.headings = item.headingTags.map(tag => {
                    const element = parser.parseFromString(tag, "text/html").body.firstChild
                    return {
                        id: element.getAttribute("href").slice(1),
                        title: element.textContent
                    };
                });
            } else {
                item.headings = [];
            }
        });
    }

    function executeSearch(searchQuery) {
        var results = searcher.search({ query: searchQuery, merge: true, suggest: true });
        console.log(results);

        elSearchResults.innerHTML = "";

        if (results.length == 0) {
            const elNoResults = document.createElement("div");
            elNoResults.className = "dropdown-item disabled";
            elNoResults.innerText = "No matches found";
            elSearchResults.appendChild(elNoResults);
            return;
        }

        results.forEach((result, index) => {
            const doc = searchIndex.find(doc => doc.id == result.id);

            const elResult = document.createElement("a");
            elResult.className = "dropdown-item";

            elResult.href = doc.permalink;
            elResult.innerText = doc.title;

            // if the best match was a heading, conservatively estimate which one it was
            // unfortunately this is the best we have as flexsearch won't highlight arrays at the moment
            // TODO: find some kind of fix for the above
            if (result.field.some(field => field.startsWith("heading-title")) && !result.field.some(field => field.startsWith("title"))) {
                let terms = searchQuery.trim().toLowerCase().split(/ +/);
                let estimatedHeadings = doc.headings.filter(h => terms.some(term => h.title.toLowerCase().includes(term)));

                // if we know exactly which heading it was, show it.
                // do not show if there are multiple matches in case we picked the wrong one - this could mislead
                // users into thinking the content they want is not in the page as it is not under the suggested heading.
                if (estimatedHeadings.length == 1) {
                    const subheader = document.createElement("small");
                    subheader.className = "text-muted search-result-subheader";
                    subheader.innerText = estimatedHeadings[0].title;
                    elResult.href += "#" + estimatedHeadings[0].id;
                    elResult.appendChild(subheader);
                }
            }

            elResult.addEventListener("mousemove", function() {
                selectedIndex = index;
                updateSelected();
            });

            elSearchResults.appendChild(elResult);
        });
    }
});
