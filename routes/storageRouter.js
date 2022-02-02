const router = require('express').Router();
const { Card } = require('../db/models');

router.get('/', async (req, res, next) => {
  const cards = await Card.findAll();
  return res.render('storage', { cards });
});

module.exports = router;
