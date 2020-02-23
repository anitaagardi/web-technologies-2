var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/";

/*MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: /^S/ };
    var newvalues = { $set: { name: "Minnie" } };
    dbo.collection("customers").updateMany(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log(res.result.nModified + " document(s) updated");
        db.close();
    });
});*/

MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then((db) => {
        var dbo = db.db("mydb");
        var myquery = { address: /^S/ };
        var newvalues = { $set: { name: "Minnie" } };
        return dbo.collection("customers").updateMany(myquery, newvalues, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        }).then((collection) => {
            console.log(collection);
            console.log(collection.result.nModified + " document(s) updated");
        }).catch(err => {
            console.log(`DB Connection Error: ${err.message}`);
        }).finally(() => {
            console.log('Close DB');
            db.close();
        })
    });
