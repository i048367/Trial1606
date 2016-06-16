jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ProductSet in the list
// * All 3 ProductSet have at least one ToSalesOrderLineItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"ns/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ns/test/integration/pages/App",
	"ns/test/integration/pages/Browser",
	"ns/test/integration/pages/Master",
	"ns/test/integration/pages/Detail",
	"ns/test/integration/pages/Create",
	"ns/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ns.view."
	});

	sap.ui.require([
		"ns/test/integration/MasterJourney",
		"ns/test/integration/NavigationJourney",
		"ns/test/integration/NotFoundJourney",
		"ns/test/integration/BusyJourney",
		"ns/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});