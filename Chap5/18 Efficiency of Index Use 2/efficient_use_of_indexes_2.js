/**
 * Created by vicky on 12/3/16.
 */

db.students.ensureIndex({class_id:1,student_id:1});


db.students.find({student_id:{$gt:50000},class_id:54}).sort({final_grade:1}).expain("executionStats");

db.students.ensureIndex({class_id:1,final_grade:1,student_id:1});

db.students.find({student_id:{$gt:50000},class_id:54}).sort({final_grade:-1}).expain("executionStats");


