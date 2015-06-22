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

app.use(express.static(cconf.web));

//RECOVER MARINHA
app.get(endpoint.getRanking, function (req, res) {
    'use strict';
    var connection = mysql.createConnection(sconf.mysql);
    connection.query('SELECT id, name, email, score FROM users', function (err, rows, fields) {
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

//CREATE MARINHA
app.post(endpoint.insertScore, function (req, res) {
    'use strict';
    var connection = mysql.createConnection(sconf.mysql);
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

//RECOVER TRT
app.get(endpoint.getRankingTRT, function (req, res) {
    'use strict';
    var connection = mysql.createConnection(sconf.mysql);
    connection.query('SELECT id, name, email, score FROM users_trt', function (err, rows, fields) {
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

//CREATE TRT
app.post(endpoint.insertScoreTRT, function (req, res) {
    'use strict';
    var connection = mysql.createConnection(sconf.mysql);
    connection.query('INSERT INTO users_trt SET ?', req.body, function (err) {
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


app.listen(sconf.port);
