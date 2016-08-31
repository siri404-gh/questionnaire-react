var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    employeeID: Number,
    emailID: String,
    marks: Number
});

module.exports = mongoose.model('questionnaire', schema );
