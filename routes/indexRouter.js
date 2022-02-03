const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.render('index', {
      isAuthorized: req.session.isAuthorized,
      name: req.session.user?.name,
    });
  });

module.exports = router;
