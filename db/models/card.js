const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Card extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate({ Basket, BasketCard }) {
      Card.belongsTo(Basket);
      Card.belongsToMany(Basket, { through: BasketCard, foreignKey: 'cardId', otherKey: 'basketId' });

    }
  }
  Card.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    cardsName: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    img: {
      allowNull: false,
      type: DataTypes.TEXT,
    },
    price: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
