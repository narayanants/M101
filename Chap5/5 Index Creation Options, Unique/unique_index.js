
db.stuff.createIndex({"thing":1},{unique:true});

db.stuff.remove({});

db.students.createIndex({student_id:1,class_id:1},{unique:true})