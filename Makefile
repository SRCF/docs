BUILDDIR ?= ../public_html/_docs
INPUTDIR = public
CACHEDIR = $(shell mktemp -d)

all: clean build

.PHONY: build
build:
	hugo -d $(BUILDDIR) --cacheDir $(CACHEDIR)
	rm -rf $(CACHEDIR)
	mv $(INPUTDIR)/* $(BUILDDIR)/
	mv $(INPUTDIR)/.[!.]* $(BUILDDIR)/

.PHONY: clean
clean:
	rm -rf $(INPUTDIR)/*
	rm -rf $(BUILDDIR)/*
