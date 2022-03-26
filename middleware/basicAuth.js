const auth = require('basic-auth');


const mwBasicAuth = async (req, res, next) => {
    console.log('Middleware: Basic Auth');

    const user = await auth(req);

    const username = 'ayush';
    const password = '123456';

    if (req.path == '/public') {
        console.log('This does not required any authentication.');
        next();    

    } else if (user && user.name === username && user.pass === password) {
        console.log('Basic Auth: Success');
        next();

    } else {
        console.log('Basic Auth: Failure');
        res.status(401).send({
            status: 401,
            message: "Unauthorized"
        });
    }
};

module.exports = mwBasicAuth;