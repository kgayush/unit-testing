const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);

describe('Public API', () => {

    it('Public API should return success.', (done) => {
        chai.request(server)
        .get('/public')
        .end((err, response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body).to.have.all.keys('status', 'message');
            done();
        })
    });
});