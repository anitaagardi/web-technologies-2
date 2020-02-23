var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/*MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var mysort = { name: 1 };
    dbo.collection("customers").find().sort(mysort).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});*/
MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then((db) => {
        var dbo = db.db("mydb");
        var mysort = { name: 1 };
        return dbo.collection("customers").find().sort(mysort).toArray({
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
