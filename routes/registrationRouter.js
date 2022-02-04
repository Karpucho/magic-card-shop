const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')
  // .get((req, res) => {
  //   res.send('REGA router was here');
  // });
  .get((req, res) => {
    res.render('registration');
  })
  .post(async (req, res) => {
    let message = 'error';
    const {
      name,
      email,
      password,
      city,
    } = req.body;
    const users = await User.findAll({
      where: { email },
      raw: true,
    });

    if (users.length !== 0) {
      message = 'addedBefore';
      res.redirect('/registration');
    } else {
      const user = await User.create({
        name,
        email,
        city,
        password: await bcrypt.hash(password, 10),
      });
      req.session.user = user;
      req.session.isAuthorized = true;
      message = 'newOne';
      res.redirect('/');
    }
  });
module.exports = router;
