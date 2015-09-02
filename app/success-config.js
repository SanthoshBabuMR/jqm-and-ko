require.config({
    paths: {
        "knockout":             "js/lib/knockout-3.1.0",
        "knockout-amd-helpers": "js/lib/knockout-amd-helpers",
        "text":                 "js/lib/require/text",
        "app":                  "js/modules/app"
    }
});

require( ["knockout","app","knockout-amd-helpers"],function(ko,app){
	ko.bindingHandlers.module.baseDir = "modules";
	ko.amdTemplateEngine.defaultPath = "template";
	ko.amdTemplateEngine.defaultSuffix = ".tmpl.html";
	setTimeout( function() {
		ko.applyBindings({})
	}, 1000 );
	
});