var http = require('http'),
    fs = require('fs'),
    sconf = require('./config/server');

var server = http.createServer(function (req, res) {
    res.writeHead(200, { 'content-type': 'text/html' })
    fs.createReadStream(sconf.basepath + sconf.index).pipe(res);
});

server.listen(sconf.port);