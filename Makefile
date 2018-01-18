.PHONY: xyzzy clean  css js misc tabs common %.tab

##### VARIABLES

MAKE += --no-print-directory


##### Actual targets for using

build: js css misc common tabs build/index.php

clean:
	rm -rf build/*



##### Intermediate targets; all phony

misc:	build/404.php build/.htaccess
tabs:	build/tab/hiring/ build/tab/upgrades/ build/tab/achievements/
common: build/common/header.css build/common/common.css build/common/header.php build/common/head.php build/common/common.js build/common/resources.js build/common/cacheCommonDomElements.js
js: build/sellResearchRights.js


##### PATTERN RULES
build/tab/%/:
	mkdir -p	$@
	@$(MAKE) $@index.php $@style.css



# pattern rules for .html and .php
build/%.html: src/%.html
	cp		$< $@
build/%.php: src/%.html
	cp		$< $@
build/%.php: src/%.php
	cp		$< $@


build/%.js: src/%.js
	cp		$< $@
build/%.css: src/%.css
	cp		$< $@


# Pattern rule for building .css from .less
build/%.css: src/%.less const.less
	lessc		$<	$@

# Pattern rule for mkdir-ing folders
build/%/:
	mkdir -p	$@

# vim: ts=8
