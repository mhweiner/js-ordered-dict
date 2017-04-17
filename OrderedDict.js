(function(root) {
	"use strict";

	function OrderedDict() {
		this.dict = {};
		this.arr = [];
	}

	OrderedDict.prototype = {
		set: function(key, val) {
			if (!(key in this.dict)) {
				this.arr.push(key);
			}
			this.dict[key] = val;
		},
		get: function(key) {
			return this.dict[key];
		},
		has: function(key) {
			return !!this.dict[key];
		},
		remove: function( key ) {
			for (var i = 0, l = this.arr.length; i < l; i++) {
				if (this.arr[i] === key) {
					this.arr.splice(i, 1);
					delete this.dict[key];
				}
			}
		},
		forEach: function(callback) {
			for (var i = 0, l = this.arr.length; i < l; i++) {
				var key = this.arr[i],
					val = this.dict[key];
				callback(key, val);
			}
		},
		sort: function() {
			//to be overridden
		},
		size: function() {
			return this.arr.length;
		},
		keys: function() {
			return this.arr;
		},
		values: function() {
			var vals = [],
				len = this.arr.length;
			for(var i = 0; i < len; i++){
				vals.push(this.dict[this.arr[i]]);
			}
			return vals;
		},
		clear: function() {
			this.dict = {};
			this.arr = [];
		}
	};

	//export
	if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
		module.exports = OrderedDict;
	} else {
		if (typeof define === 'function' && define.amd) {
			define([], function() {
				return OrderedDict;
			});
		}
		else {
			root.OrderedDict = OrderedDict;
		}
	}

})(this);
