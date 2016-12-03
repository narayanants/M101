/**
 * Created by vicky on 12/3/16.
 */

/*
*   Designing/Using Indexes
*
*   Goal:
*   =====
*
*       Efficient R/W Ops
*
*       Selectivity Minimize scanned Records
*
*          How sorts are handled
*
*
* */

//  Wrong order of selectivity
db.students.findOne({student_id:{$gt:50000},class_id:54}).sort({student_id:1}).explain("executionStats");

/*
*       totalKeysExamined => How many key examined using the indexes
*       totalDocsExamined =>
* */

//noinspection JSUnresolvedFunction
db.students.find({student_id:{$gt:50000},class_id:54}).sort({student_id:1}).hint({class_id:1}).explain("executionStats");