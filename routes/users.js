const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt-as-promised');
const knex = require('../db/knex');


router.post('/', (req, res, next) => {
  console.log(req.body);
  bcrypt.hash(req.body.password, 12)
    .then(hashed_password => knex('users')
      .insert({
        email: req.body.email,
        hashed_password,
      }, '*'))
    .then((users) => {
      const user = users[0];
      delete user.hashed_password;
      // creates new session
      req.session.user = user;
      res.redirect('/');
    })
    .catch((err) => {
      next(err);
    });
});

// signin page, for user to enter email / password
router.get('/signup', (req, res, next) => {
  res.render('auth/signup.ejs');
});

module.exports = router;
