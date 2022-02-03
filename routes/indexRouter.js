const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    let cards;
    // проверка аутентификации
    if (true) {
      // снимается с сессии
      const userId = 1;

      // вытаскивается из базы данных
      cards = [{
        id: 1,
        cardsName: 'first Card',
        price: '2$',
        condition: 'very nice',
        city: 'saint-P',
      },
      {
        id: 2,
        cardsName: 'second Card',
        price: '4$',
        condition: 'bad',
        city: 'MSK',
      },
      {
        id: 3,
        cardsName: 'third Card',
        price: '5$',
        condition: 'excelent',
        city: 'EKB',
      }];
    }
    res.render('index', {
      isAutorized: false,
      cards,
    });
  });

module.exports = router;
