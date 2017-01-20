db.movieDetails.find({'writers':['Ethan Coen','Joel Coen']}); // Match on the entire array, order of elements matters

db.movieDetails.find({'actors':'Jeff Bridges'}); // Match on any element on the array,

db.movieDetails.find({'actors.0':'Jeff Bridges'}) // Match on specific element of an array


/* Scalar Values */

db.movieDetails.find({"tomato.meter":100}).pretty()


