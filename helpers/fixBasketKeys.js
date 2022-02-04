const fixBasketKeys = (cards) => {
  cards.map((card) => {
    card.city = card['Card.User.city'];
    delete card['Card.User.city'];
    card.cardsName = card['Card.cardsName'];
    delete card['Card.cardsName'];
    card.condition = card['Card.condition'];
    delete card['Card.condition'];
    card.img = card['Card.img'];
    delete card['Card.img'];
    card.price = card['Card.price'];
    delete card['Card.price'];
  });
};

module.exports = fixBasketKeys;
