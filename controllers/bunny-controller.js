const Bunny = require('../models/bunny');

const bunnyController = {};

bunnyController.index = (req, res) => {
  Bunny.findAll()
    .then(bunnies => {
      res.render('products/index', { bunnies: bunnies});
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

bunnyController.first = (req, res) => {
    Bunny.findAll()
      .then(bunnies => {
        res.render('products/firstlink', { bunnies: bunnies});
      })
      .catch(err => {
        res.status(400).json(err);
      });
};

bunnyController.second = (req, res) => {
    Bunny.findAll()
      .then(bunnies => {
        res.render('products/secondlink', { bunnies: bunnies});
      })
      .catch(err => {
        res.status(400).json(err);
      });
};

bunnyController.third = (req, res) => {
    Bunny.findAll()
      .then(bunnies => {
        res.render('products/thirdlink', { bunnies: bunnies});
      })
      .catch(err => {
        res.status(400).json(err);
      });
};

module.exports = bunnyController;
