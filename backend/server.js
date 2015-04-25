var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    url = require('url'),
    sconf = require('./config/server'),
    cconf = require('../common/conf.js');

var app = express();

app.get('/', function (req, res) {
    var reqUrl = url.parse(req.url, true);
    res.writeHead(200, { 'content-type': 'text/html' });
    fs.createReadStream(cconf.web + sconf.default_file).pipe(res);
});

app.get('/favicon.ico', function (req, res) {
    var reqUrl = url.parse(req.url, true);
    res.writeHead(200, { 'content-type': 'image/x-icon' });
    fs.createReadStream(cconf.web + 'images' + sconf.default_file).pipe(res);
});


app.get('/scripts/*', function (req, res) {
    var reqUrl = url.parse(req.url, true);
    res.writeHead(200, { 'content-type': 'text/javascript' });
    fs.createReadStream(cconf.web + reqUrl.pathname).pipe(res);
});

app.get('/styles/*', function (req, res) {
    var reqUrl = url.parse(req.url, true);
    res.writeHead(200, { 'content-type': 'text/css' });
    fs.createReadStream(cconf.web + reqUrl.pathname).pipe(res);
});

app.get('/AppAngular/*', function (req, res) {
    var reqUrl = url.parse(req.url, true);
    res.writeHead(200, { 'content-type': 'text/javascript' });
    fs.createReadStream(cconf.web + reqUrl.pathname).pipe(res);
});


app.listen(sconf.port);