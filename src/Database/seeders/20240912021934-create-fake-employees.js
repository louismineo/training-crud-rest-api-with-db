'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('employees', [
      {
        uuid:'94b1c51e-fca3-4621-b28d-0a58fdd7bf55',
        name: 'Albert',
        salary:5555,
        department:'PS',
        createdAt:'2024-09-11 14:18:28.499+08',
        updatedAt:'2024-09-11 14:18:28.499+08'
      },
      {
        uuid:'fbef5386-a618-4b1b-a41f-2b23ac20de9e',
        name: 'Benny',
        salary:4444,
        department:'HR',
        createdAt:'2024-09-11 14:18:56.632+08',
        updatedAt:'2024-09-11 14:18:56.632+08'
      },
      {
        uuid:'6968ea53-ced3-4280-85d3-388c19e6de0d',
        name: 'Charlie',
        salary:3333,
        department:'HR',
        createdAt:'2024-09-11 14:19:18.447+08',
        updatedAt:'2024-09-11 14:19:18.447+08'
      }
    ], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
