/*
	explain 

*/

db.foo.find({}).explain()

db.foo.explain().find() // Update, Remove, Aggregate
// Gives an explainable object

db.example.createIndex({"a":1,"b":1});

db.example.createIndex({"b":1});

var exp = db.example.explain();
exp.help();
exp.find({a:17,b:55}).sort({b:-1});
