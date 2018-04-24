var express = require('express');
var app = express();
var fs = require("fs");

app.get('/daftarPengguna', function (req, res) {
    fs.readFile( __dirname + "/" + "pengguna.json", 'utf8', function (err, data) {
        console.log(data);
        res.end(data);
    });

})

var server = app.listen(8181, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("Contoh app -> http://%s:%s", host, port)
})