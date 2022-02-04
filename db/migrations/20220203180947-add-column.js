module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Baskets', 'cardId', Sequelize.INTEGER);
    await queryInterface.addConstraint('Baskets', {
      fields: ['cardId'],
      type: 'foreign key',
      references: {
        table: 'Cards',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.addConstraint('Baskets', {
      fields: ['userId'],
      type: 'foreign key',
      references: {
        table: 'Users',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
    await queryInterface.dropTable('BasketCards');
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Baskets', 'cardId');
  },
};
