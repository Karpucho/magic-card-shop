const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.route('/')
  .get((req, res) => {
    res.render('login');
  })
  .post(async (req, res) => {
    const { email, password } = req.body;
    //
    const user = await User.findOne({
      where: { email },
    });
    if (user && await bcrypt.compare(password, user.password)) {
      req.session.user = user;
      req.session.isAuthorized = true;
      res.redirect('/');
    } else {
      res.send('Что-то не так, проверь логин или пароль');
    }
  });
module.exports = router;
