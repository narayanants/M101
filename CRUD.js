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

db.movieDetails.updateOne({title:"The Martian"},{$set:{
    poster:"http://ia.media-imdb.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg"
}});

db.movieDetails.updateOne({title:"The Martian"},{$set:{
                     "awards" : {"wins" : 8,
                    "nominations" : 14,
                    "text" : "Nominated for 3 Golden Globes. Another 8 wins & 14 nominations." } 
}});

db.movieDetails.updateOne({title:"The Martian"},{$inc:{"tomato.reviews":8,"tomato.userReviews":25}});

db.movieDetails.updateOne({title:"The Martian"},{
        $push:{reviews:{$each:[
            { rating: 0.5,
                                          date: ISODate("2016-01-12T07:00:00Z"),
                                          reviewer: "Yabo A.",
                                          text: "i believe its ranked high due to its slogan 'Bring him Home' there is nothing in the movie, nothing at all ! Story telling for fiction story !"},
                                        { rating: 5,
                                          date: ISODate("2016-01-12T09:00:00Z"),
                                          reviewer: "Kristina Z.",
                                          text: "This is a masterpiece. The ending is quite different from the book - the movie provides a resolution whilst a book doesn't."},
                                        { rating: 2.5,
                                          date: ISODate("2015-10-26T04:00:00Z"),
                                          reviewer: "Matthew Samuel",
                                          text: "There have been better movies made about space, and there are elements of the film that are borderline amateur, such as weak dialogue, an uneven tone, and film cliches."},
                                        { rating: 4.5,
                                          date: ISODate("2015-12-13T03:00:00Z"),
                                          reviewer: "Eugene B",
                                          text: "This novel-adaptation is humorous, intelligent and captivating in all its visual-grandeur. The Martian highlights an impeccable Matt Damon, power-stacked ensemble and Ridley Scott's masterful direction, which is back in full form."},
                                        { rating: 4.5,
                                          date: ISODate("2015-10-22T00:00:00Z"),
                                          reviewer: "Jens S",
                                          text: "A declaration of love for the potato, science and the indestructible will to survive. While it clearly is the Matt Damon show (and he is excellent), the supporting cast may be among the strongest seen on film in the last 10 years. An engaging, exciting, funny and beautifully filmed adventure thriller no one should miss."},
                                        
                                        { rating: 4.5,
                                          date: ISODate("2016-01-12T09:00:00Z"),
                                          reviewer: "Spencer H.",
                                          text: "The Martian could have been a sad drama film, instead it was a hilarious film with a little bit of drama added to it. The Martian is what everybody wants from a space adventure. Ridley Scott can still make great movies and this is one of his best."}
            ]}}
});

db.movieDetails.updateOne({title:"The Martian"},{$push:{reviews:{$each:[{ rating: 0.5,
                                          date: ISODate("2016-01-13T07:00:00Z"),
                                          reviewer: "Shannon B.",
                                          text: "Enjoyed watching with my kids!" }],
                                          $position:0,
                                          $slice:5
                                      }}});

// Update Many

// $set
db.movieDetails.updateMany({title:"The Martian"},{$set:{rated:"UNRATED"}});

// $unset
db.movieDetails.updateMany({title:"The Martian"},{$unset:{rated:""}});


/* Update operators */

/*
$inc
$set
$unset
$rename
$min
$max
$currentDate


Array Operators

$
$addToSet
$pop -1/1
$pullAll
$pull
$pullAll
$push


Modifiers

$each
$slice
$sort
$position

*/

