# OrderedDict
Javascript OrderedDict

## Example Usage

```
var a = new OrderedDict();
a.set('One','orange');
a.set('Two','apple');
a.set('Three','banana');

a.values(); //['orange','apple','banana']
a.keys(); //['One','Two','Three']
a.get('Three'); //'banana'
