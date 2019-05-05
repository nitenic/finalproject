var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/employees", function (err, db) {

    db.collection('emp5', function (err, db) {
		
	aggregate(
     {$group:{_id:"$title", "avg duration in years": {$max:"$tenure"}}}
 );
        
    });
                
});