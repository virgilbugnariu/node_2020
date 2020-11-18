'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const tags = [
    {
      label: 'tag-1',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      label: 'tag-2',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      label: 'tag-3',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      label: 'tag-4',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
   await queryInterface.bulkInsert('Tags', tags, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
