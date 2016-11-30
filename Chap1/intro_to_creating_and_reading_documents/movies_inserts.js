use video;
db.movies.insertOne({ "title": "Jaws", "year": 1975, "imdb": "tt0073195" });
db.movies.insertOne({ "title": "Mad Max 2: The Road Warrior", "year": 1981, "imdb": "tt0082694" })
db.movies.insertOne({ "title": "Raiders of the Lost Ark", "year": 1981, "imdb": "tt0082971" })

db.movies.find({"title":"Jaws"}).pretty()

// Result set of find is a Cursor Object

var c = db.movies.find({"title":"Jaws"});
c.hasNext();
c.next(); // 3 times
c.hasNext(); // returns Falseuse video;
db.movies.insertOne({ "title": "Jaws", "year": 1975, "imdb": "tt0073195" });
db.movies.insertOne({ "title": "Mad Max 2: The Road Warrior", "year": 1981, "imdb": "tt0082694" })
db.movies.insertOne({ "title": "Raiders of the Lost Ark", "year": 1981, "imdb": "tt0082971" })


use videos;

var c = db.movies.find({})
c.hasNext();
c.next();
c.next();

