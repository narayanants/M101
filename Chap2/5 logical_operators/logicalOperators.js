db.movieDetails.find({ $or : [ { "tomato.meter": { $gt: 99 } },
                               { "metacritic": { $gt: 95 } } ] })


db.movieDetails.find({ $and : [ { "metacritic": { $ne: 100 } },
                                { "metacritic" :{ $exists: true } } ] })



db.movieDetails.find({$or:[{"tomato.meter":{$gt:99}},
							{"metacritic":{$gt:95}}

					]})

db.movieDetails.find({$or:[{"tomato.meter":{$gt:99}},
					 {"metacritic":{$gt:95}}
	]});

db.movieDetails.find({$and:[{"tomato.meter":{$gt:99}},
					 {"metacritic":{$gt:95}}]}).count()

db.movieDetails.find({$and:[{"metacritic":{$ne:null}},
					{"metacritic":{$exists:true}}
	]})

db.movieDetails.find({$and:[{"metacritic":{$ne:null}},{"metacritic":{$gt:95}}]})





/*
	$or
	$and
	$not

*/


db.movieDetails.find({$or:[{"tomato.meter":{$gt:99}},{"metacritic":{$gt:95}}]}).count()

db.movieDetails.find({$and:[{"tomato.meter":{$gt:95}},{"tomato.meter":{$exists:true}}]}).count()




