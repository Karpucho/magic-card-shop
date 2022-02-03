const router = require('express').Router();
const { Card, User } = require('../db/models');
const addCityKey = require('../helpers/addCityKey');

router.route('/')
  .get(async (req, res) => {
    // проверка аутентификации
    // if (true) {
    // снимается с сессии

    // вытаскивается из базы данных
    const cards = await Card.findAll({
      // какое либо условие
      where: {
        id: [1, 3],
      },
      include: [{
        model: User,
        attributes: ['city'],
      }],
      raw: true,
    });

    addCityKey(cards);

    res.render('index', {
      isAutorized: true,
      cards,
    });
  });

module.exports = router;
