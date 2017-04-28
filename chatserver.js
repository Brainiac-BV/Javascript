/**
 * Created by keith gray on 5/9/2016.
 */
var http = require('http'),
    url = require('url'),
    fs = require('fs');

var messages = [];
var clients = [];

http.createServer( function (req, res) {
    fs.readFile('./index.html', function (err, data) {
        if(err) {
            console.log(err);
        }
        else
            res.end(data);
    })

}).listen(8080);
console.log('Server Running on port 8080');