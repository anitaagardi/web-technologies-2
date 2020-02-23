var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/*MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myquery = { address: 'Mountain 21' };
    dbo.collection("customers").deleteOne(myquery, function (err, obj) {
        if (err) throw err;
        console.log("1 document deleted");
        db.close();
    });
});*/

MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then((db) => {
        var dbo = db.db("mydb");
        var myquery = { address: 'Mountain 21' };
        return dbo.collection("customers").deleteOne(myquery, {
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
