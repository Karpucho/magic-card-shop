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

module.exports = router;
