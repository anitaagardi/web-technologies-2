var express = require('express');
var app = express();
var fs = require('fs');
var path = require('path')
var bodyParser = require('body-parser');
var multer = require('multer');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'tmp')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + '' + path.extname(file.originalname))
    }
})


var upload = multer({ storage: storage }).single('avatar');

app.post('/file_upload', function (req, res) {
    upload(req, res, function (err) {
        if (err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});


var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
