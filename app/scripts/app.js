(function(app) {
	'use strict';

	var mustachedBatman = new mustachedBatman('[Untitled]');

	function mustachedBatman(name){
	  this.storage    = new app.Storage(name);
	  this.model      = new app.Model(this.storage);
	  this.view       = new app.View();
	  this.controller = new app.Controller(this.model, this.view);
	}
})(window.app);
