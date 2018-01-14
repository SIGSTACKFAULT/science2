.PHONY: xyzzy clean dirs misc


# Actual targets for using
build: dirs misc css build/header.php build/index.php

clean:
	rm -rf build/*



# Intermediate targets
dirs: build/tab/upgrades/ build/tab/achivements/
misc: build/404.html
css: build/header.css

# Actual targets that do stuff
%/:
	mkdir -p $@


# Pattern rule for building .css from .less
build/%.css: src/%.less
	lessc $< $@


# Pattern rule for cp-ing from src/ to build/
build/%: src/%
	cp $< $@


