/*
	can be used when index key is missing from the docs

*/
{a:1,b:2,c:5}
{a:10,b:5,c:10}
{a:13,b:17}
{a:7,b:23}

// We create sparse index when some documents doesn't have that field

db.students.createIndex({c:1},{sparse:true});

