var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    url = require('url'),
    sconf = require('./config/server');
    cconf = require('../common/conf.js');

var app = express();

app.get('/', function (req, res) {
    var reqUrl = url.parse(req.url, true);
    fs.createReadStream(cconf.web + sconf.default_file).pipe(res);
    res.end();
});

app.get('/*', function (req, res) {
    var reqUrl = url.parse(req.url, true);
    fs.createReadStream(cconf.web + reqUrl.pathname).pipe(res);
    res.end();
});


app.listen(sconf.port);