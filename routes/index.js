const routes = require('express').Router()

module.exports = () => {
    routes.get('/', require('./private')());
    routes.get('/public', require('./public')());
    
    return routes;
}