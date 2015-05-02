var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    url = require('url'),
    mysql = require('mysql'),
    bodyParse = require('body-parser'),
    exec = require('child_process').exec,
    sconf = require('./config/server'),
    cconf = require('../common/conf.js'),
    endpoint = require('../common/endpoint.js');

var app = express();

app.use(bodyParse.json());

app.get('/', function (req, res) {
    'use strict';
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

app.get('/fonts/*', function (req, res) {
    var reqUrl = url.parse(req.url, true);
    fs.createReadStream(cconf.web + reqUrl.pathname).pipe(res);
});

app.get('/images/*', function (req, res) {
    var reqUrl = url.parse(req.url, true);
    res.writeHead(200);
    fs.createReadStream(cconf.web + reqUrl.pathname).pipe(res);    
});

app.get('/AppAngular/*', function (req, res) {
    var reqUrl = url.parse(req.url, true);
    res.writeHead(200, { 'content-type': 'text/javascript' });
    fs.createReadStream(cconf.web + reqUrl.pathname).pipe(res);
});

app.get(endpoint.getRanking, function (req, res) {
    var connection = mysql.createConnection(sconf.mysql);
    connection.query('SELECT name, email, score FROM users', function (err, rows, fields) {
        connection.end();
        if (!err) {
            //Returns the rows to the user with a status code 200
            res.status(200).send(JSON.stringify(rows));
        } else {
            //Query failed. Send a status code 500
            res.status(500);
            res.end(err);
        }
	});
});

app.post(endpoint.insertScore, function (req, res) {
    connection = mysql.createConnection(sconf.mysql);
    connection.query('INSERT INTO users SET ?', req.body, function (err) {
        connection.end();
        if (!err) {
            //Returns nothing to the user with a status code 200
            res.status(200).end('ok');
        } else {
            //Query failed. Send a status code 500
            res.status(500);
            res.end(err);
        }
    });
});

app.get(endpoint.updateServer, function (req, res) {
    exec(cconf.backend + '/scripts/update_server.sh', function (err, stdout, stderr) {
        if( !err ){
            res.end(stdout);
        } else {
            res.send(err);
            res.end(stderr);
        }
    });
});

app.listen(sconf.port);