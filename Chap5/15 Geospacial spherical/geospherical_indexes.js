/**
 * Created by vicky on 12/3/16.
 */

/*
 * Gespherical indexes
 *
 * */

db.places.ensureIndex({location: '2dsphere'});

db.places.getIndexes();

db.places.find(
    {
        location: {
            $near: {
                $geometry: {type: "Point", coordinates: [123, 123]},
                $maxDistance: 2000
            }
        }
    });

db.stores.find({loc:
    {$near:
        {$geometry:
            {type: "Point", coordinates: [-130, 39]}, $maxDistance: 1000000}
    }
});