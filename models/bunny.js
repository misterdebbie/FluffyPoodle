const db = require('../db/config');

const Bunny = {};

Bunny.findAll = () => {
  return db.query('SELECT * FROM bunny ORDER BY id ASC');
};

module.exports = Bunny;
