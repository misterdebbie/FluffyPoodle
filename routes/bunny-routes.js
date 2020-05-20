const express = require('express');
const bunnyController = require('../controllers/bunny-controller');
const bunnyRouter = express.Router();

bunnyRouter.get('/', bunnyController.index)

module.exports = bunnyRouter;
