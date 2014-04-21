SCRIPT_DIR := $(CURDIR)/scripts
LIBRARY_FILES := $(SCRIPT_DIR)/satan.js $(SCRIPT_DIR)/satan.jquery.js
WEB_ROOT := $(shell echo $(ILTASAATANA_WEB_ROOT))

all: iltasanomat iltalehti

clean:
	rm -r $(CURDIR)/build

upload:
	rsync -avz website/ $(WEB_ROOT)/
	# Create and upload satan.js for 1.0 backwards compatibility
	rsync /dev/null $(WEB_ROOT)/scripts/
	rsync -avz scripts/satan.js $(WEB_ROOT)/scripts/satan.js

builddir:
	mkdir -p $(CURDIR)/build

iltasanomat: builddir
	cat $(SCRIPT_DIR)/iltasanomat.header.js $(LIBRARY_FILES) $(SCRIPT_DIR)/iltasanomat.user.js > build/iltasanomat.user.js

iltalehti: builddir
	cat $(SCRIPT_DIR)/iltalehti.header.js $(LIBRARY_FILES) $(SCRIPT_DIR)/iltalehti.user.js > build/iltalehti.user.js

