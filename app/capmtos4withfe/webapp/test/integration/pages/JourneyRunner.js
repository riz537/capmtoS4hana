sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"com/demo/capmtos4withfe/test/integration/pages/EmployeesList.gen",
	"com/demo/capmtos4withfe/test/integration/pages/EmployeesObjectPage.gen"
], function (JourneyRunner, EmployeesListGenerated, EmployeesObjectPageGenerated) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('com/demo/capmtos4withfe') + '/test/flp.html#app-preview',
        pages: {
			onTheEmployeesListGenerated: EmployeesListGenerated,
			onTheEmployeesObjectPageGenerated: EmployeesObjectPageGenerated
        },
        async: true
    });

    return runner;
});

