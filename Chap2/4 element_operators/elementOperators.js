db.movieDetails.find({ "tomato.meter": { $exists: true } })

db.movieDetails.find({ "tomato.meter": { $exists: false } })

// Value of $type may be either a BSON type number or the string alias
// See https://docs.mongodb.org/manual/reference/operator/query/type
db.moviesScratch.find({ _id: { $type: "string" } })


db.moviesDetails.find({"tomato.meter":{$exists:true}})

db.moviesDetails.find({"tomato.meter":{$exists:false}})


db.moviesScratch.find({_id:{$type:"string"}});

db.movieDetails.find({"tomato.meter":{$exists:true}})
