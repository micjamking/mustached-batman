(function(window, $storage){
	'use strict';

  // Intiatialize
	window.app         = window.app || {};
	window.app.Storage = Storage;

  // Creates new data store
	function Storage(){

	}

	// Gets all data stores
	Storage.prototype.get    = function(){};
	// Saves new or updates existing data store
	Storage.prototype.save   = function(){};
	// Finds a specific data store
	Storage.prototype.query  = function(){};
	// Removes a specific data store
	Storage.prototype.remove = function(){};

})(
window,
chrome.storage.sync
);