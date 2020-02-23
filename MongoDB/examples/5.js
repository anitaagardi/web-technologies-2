var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

/*MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = [
        { _id: 154, name: 'Chocolate Heaven' },
        { _id: 155, name: 'Tasty Lemon' },
        { _id: 156, name: 'Vanilla Dream' }
    ];
    dbo.collection("products").insertMany(myobj, function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});*/
MongoClient.connect(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then((db) => {
        var dbo = db.db("mydb");
        var myobj = [
            { _id: 154, name: 'Chocolate Heaven' },
            { _id: 155, name: 'Tasty Lemon' },
            { _id: 156, name: 'Vanilla Dream' }
        ];
        return dbo.collection("products").insertMany(myobj, {
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
