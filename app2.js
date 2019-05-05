var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/employees", function (err, db) {

    db.collection('emp2', function (err, db) {

         aggregate(
     {"$group" : {_id:{dept:"$dept_name"}, count:{$sum:1}}}.toArray(function(err, items) {
            if(err) throw err;
            console.log(items);
        }));
        
    });
                
});