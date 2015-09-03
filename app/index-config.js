require.config({
    paths: {
        "knockout":             "js/lib/knockout-3.1.0",
        "knockout-amd-helpers": "js/lib/knockout-amd-helpers",
        "text":                 "js/lib/text",
        "jquery":               "js/lib/jquery-1.11.3",
        "jqm":                  "js/lib/jquery.mobile.1.4.5",
        "app":                  "js/modules/app",
        "ajaxModule":           "js/modules/ajaxModule"        
    },
    shim: {

    }
});


/* http://stackoverflow.com/questions/13299816/jquery-jqueryui-jquerymobile-not-loading-fast-enough-in-backbone-js-app*/
require( ["jquery"],function($){

	console.log( "has jqm : " + (($.mobile)? true: false))
	$(document).on("mobileinit", function(){
		console.log("set autoInitializePage = false")
		console.log($.mobile)
		$.mobile.ajaxEnabled = false;
      	$.mobile.autoInitializePage = false;
      	$.mobile.loadingMessage = false;
        $.mobile.ignoreContentEnabled = true;
  	});

  	require( ["knockout", "app","knockout-amd-helpers","jqm"],function(ko, app){
  		console.log( "has jqm : " + (($.mobile)? true: false))
  		ko.bindingHandlers.module.baseDir = "modules";
		ko.amdTemplateEngine.defaultPath = "templates";
		ko.amdTemplateEngine.defaultSuffix = ".tmpl.html";

		ko.applyBindings(new app.mobileEsign, $("#eSignTarget").get(0));
		console.log($.mobile.autoInitializePage)
		 if ( $.mobile.autoInitializePage == false){
		 	console.log("initializePage");
		     window.location.hash = 'pin';
    		$.mobile.initializePage();
		}	
  	});	
	
});