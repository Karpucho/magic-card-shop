const router = require('express').Router();

const { Card } = require('../db/models');


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const oneCard = await Card.findOne({
    where: { id },
  });
  res.render('edit', { oneCard });
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  console.log(id, '<-------');
  const {
    cardsName, price, img, condition,
  } = req.body;
  try {
    await Card.update({
      cardsName,
      price,
      img,
      condition,
    }, {
      where: { id },
    });
    res.json({ status: 'Ok' });
  } catch (error) {
    res.json({ status: error.message });
  }
});

router.get('/:id', async (req, res, next) => {
  const cards = await Card.findOne({
    where: { id: req.params.id },
    raw: true,
  });
  res.redirect('edit', { cards });
});

router.delete('/delete/:id', async (req, res, next) => {
  await Card.destroy({ where: { id: req.params.id } });
  res.sendStatus(200);
});

module.exports = router;
