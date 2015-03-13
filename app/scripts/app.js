(function(app) {
	'use strict';

	var todo = new Todo('[Untitled]');

	function Todo(name){
	  this.storage    = new app.Storage(name);
	  this.model      = new app.Model(this.storage);
	  this.view       = new app.View();
	  this.controller = new app.Controller(this.model, this.view);
	}
})(window.app);
