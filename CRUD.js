//Reading documents

db.movieDetails.find({'writers':['Ethan Coen','Joel Coen']}); // Match on the entire array, order of elements matters

db.movieDetails.find({'actors':'Jeff Bridges'}); // Match on any element on the array,

db.movieDetails.find({'actors.0':'Jeff Bridges'}) // Match on specific element of an array

//comparison operators: [$gt, $gte, $lt, $lte, $eq, $ne, $in]

db.movieDetails.find({ runtime: { $gt: 90 } }).count()

db.movieDetails.find({ runtime: { $gt: 90, $lt: 120 } }).count()

db.movieDetails.find({ "tomato.meter": { $gte: 95 }, runtime: { $gt: 180 } })

db.movieDetails.find({ rated: { $ne: "UNRATED" } }).count()

db.movieDetails.find({ rated: { $in: ["G", "PG"] } }).pretty()

// elementary operators: [$exists, $type]

db.moviesDetails.find({ "tomato.meter": { $exists: true } })

db.moviesScratch.find({_id:{$type:"string"}});

// logical operators: [$and, $or]

db.movieDetails.find({ $or : [ { "tomato.meter": { $gt: 99 } },
                               { "metacritic": { $gt: 95 } } ] })
                            
db.movieDetails.find({ $and : [ { "metacritic": { $ne: 100 } },
                                { "metacritic" :{ $exists: true } } ] })

// Regex operators: [$regex]

db.movieDetails.find({ "awards.text": { $regex: /^Won.*/ } },
                     { title: 1, "awards": 1, _id: 0}).pretty()

// Array operators: [$all, $size, $elemMatch]

db.movieDetails.find({ genres: { $all: ["Comedy", "Crime", "Drama"] } }).pretty()

db.movieDetails.find({ countries: { $size: 1 } }).pretty()

boxOffice: [ { "country": "USA", "revenue": 41.3 },
             { "country": "Australia", "revenue": 2.9 },
             { "country": "UK", "revenue": 10.1 },
             { "country": "Germany", "revenue": 4.3 },
             { "country": "France", "revenue": 3.5 } ]

db.movieDetails.find({ boxOffice: { country: "UK", revenue: { $gt: 15 } } })

db.movieDetails.find({ boxOffice: {$elemMatch: { country: "UK", revenue: { $gt: 15 } } } })


//updating documents




