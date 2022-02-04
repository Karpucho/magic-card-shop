const router = require('express').Router();
const {
  Card,
} = require('../db/models');

router.route('/')
  .get((req, res) => {
    res.render('edit');
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
