//Covered Query is an query that can be entirely covered by an Index

// Query part and projection part should be same.

var exp = db.example.explain("executionStats");

var exp = db.numbers.explain("executionStats");

exp.find({i:45,j:23},{_id:0,i:1,j:1,k:1});

db.numbers.find({i:45,j:23});

db.numbers.find({i:45,j:23},{_id:0,i:1,j:1,k:1});









