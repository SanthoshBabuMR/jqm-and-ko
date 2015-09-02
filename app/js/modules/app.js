define(['knockout', 'ajaxModule'], function(ko, ajaxModule) {
	var instance = null;
	function MobileEsign(){
		var self = this;
		self.pin = ko.observable();
		self.clientInfo = ko.observable();
		self.name = ko.observable();
		self.products = ko.observableArray();
		self.applicationId = ko.observable();
		self.validPin = ko.observable(false);
		self.validatePin = function() {
			ajaxModule.validatePin(self.pin(), function(data){
				self.validPin(true);
				console.log(data)
				self.name(data.name)
				self.products(data.products)
				self.applicationId(data.applicationId)
				self.showClientInfo();
			})
		}
		self.showInstructions= function() {
			ajaxModule.showInstructions();
		}
		self.showClientInfo= function() {
			ajaxModule.showClientInfo();
		}
		
	}
	MobileEsign.getInstance = function() {
		if(!instance) {
			instance = new MobileEsign();
		}
		return instance;
	}
	return {
		mobileEsign: MobileEsign.getInstance
	}
});