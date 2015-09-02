define(['jquery'], function($){
	var self = this;
	self.validatePin = function(pin, callback){
		var data = {
			pin: pin
		}
		$.ajax({
		  type: "POST",
		  url: '/pin',
		  data: JSON.parse(pin),
		  success: function(){
		  	callback.apply(null, arguments)
		  },
		  error: function() {
		  	callback.apply(null, arguments)
		  }
		});
	};
	self.showClientInfo = function() {
		$.mobile.changePage("#info");
	};
	self.showInstructions = function() {
		$.mobile.changePage("#instructions");
	};
	return self;
	
})


