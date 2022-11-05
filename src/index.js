OrderedDict.prototype = {

  set: function(key, val) {

    if (!(key in this.dict)) {

      this.arr.push(key);

    }

    this.dict[key] = val;

    return this.dict[key];

  },

  get: function(key) {

    return this.dict[key];

  },

  nth: function(index) {

    return this.dict[this.arr[index]];

  },

  first: function() {

    return this.dict[this.arr[0]];

  },

  last: function() {

    return this.dict[this.arr[this.arr.length - 1]];

  },

  has: function(key){

    return !!this.dict[key];

  },

  remove: function(key) {

    for (let i = 0, l = this.arr.length; i < l; i++) {

      if (this.arr[i] === key) {

        this.arr.splice(i, 1);

        delete this.dict[key];

      }
    }

  },

  insert: function(index, key, val) {

    if (this.arr.indexOf(key) !== -1) throw new Error('key `' + key + '` already exists');

    this.arr.splice(index, 0, key);
    this.dict[key] = val;

  },

  forEach: function(callback) {

    for (let i = 0, l = this.arr.length; i < l; i++) {

      let key = this.arr[i],
          val = this.dict[key];

      callback(val, key);

    }

  },

  sort: function() {

    //to be overridden

  },

  size: function() {

    return this.arr.length;

  },

  keys: function() {

    return Array.from(this.arr);

  },

  firstKey: function() {

    return this.arr[0];

  },

  lastKey: function() {

    return this.arr[this.arr.length - 1];

  },

  keyAtIndex: function(n) {

    return this.arr[n];

  },

  values: function() {

    let vals = [],
      len = this.arr.length;

    for (let i = 0; i < len; i++) {

      vals.push(this.dict[this.arr[i]]);

    }

    return vals;

  },

  clear: function() {

    this.dict = {};
    this.arr = [];

  },

  clone: function() {
    let d = new OrderedDict();
    
    d.arr = this.keys()
    
    for (let i = 0, l = d.arr.length, k; i < l; i++) {
      
      k=d.arr[i];
      
      d.dict[k] = this.dict[k]
      
    }
    
    return d;

  }
};

export default OrderedDict;
