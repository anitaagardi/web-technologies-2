var fs = require("fs");

console.log("Going to read directory /test");
fs.readdir("/test/", function (err, files) {
    if (err) {
        return console.error(err);
    }
    files.forEach(function (file) {
        console.log(file);
    });
});
