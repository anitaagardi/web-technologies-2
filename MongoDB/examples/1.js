var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";
/*
If you are using version >= 3.1.0 change you mongo connection file to ->

 MongoClient.connect("mongodb://localhost:27017/YourDB", {
   useNewUrlParser: true,
   useUnifiedTopology: true
 })
 */
/*MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    console.log("Database created!");
    db.close();
});*/

MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(() => console.log('DB Connected!'))
    .catch(err => {
        console.log('DB Connection Error: ${err.message}');
    });


