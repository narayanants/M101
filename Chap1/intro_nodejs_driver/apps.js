var MongoClient = require('mongodb').MongoClient,
	assert = require('assert'),
	url = 'mongodb://localhost:27017/video';

	MongoClient.connect(url,function(err,db){
		assert.equal(null,err);
		console.log('Connected succesfully');

		db.collection('movies').find({}).toArray(function(err,docs){
			docs.forEach(function(doc){
				console.log(doc.title);
			});
			db.close();
		});
		console.log('called find');
});