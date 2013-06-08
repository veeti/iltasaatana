all: chrome

chrome: iltasanomat

iltasanomat:
	cp scripts/satan.js chrome/iltasanomat/
	cp scripts/is.user.js chrome/iltasanomat/iltasaatana.js
	cp chrome/jquery.js chrome/iltasanomat/

clean:
	rm -rf chrome/**/*.js
	rm -f chrome/*.crx

upload:
	rsync -avz website/* $(shell echo $(ILTASAATANA_WWW_ROOT))/
	rsync -avz scripts/* $(shell echo $(ILTASAATANA_WWW_ROOT))/scripts/
	rsync -avz chrome/*.crx $(shell echo $(ILTASAATANA_WWW_ROOT))/chrome/
	rsync -avz chrome/updates/updates.xml $(shell echo $(ILTASAATANA_WWW_ROOT))/chrome/updates.xml
