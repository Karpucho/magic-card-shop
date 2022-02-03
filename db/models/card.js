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
    static associate({ User, Basket }) {
      Card.belongsTo(User, { foreignKey: 'userId' });
    //   Card.belongsTo(Basket, { foreignKey: 'cardsId' });
    }
  }
  Card.init({
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
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Card',
  });
  return Card;
};
