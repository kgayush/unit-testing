const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);

var username = "ayush";
var password = "123456";

function authenticateUser(user, password)
{
    var token = user + ":" + password;

    // Base64 Encoding -> btoa
    var hash = btoa(token); 

    return "Basic " + hash;
}

describe('Private API', () => {

    it('Private API should return success as it is authorized.', (done) => {
        chai.request(server)
        .get('/')
        .set('Authorization', authenticateUser(username, password))
        .end((err, response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body).to.have.all.keys('status', 'message');
            done();
        })
    });
});