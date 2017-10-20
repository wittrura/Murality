const express = require('express');
const router = express.Router();

const bcrypt = require('bcrypt-as-promised');
const knex = require('../db/knex');

// index, to show logged in users
// router.get('/', (req, res, next) => {
//   res.render('auth/index.ejs', { title: 'Express', user: req.session.user });
// });

// signin page, for user to enter email / password
// router.get('/login', (req, res, next) => {
//   res.render('auth/login.ejs');
// });

// remove logged in user from session
router.get('/logout', (req, res, next) => {
  req.session = null;
  res.redirect('/');
});

// add user as logged in, create session
router.post('/login', (req, res, next) => {
  knex('users')
    .where({email: req.body.email})
    .first()
    .then((user) => {
      if (!user) {
        return callback("Email and password don't match");
      }
      bcrypt.compare(req.body.password, user.hashed_password)
        .then(() => {
          req.session.user = user;
          res.redirect('/');
        })
        // .catch(bcrypt.MISMATCH_ERROR => {
        //   res.render('auth/signin.ejs', {error: "Email and password don't match"});
        // })
        .catch(() => {
          res.render('auth/login.ejs', {error: "Email and password don't match"});
        });
    });
});

module.exports = router;
