.PHONY: xyzzy clean  misc css tabs common


##### Actual targets for using

build: misc css common tabs build/index.php

clean:
	rm -rf build/*



##### Intermediate targets; all phony

misc:	build/404.html build/.htaccess
tabs:	hiring.tab
common: build/common/header.css build/common/header.php build/common/head.php build/common/common.js build/common/resources.js


##### Actual targets that do stuff
hiring.tab: build/tab/hiring/ build/tab/hiring/index.php build/tab/hiring/style.css


# Pattern rule for building .css from .less
build/%.css: src/%.less 
	lessc		$<	$@


# Pattern rule for mkdir-ing folders
build/%/:
	mkdir -p	$@


# Pattern rule for cp-ing from src/ to build/
build/%: src/% $(@D)/
	cp 		$<	$@


