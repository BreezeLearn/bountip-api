'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    console.log('Running the migration: up');
    await queryInterface.removeColumn('user', 'username');
    console.log('Migration completed successfully');
  },

  down: async (queryInterface, Sequelize) => {
    console.log('Running the migration: down');
    await queryInterface.addColumn('user', 'username', Sequelize.STRING);
    console.log('Rollback completed successfully');
  },
};
