/*

	Foreground:
	===========

	Fast
	Blocking writes and reads in DB

	Background:
	==========
	Slower
	Don't block writes and reads


*/

db.students.createIndex({"scores.score":1})

db.students.findOne(); // Blocked in another terminal


//Background Index

db.students.createIndex({"scores.score":1},{background:true});