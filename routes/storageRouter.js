const router = require('express').Router();
const { Card, User } = require('../db/models');
const addCityKey = require('../helpers/addCityKey');

router.get('/', async (req, res) => {
  const cards = await Card.findAll({
    raw: true,
    include: {
      model: User,
      attributes: ['city'],
    },
  });

  addCityKey(cards);
  res.render('storage', {
    isAuthorized: req.session.isAuthorized,
    cards,
  });
});

module.exports = router;
