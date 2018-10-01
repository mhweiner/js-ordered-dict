# OrderedDict
A simple, extendable, sortable JavaScript OrderedDict.

## Installation

```bash
npm i js-ordered-dict
```

## Example Usage

```js
var a = new OrderedDict();

//set/push
a.set('Bellanca','Citabria');
a.set('Boeing','777');
a.set('Piper','Cub');

//get
a.values(); //['Citabria','777','Cub'] (note: respects order of entry)
a.keys(); //['Bellanca','Boeing','Piper'] (note: respects order of entry)
a.get('Piper'); //'Cub'
a.has('Boeing'); //true
a.first(); //'Citabria'
a.last(); //'Cub'
a.nth(1); //'777'
a.firstKey(); //'Bellanca'
a.lastKey(); //'Piper'
a.keyAtIndex(1); //'Boeing'

//length
a.size(); //3

//removal
a.remove('Boeing');
a.values(); //['Citabria','Cub']

//iteration
a.forEach((value, key) => {
  ...
});

//updating values
a.set('Bellanca', 'Decathalon');
a.values(); //['Decathalon','Cub']

//inserting values at a certain position
a.size(); //2
a.insert(1, 'Honda', {'model': 'HondaJet'});
a.values(); //['Decathalon', {'model': 'HondaJet'}, 'Cub']
a.size(); //3

//clear
a.clear();
a.values(); //[]

//sorting
a.arr.sort(); //using built-in Array.prototype.sort()
a.values(); //['172','Yankee','SR-72']

//clone
let d = new OrderedDict();
d.set('foo', 'bar');

let a = d.clone();
a.get('foo'); //'bar'

```

## License

[MIT](https://github.com/mhweiner/mr-router/blob/master/LICENSE). Free to use in all your things!

## Contribution

DO IT! PR's welcome. Need to add testing and linting.
