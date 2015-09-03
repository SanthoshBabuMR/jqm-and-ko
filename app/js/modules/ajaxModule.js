define(['jquery'], function($){
	var self = this;
		pagePin = "pin",
		pageInformation = "info",
		pageInstruction = "instructions";
	self.validatePin = function(pin, callback){
		var data = {
			pin: pin
		}
		$.ajax({
		  type: "POST",
		  url: '/pin',
		  data: data,
		  dataType: 'json',
		  success: function(){
		  	callback.apply(null, arguments)
		  },
		  error: function() {
		  	callback.apply(null, arguments)
		  }
		});
	};
	self.removePage = function(ele) {
		$(ele).on('pagehide', function () {
		    $(this).remove();
		});
	}
	self.showClientInfo = function() {
		/*if($('#'+pagePin).length){
			self.removePage($('#'+pagePin));
		}*/
		$.mobile.changePage("#"+pageInformation);
	};
	self.showInstructions = function() {
		$.mobile.changePage("#"+pageInstruction);
	};
	return self;
	
})


