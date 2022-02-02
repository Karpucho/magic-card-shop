const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    res.send('index router here');
  });

module.exports = router;
