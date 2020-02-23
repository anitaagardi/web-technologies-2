var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

/*MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: "Valley 345" };
    var newvalues = { $set: { name: "Mickey", address: "Canyon 123" } };
    dbo.collection("customers").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        db.close();
    });
});*/
MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then((db) => {
        var dbo = db.db("mydb");
        var myquery = { address: "Valley 345" };
        var newvalues = { $set: { name: "Mickey", address: "Canyon 123" } };
        return dbo.collection("customers").updateOne(myquery, newvalues, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }).then((collection) => {
            console.log(collection);
        }).catch(err => {
            console.log(`DB Connection Error: ${err.message}`);
        }).finally(() => {
            console.log('Close DB');
            db.close();
        })
    });
