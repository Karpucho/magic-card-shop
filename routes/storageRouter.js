const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.send('STORAGE router was here');
  });

module.exports = router;
