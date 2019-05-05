var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/employees", function (err, db) {

    db.collection('emp4', function (err, db) {
		
	group({
     "key": {
         "gender": true
     },
     "initial": {},
     "reduce": function(obj, prev) {
         prev.maximumvaluedept_name = isNaN(prev.maximumvaluedept_name) ? obj.dept_name : Math.max(prev.maximumvaluedept_name, obj.dept_name);
         prev.maxSalary = isNaN(prev.maxSalary) ? obj.salary : Math.max(prev.maxSalary, obj.salary);
     }
 });	
        
    });
                
});