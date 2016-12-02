/*
	Explain Types
	=============

	queryPlanner
	executionStats
	allPlansExecution

*/


var exp = db.example.explain("executionStats");
exp.find({a:17,b:55});

// executionStats mode

// nReturned: 100 / actual docs returned

db.example.dropIndex({a:1,b:1});

db.example.createIndex({a:1,b:1});

var exp =db.example.explain("allPlansExecution");
