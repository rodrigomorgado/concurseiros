var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    url = require('url'),
    sconf = require('./config/server');

var app = express();

app.get('/', function (req, res) {
    var reqUrl = url.parse(req.url, true);
    console.log(reqUrl.pathname);
    fs.createReadStream(sconf.root + sconf.index).pipe(res);
});

app.get('/scripts/*', function (req, res) {
    var reqUrl = url.parse(req.url, true);
    console.log(reqUrl.pathname);
    fs.createReadStream(sconf.root + reqUrl.pathname).pipe(res);
});

app.get('/AppAngular/*', function (req, res) {
    var reqUrl = url.parse(req.url, true);
    console.log(reqUrl.pathname);
    fs.createReadStream(sconf.root + reqUrl.pathname).pipe(res);
});

app.listen(sconf.port);