var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/*MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = { name: "Company Inc", address: "Highway 37" };
    dbo.collection("customers").insertOne(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");
        db.close();
    });
});*/

MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then((db) => {
        var dbo = db.db("mydb");
        var myobj = { name: "Company Inc", address: "Highway 37" };
        return dbo.collection("customers").insertOne(myobj, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }).then((collection) => {
            console.log("1 document inserted");
            //console.log(collection);
        }).catch(err => {
            console.log(`DB Connection Error: ${err.message}`);
        }).finally(() => {
            console.log('Close DB');
            db.close();
        })
    });