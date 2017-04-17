# OrderedDict
Javascript OrderedDict

## Example Usage

```js
var a = new OrderedDict();
a.set('Lockheed','orange');
a.set('Boeing','apple');
a.set('Cessna','banana');

a.values(); // ['orange','apple','banana'] (respects order)
a.keys(); // ['Lockheed','Boeing','Cessna'] (respects order)
a.get('Three'); // 'banana'
a.has('Two'); // true

//length
a.size(); // 3

//removal
a.remove('Two');
a.values(); // ['orange','banana']

//iteration
a.forEach(function( key, value ){
  ...
});

//updating values
a.set('Lockheed', 'peach');
a.values(); // ['peach','banana']

//clear
a.clear();
a.values(); // []

//accessing properties directly
a.arr = ['Grumman','Cessna','Bellanca'];
a.dict = {'Grumman':'Yankee','Cessna':'172','Bellanca':'Citabria'}

//sorting
a.arr.sort(); //using built-in JavaScript [Array.prototype.sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
a.values(); // ['Citabria','172','Yankee']

```
