const router = require('express').Router();
const { Card, User } = require('../db/models');


router.route('/')
  .get(async (req, res) => {
    const cards = await Card.findAll({
      raw: true,
      include: {
        model: User,
        attributes: ['city'],
      },
    });

    cards.map((card) => {
      card.city = card['User.city'];
      delete card['User.city'];
    });

    res.render('index', {
      isAuthorized: req.session.isAuthorized,
      cards,
    });
  });

module.exports = router;
