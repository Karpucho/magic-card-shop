const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Basket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User, Card }) {
      // Basket.belongsTo(User, { foreignKey: 'userId' });
      // Basket.hasMany(Card);

      // define association here
    }
  }
  Basket.init({
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    cardsId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Cards',
        key: 'id',
      },
    },
  }, {
    sequelize,
    modelName: 'Basket',
  });
  return Basket;
};
