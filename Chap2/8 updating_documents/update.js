db.movieDetails.updateOne({title:"The Martian"},{$set:{poster: "http://ia.media-imdb.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg"}})

db.movieDetails.updateOne({title: "The Martian"},
                          { $set: { "awards" : {"wins" : 8,
		                              "nominations" : 14,
		                                "text" : "Nominated for 3 Golden Globes. Another 8 wins & 14 nominations." } } });

db.movieDetails.updateOne({title:"The Martian"},{$inc:{"tomato.reviews":3,"tomato.userReviews":25}})

db.movieDetails.updateOne({title:"The Martian"},{$push:{reviews:{$each:[
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
                                          text: "The Martian could have been a sad drama film, instead it was a hilarious film with a little bit of drama added to it. The Martian is what everybody wants from a space adventure. Ridley Scott can still make great movies and this is one of his best."}]}}})

db.movieDetails.updateOne({title:"The Martian"},{$push:{reviews:{$each:[{ rating: 0.5,
                                          date: ISODate("2016-01-13T07:00:00Z"),
                                          reviewer: "Shannon B.",
                                          text: "Enjoyed watching with my kids!" }],
                                          $position:0,
                                          $slice:5
                                      }}})
 
db.movieDetails.updateMany({rated:null},{$set:{rated:"UNRATED"}})

db.movieDetails.updateMany({rated:null},{$unset:{rated:""}})

db.movieDetails.updateOne({"imdb.id":detail.imdb.id},{$set:detail},{upsert:true})







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




