var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/employees", function (err, db) {

    db.collection('emp3', function (err, db) {
		
	 group({
     "key": {
         "dept_name": true,
         "gender": true     },
     "initial": {
         "countemp_no": 0
     },
     "reduce": function(obj, prev) {
         if (obj.emp_no != null) if (obj.emp_no instanceof Array) prev.countemp_no += obj.emp_no.length;
         else prev.countemp_no++;
     }
 });
        
    });
                
});