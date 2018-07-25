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
    return this.dict[key];
  },

  get: function(key){
    return this.dict[key];
  },

  nth: function(index){
    return this.dict[this.arr[index]];
  },

  has: function(key){
    return !!this.dict[key];
  },

  remove: function(key){
    for (let i = 0, l = this.arr.length; i < l; i++) {
      if (this.arr[i] === key) {
        this.arr.splice(i, 1);
        delete this.dict[key];
      }
    }
  },

  insert: function(index, key, val){
    if(this.arr.indexOf(key) !== -1) throw 'key `' + key + '` already exists';
    this.arr.splice(index, 0, key);
    this.dict[key] = val;
  },

  forEach: function(callback){
    for (let i = 0, l = this.arr.length; i < l; i++) {
      let key = this.arr[i],
          val = this.dict[key];
      callback(val, key);
    }
  },

  sort: function(){
    //to be overridden
  },

  size: function(){
    return this.arr.length;
  },

  keys: function(){
    return this.arr;
  },

  values: function(){
    let vals = [],
      len = this.arr.length;
    for(let i = 0; i < len; i++){
      vals.push(this.dict[this.arr[i]]);
    }
    return vals;
  },

  clear: function(){
    this.dict = {};
    this.arr = [];
  }
};

export default OrderedDict;