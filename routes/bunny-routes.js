const express = require('express');
const bunnyController = require('../controllers/bunny-controller');
const bunnyRouter = express.Router();

bunnyRouter.get('/', bunnyController.index)
bunnyRouter.get('/one', bunnyController.first)
bunnyRouter.get('/two', bunnyController.second)
bunnyRouter.get('/three', bunnyController.third)
module.exports = bunnyRouter;
