db.students.findOne({})

db.students.createIndex({"scores.score":1}); // took 50 mins to create the index

db.students.getIndexes();


db.students.explain().find({"scores.score":{$gt:99}})

db.students.explain().find({"scores":{$elemMatch:{"type":"exam","score":{$gt:99.8}}}});

db.students.explain().find({$and:[{"scores.score":{$gt:99.8}},{"scores.type":"exam"}]});

