const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
const server = require('../index');

chai.use(chaiHttp);

describe('Private API', () => {

    it('Private API should return success as it is authorized.', (done) => {
        chai.request(server)
        .get('/')
        .end((err, response) => {
            expect(response.status).to.be.equal(200);
            expect(response.body).to.have.all.keys('status', 'message');
            done();
        })
    });
});