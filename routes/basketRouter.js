const router = require('express').Router();
const { Card, User, Basket } = require('../db/models');
const fixBasketKeys = require('../helpers/fixBasketKeys');

router.route('/')
  .get(async (req, res) => {
    let cards;

    if (req.session.isAuthorized) {
      const userId = req.session.user.id;

      cards = await Basket.findAll({
        where: { userId },
        raw: true,
        include:
          {
            model: Card,
            attributes: ['condition', 'cardsName', 'img', 'price'],
            include: { model: User, attributes: ['city'] },
          },
      });
      fixBasketKeys(cards);
    }

    res.render('basket', {
      isAuthorized: req.session.isAuthorized,
      cards,
    });
  });

router.route('/:cardId')
  .post(async (req, res) => {
    let message = 'error';
    if (req.session.isAuthorized) {
      const cardId = Number(req.params.cardId);
      const userId = req.session.user.id;

      const cards = await Basket.findAll({
        where: { cardId, userId },
        raw: true,
      });

      if (cards.length !== 0) {
        message = 'addedBefore';
      } else {
        await Basket.create({
          cardId, userId,
        });
        message = 'newOne';
      }
    }
    res.json({ message });
  })
  .delete(async (req, res) => {
    if (req.session.isAuthorized) {
      const id = req.params.cardId;

      await Basket.destroy({
        where: { id },
      });
      return res.status(201).end();
    }
    res.status(404).end();
  });

// router.route('add/:id')
//   .post(async (req, res) => {
//     if (req.session.isAuthorized) {
//       const { cardId, userId } = req.body;

//       await Card.cra({
//         where: { id },
//       });
//       return res.send('ok');
//     }
//     res.status(404).redirect('/');
//   });

module.exports = router;
