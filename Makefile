BUILDDIR ?= public_html/_docs
PDF_OUTFILE = docs
PDF_URL = localhost
PDF_PORT = 1313

all: clean build

.PHONY: build
build:
	hugo -d $(BUILDDIR)

.PHONY: clean
clean:
	rm -rf $(BUILDDIR)

.PHONY: pdf
pdf:
	wkhtmltopdf  --margin-bottom 1in --margin-top 1in --margin-left 1in --margin-right 1in --viewport-size 1024x768 http://$(PDF_URL):$(PDF_PORT)/all $(PDF_OUTFILE).pdf
	mv $(PDF_OUTFILE).pdf $(BUILDDIR)/$(PDF_OUTFILE).pdf