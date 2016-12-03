/**
 * Created by vicky on 12/3/16.
 */

/*
*   Profilier is a service that R/w to system.profile collection
*
*   3 Levels
*
*       0 - default
*       1 - slow  queries
*       2 - all queries (Debugging)
*
*       mongod --dbpath /usr/local/var/mongodb --profile 1 --slowms 2
*
*       db.system.profile.find().pretty()
*
* */

    db.system.profile.find().pretty()

    db.system.profile.find({millis:{$gt:1}}).sort({ts:1}).pretty()

    db.getProfilingLevel() // 1

    db.getProfilingStatus()

    db.setProfilingLevel(1,4)

