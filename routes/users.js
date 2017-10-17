const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt-as-promised');
const knex = require('../db/knex');

router.post('/', (req, res, next) => {
  bcrypt.hash(req.body.password, 12)
    .then(hashed_password => knex('users')
      .insert({
        email: req.body.email,
        hashed_password,
      }, '*'))
    .then((users) => {
      const user = users[0];
      delete user.hashed_password;
      // returns JSON object of new users without password
      res.send(user);
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
