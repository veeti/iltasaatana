all: chrome

chrome: iltasanomat iltalehti

iltasanomat:
	cp scripts/satan.js chrome/iltasanomat/
	cp scripts/is.user.js chrome/iltasanomat/iltasaatana.js
	cp chrome/jquery.js chrome/iltasanomat/

iltalehti:
	cp scripts/satan.js chrome/iltalehti/
	cp scripts/il.user.js chrome/iltalehti/iltasaatana.js
	cp chrome/jquery.js chrome/iltalehti/

clean:
	rm -rf chrome/**/*.js
	rm -f chrome/*.crx

upload:
	rsync -avz website/* $(shell echo $(ILTASAATANA_WWW_ROOT))/
	rsync -avz scripts/* $(shell echo $(ILTASAATANA_WWW_ROOT))/scripts/
	rsync -avz chrome/*.crx $(shell echo $(ILTASAATANA_WWW_ROOT))/chrome/
	rsync -avz chrome/updates/updates.xml $(shell echo $(ILTASAATANA_WWW_ROOT))/chrome/updates.xml
