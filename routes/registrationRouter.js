const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.send('REGA router was here');
  });

module.exports = router;
