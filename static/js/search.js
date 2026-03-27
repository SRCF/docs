window.addEventListener("DOMContentLoaded", function () {
    const elSearchQuery = document.getElementById("srcf-search-input");
    const elSearchResults = document.getElementById("srcf-search-results");
    let selectedIndex = 0;
    let fuse = null;

    elSearchQuery.addEventListener("input", debounce(async function(event) {
        if (!fuse) {
            let searchIndex = await fetch("/index.json").then(response => response.json());
            flattenIndex(searchIndex);

            fuse = new Fuse(searchIndex, {
                keys: [
                    { name: "title", weight: 1 },
                    { name: "headings.title", weight: 0.7 },
                    { name: "contents", weight: 0.4 },
                ],
                threshold: 0.4,
                includeMatches: true,
                minMatchCharLength: 3,
                ignoreLocation: true,
            });
        }

        const searchQuery = event.target.value;
        console.log(searchQuery)
        if (searchQuery.length > 2) {
            elSearchResults.classList.remove("d-none");
            executeSearch(searchQuery);
            selectedIndex = 0;
            updateSelected();
        } else {
            elSearchResults.classList.add("d-none");
        }
    }, 50));

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

    function debounce(fn, delay) {
        let timeout;
        return function() {
            clearTimeout(timeout);
            timeout = setTimeout(() => fn.apply(this, arguments), delay);
        };
    }

    function updateSelected() {
        for (let child of elSearchResults.children) {
            child.classList.remove("active");
            if (child === elSearchResults.children[selectedIndex]) {
                child.classList.add("active");
            }
        }
    }

    function flattenIndex(index) {
        function flattenHeadings(headings, result = []) {
            for (const heading of headings) {
                result.push({ id: heading.ID, title: heading.Title });
                if (heading.Headings) {
                    flattenHeadings(heading.Headings, result);
                }
            }
            return result;
        }

        index.forEach(item => item.headings = flattenHeadings(item.headings));
    }

    function executeSearch(searchQuery) {
        var results = fuse.search(searchQuery);

        elSearchResults.innerHTML = "";

        if (results.length == 0) {
            const elNoResults = document.createElement("div");
            elNoResults.className = "dropdown-item disabled";
            elNoResults.innerText = "No matches found";
            elSearchResults.appendChild(elNoResults);
            return;
        }

        results.forEach((result, index) => {
            const elResult = document.createElement("a");
            elResult.className = "dropdown-item";

            elResult.href = result.item.permalink;

            elResult.innerText = result.item.title;
            if (result.matches && result.matches.length > 0 && result.matches[0].key === "headings.title") {
                const subheader = document.createElement("small");
                subheader.className = "text-muted search-result-subheader";
                subheader.innerHTML = result.matches[0].value;
                elResult.appendChild(subheader);
                elResult.href += "#" + result.item.headings[result.matches[0].refIndex].id;
            }

            elResult.addEventListener("mouseenter", function() {
                selectedIndex = index;
                updateSelected();
            });

            elSearchResults.appendChild(elResult);
        });
    }
});
