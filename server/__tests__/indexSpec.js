var should = require('chai').should();
var supertest = require("supertest");
var url = supertest("http://localhost:5000");

describe("Testing API response for posting individual response", function(err){
    it("Should return a string 'success'.", function(done){
        url
        .post("/response")
        .send('Content-Type', /json/)
        .send({
            "employeeID": 241897,
            "emailID": "sree.com@gmail.com",
            "marks": 0
        })
        .expect(200)
        .end(function(err, res) {
            if(err) {
                throw err;
            }
            var response = res.text;
            response.should.be.equal('success');
            done();
        });
    });
});

describe("Testing API response for getting all responses", function(err){
    it("Should return an array of length at least 1", function(done){
        url
        .get("/response")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
            if(err) {
                throw err;
            }
            var response = JSON.parse(res.text);
            response.length.should.be.of.at.least(1);
            done();
        });
    });
});

describe("Testing API response for getting individual response", function(err){
    it("Should return an array of length 1 and employeeID 1", function(done){
        url
        .get("/response/241897")
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
            if(err) {
                throw err;
            }
            var response = JSON.parse(res.text);
            response.employeeID.should.be.equal(241897);
            done();
        });
    });
});

describe("Testing API response for updating individual response", function(err){
    it("Should return the string 'success'", function(done){
        url
        .put("/response/241897")
        .send('Content-Type', /json/)
        .send({
            "employeeID": 241892,
            "emailID": "sree2.com@gmail.com",
            "marks": 2
        })
        .expect(200)
        .end(function(err, res) {
            if(err) {
                throw err;
            }
            var response = res.text;
            response.should.be.equal('success');
            done();
        });
    });
});

describe("Testing API response for deleting individual response", function(err){
    it("Should return the string 'success'", function(done){
        url
        .delete("/response/241892")
        .expect(200)
        .end(function(err, res) {
            if(err) {
                throw err;
            }
            var response = res.text;
            response.should.be.equal('success');
            done();
        });
    });
});
