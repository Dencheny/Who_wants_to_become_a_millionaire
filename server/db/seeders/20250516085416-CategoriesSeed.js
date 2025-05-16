'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'удивительные еноты',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'улетный футбол',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'прекрасный JS',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', {
      name: [
        'удивительные еноты',
        'улетный футбол',
        'прекрасный JS'
      ]
    }, {});
  }
};