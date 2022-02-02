const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.send('login router was here');
  });

module.exports = router;
