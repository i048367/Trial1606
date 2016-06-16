jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"ns/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ns/test/integration/pages/App",
	"ns/test/integration/pages/Browser",
	"ns/test/integration/pages/Master",
	"ns/test/integration/pages/Detail",
	"ns/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ns.view."
	});

	sap.ui.require([
		"ns/test/integration/NavigationJourneyPhone",
		"ns/test/integration/NotFoundJourneyPhone",
		"ns/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});