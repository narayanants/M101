/*
    Indexes Types:
    --------------

        * compound index
        * multikey index
        * unique index
        * sparse index
        * background index
        * Geospatial index
        * Geospherical index
        * Text index

*/



//creating indexes

db.students.createIndex({"student_id":1,"class_id":1});

/*  
    compound multikey indexes 
    
    => each indexed document can have at most one indexed field whose value is an array.


    { _id: 1, a: [1, 2], b: 1, category: "A array" }
    { _id: 2, a: 1, b: [1, 2], category: "B array" }

    A compound multikey index { a: 1, b: 1 } is permissible since for each document.
*/

// Dot Notation and multikey indexes
db.students.createIndex({"scores.score":1});
db.students.getIndexes();

// Explainable object
db.students.explain().find({"scores.score":{$gt:99}});
db.students.explain().find({"scores":{$elemMatch:{"type":"exam","score":{$gt:99.8}}}});
db.students.explain().find({$and:[{"scores.score":{$gt:99.8}},{"scores.type":"exam"}]});

// Unique index
db.students.createIndex({"thing":1},{unique:true});

// sparse index => create it when some fields are missing from documents
db.students.createIndex({'c':1},{sparse:true});

// Foreground indexes => Fast and Blocking Read and writes
// Background indexes => Slower and Non-Blocking
db.students.createIndex({"scores.score":1},{background:true});

/* 
    Explain Types
    --------------

    queryPlanner
    executionStats
    allPlansExecution
*/

var exp = db.students.explain('executionStats');
exp.find({a:5,b:24});
db.students.dropIndex({a:1,b:1});
db.students.createIndex({a:1});
var exp = db.students.explain("allPlansExecution");


// Covered Query  => query that is entirely Covered by the index. Query and Projection part should be same
var exp = db.students.explain("executionStats");
exp.find({i:45,j:23},{_id:0,i:1,j:1,k:1});


/* Choosing an index
*   Winning query plan is cached in memory
*   Runs all query with all 3 indexes.
*   Then sorts the query based on the best performance.
*
* */

/* 
    Index Size:
    ===========

    Working Set:
    ------------
        * Portion of data that clients frequently access.
        * Must fit in RAM.
        * Key part is indexes that should fit in RAM.
*/
    db.students.getIndexes();
    db.students.totalIndexSize();
    db.students.stats();

/* 
    Geospatial indexes:
    ------------------
        * Allows you to find things based on location
        * 2D and 3D models
        * 2D
*/

    db.students.ensureIndex({location:'2d',type:1});
    db.students.find({location:{$near:[x,y]}}).limit(20);
    db.students.find({location:{$near:[50,50]}});

 // Geospherical indexes

    db.students.ensureIndex({location:'2dsphere'});
    db.places.find({location:{
        $near:{
            $geometry:{type:"Point",coordinates:[50,50]},
            $maxDistance:2000
        }
    }});

// Text indexes
    db.sentences.ensureIndex({'words':'text'});
    db.sentences.find({$text:{$search:'dog'}});
    db.sentences.find({$text:{$search:'dog tree obsidian'}},{score:{$meta:'textScore'}}).sort({score:{$meta:'textScore'}});



/*  
    Profiling
    ---------

        Profiling is a service that R/W to system.profile collection

        3 levels

            0 - default
            1 - slow queries
            2 - all queries (Debugging)

            mongod --dbpath /usr/local/var/mongodb --profile 1 --slowms 2

            db.system.profile.find().pretty()
*/

    db.system.profile.find({millis:{$gt:1}}).sort({ts:1}).pretty()
    db.getProfilingLevel()  // 1
    db.getProfilingStatus()
    db.setProfilingStatus(1,4)
    

    /* 
        Mongotop:
        =========

        mongotop 5

        Mongostat:
        ==========

        mongostat --port 27018

    */


    /* 
        Sharding overview:
        ------------------

            * Sharding is splitting of large data sets across multiple servers
            Application => mongos => mongod => Replica Sets

    
    */




 

