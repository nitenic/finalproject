var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/employees", function (err, db) {

    db.collection('emp1', function (err, db) {
		
		group({
     "key": {
         "gender": true
     },
     "initial": {},
     "reduce": function(obj, prev) {
         prev.birthDate = isNaN(prev.birthDate) ? obj.birth_date : Math.min(prev.birthDate, obj.birth_date);
     }
 });
        
    });
                
});