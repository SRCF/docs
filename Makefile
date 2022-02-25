BUILDDIR ?= public
CACHEDIR = $(shell mktemp -d)

all: clean build

.PHONY: build
build:
	hugo -d $(BUILDDIR) --cacheDir $(CACHEDIR) --noTimes
	rm -rf $(CACHEDIR)


.PHONY: clean
clean:
	rm -rf $(BUILDDIR)
