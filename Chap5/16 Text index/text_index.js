/**
 * Created by vicky on 12/3/16.
 */

/*
*   Text index for faster searching
*   Full text search index
*
* */

    db.sentences.ensureIndex({'words':'text'});

    db.sentences.find({$text:{$search:'dog'}});


    db.sentences.find({$text:{$search:'dog tree obsidian'}},{score:{$meta:'textScore'}}).sort({score:{$meta:'textScore'}});