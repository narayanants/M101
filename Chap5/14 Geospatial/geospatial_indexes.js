/**
 * Created by vicky on 12/3/16.
 */

/*
*   Allow you to find things based on location
*   2D and 3D models
*   2D
*       X and Y axis
*       Location co-ordinates: [x,y]
*       ensureIndex({"location":"2d","type":1});
* */

       db.students.find({location:{$near:[x,y]}}).limit(20);

       db.stores.ensureIndex({location:'2d',type:1});

       db.stores.find({location:{$near:[50,50]}});

       