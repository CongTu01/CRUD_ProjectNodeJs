const expess = require('express');
const Me = expess.Router();

const MeController = require('../app/controllers/MeController');

Me.get('/course/store',MeController.store)


module.exports = Me;