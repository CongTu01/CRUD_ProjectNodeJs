const expess = require('express');
const check = expess.Router();

const checkController = require('../app/controllers/CheckController');

check.get('/show',checkController.show)

check.get('/',checkController.index);

module.exports = check;