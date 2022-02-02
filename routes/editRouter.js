const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.send('EDIT router was here');
  });

module.exports = router;
