/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"netflix/netflix/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
