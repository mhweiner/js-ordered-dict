# OrderedDict
Javascript OrderedDict

## Example Usage

```js
var a = new OrderedDict();
a.set('One','orange');
a.set('Two','apple');
a.set('Three','banana');

a.values(); // ['orange','apple','banana']
a.keys(); // ['One','Two','Three']
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
a.set('One', 'peach');
a.values(); // ['peach','banana']

//clear
a.clear();
a.values(); // []

//sorting
a

```
