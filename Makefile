hidden = build/.htaccess
all = $(shell find src/ | sed 's/src/build/; s/less/css/') $(hidden)

.PHONY: build clean test

build: $(all)

clean:
	rm -r build/

test:
	@echo $(all)


build/%.js: src/%.js
	cp	$< $@
build/%.php: src/%.php
	cp	$< $@
build/%.css: src/%.css
	cp	$< $@


build/%.css: src/%.less
	lessc	$< $@


build/favicon.ico: src/favicon.ico
	cp	$< $@
build/.htaccess: src/.htaccess
	cp	$< $@



build/:
	mkdir	$@
build/%:
	mkdir	$@
