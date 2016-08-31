var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var config = require('./config');
var Model = require('./model/model');
var db = 'mongodb://'+config.dbUsername+':'+config.dbPassword+'@'+config.dbHostname+':'+config.dbPort+'/'+config.dbName;
// var db = 'mongodb://localhost/questionnaire';
var app = new express();

mongoose.connect(db);

app.set('port', config.apiPort);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.static( './client/src'));

app.get('/response', function(req, res) {
    Model.find({})
    .exec(function(err, data) {
        if(err) {
            res.send('error');
        } else {
            console.log('[GET] Getting all responses..');
            res.json(data);
        }
    });
});

app.get('/response/:id', function(req, res) {
    Model.findOne({
        employeeID: req.params.id
    })
    .exec(function(err, data) {
        if(err) {
            res.send('error');
        } else {
            console.log('[GET] Getting individual response..');
            res.json(data);
        }
    });
});

app.post('/response', function(req, res) {
    Model.create(req.body, function(err, data) {
        if(err) {
            res.send('error');
        } else {
            console.log('[POST] Posting a response.');
            res.send('success');
        }
    });
});

app.put('/response/:id', function(req, res) {
    Model.findOneAndUpdate({
        employeeID: req.params.id
    }, {
        $set: req.body
    }, {
        upsert: true
    }, function(err, data) {
        if(err) {
            res.send('error');
        } else {
            console.log('[PUT] Updating response for user..');
            res.send('success');
        }
    });
});

app.delete('/response/:id', function(req, res) {
    Model.findOneAndRemove({
        employeeID: req.params.id
    }, function(err, data) {
        if(err) {
            res.send('error');
        } else {
            res.send('success');
        }
    });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
