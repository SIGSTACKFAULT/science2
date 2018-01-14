.PHONY: xyzzy clean  misc css tabs common


##### Actual targets for using

build: tabs misc css common build/index.php

clean:
	rm -rf build/*



##### Intermediate targets; all phony

misc:	build/404.html build/.htaccess
tabs:	build/tab/upgrades/ build/tab/achievements/
common:	build/common/ build/common/header.css build/common/header.php build/common/head.php



##### Actual targets that do stuff



# Pattern rule for making a tab folder.
build/tab/%/: build/tab/%/ build/tab/%/index.php build/tab/%/style.css



# Pattern rule for building .css from .less
build/%.css: src/%.less 
	lessc		$<	$@


# Pattern rule for mkdir-ing folders
build/%/:
	mkdir -p	$@


# Pattern rule for cp-ing from src/ to build/
build/%: src/% $(@D)/
	cp 		$<	$@


