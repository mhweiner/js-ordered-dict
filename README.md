# OrderedDict
A simple, extendable, sortable JavaScript OrderedDict.

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
a.nth(0); //'Citabria' //get value at index

//length
a.size(); //3

//removal
a.remove('Boeing');
a.values(); //['Citabria','Cub']

//iteration
a.forEach(function( key, value ){
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

//accessing properties directly
a.arr = ['Lockheed', 'Grumman', 'Cessna']; //keys (and order) go here
a.dict = {'Lockheed':'SR-72', 'Grumman':'Yankee', 'Cessna':'172'} //dict goes here

//sorting
a.arr.sort(); //using built-in Array.prototype.sort()
a.values(); //['172','Yankee','SR-72']

```
