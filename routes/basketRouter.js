const router = require('express').Router();

router.route('/')
  .get((req, res) => {
    let cards;
    // проверка аутентификации
    if (true) {
      // снимается с сессии
      const userId = 1;
      cards = [{
        id: 1,
        name: 'first Card',
        price: '2$',
        condition: 'very nice',
        city: 'saint-P',
      },
      {
        id: 2,
        name: 'second Card',
        price: '4$',
        condition: 'bad',
        city: 'MSK',
      },
      ];
    }
    res.render('basket', {
      isUser: true,
      storageForm: true,
      cards,
    });
  });

module.exports = router;
