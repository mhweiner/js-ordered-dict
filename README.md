# OrderedDict
A simple, extendable, sortable JavaScript OrderedDict.

## Example Usage

```js
var a = new OrderedDict();
a.set('Lockheed','P-104 Starfighter');
a.set('Boeing','777');
a.set('Cessna','172');

a.values(); //['P-104 Starfighter','777','172'] (respects order)
a.keys(); //['Lockheed','Boeing','Cessna'] (respects order)
a.get('Cessna'); //'172'
a.has('Boeing'); //true

//length
a.size(); //3

//removal
a.remove('Boeing');
a.values(); //['P-104 Starfighter','172']

//iteration
a.forEach(function( key, value ){
  ...
});

//updating values
a.set('Lockheed', 'SR-71');
a.values(); //['SR-71','172']

//inserting items at a certain position
a.size(); //2
a.insert(1, 'Honda', {'model': 'HondaJet'});
a.values(); //['SR-71',{'model': 'HondaJet'},'172']
a.size(); //3

//clear
a.clear();
a.values(); //[]

//accessing properties directly
a.arr = ['Grumman','Cessna','Bellanca']; //keys (and order) go here
a.dict = {'Grumman':'Yankee', 'Cessna':'172', 'Bellanca':'Citabria'} //dict goes here

//sorting
a.arr.sort(); //using built-in Array.prototype.sort()
a.values(); //['Citabria','172','Yankee']

```
