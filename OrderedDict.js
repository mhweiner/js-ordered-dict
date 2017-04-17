(function(exports) {
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
			var vals = [];
			for (var key in this.dict){
				if (this.dict.hasOwnProperty(key)){
					vals.push(this.dict[key]);
				}
			}
			return vals;
		},
		clear: function() {
			this.dict = {};
			this.arr = [];
		}
	};

	//export
	exports.OrderedDict = OrderedDict;

})(window);
