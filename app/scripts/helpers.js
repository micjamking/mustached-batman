(function(window){
	'use strict';

  // Cache querySelectorAll for easier and faster reuse
  window.$ = document.querySelectorAll.bind(document);

	// Allow for looping on Objects by chaining:
	// $('.foo').each(function () {})
	Object.prototype.each = function (cb) {
		for (var x in this) {
			if (this.hasOwnProperty(x)) {
				cb.call(this, this[x]);
			}
		}
	};

})(window);