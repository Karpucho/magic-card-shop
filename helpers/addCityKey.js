const addCityKey = (cards) => {
  cards.map((elem) => {
    elem.city = elem['User.city'];
    delete elem['User.city'];
  });
};

module.exports = addCityKey;
