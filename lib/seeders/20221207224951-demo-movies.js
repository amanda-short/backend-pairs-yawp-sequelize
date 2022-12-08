'use strict';

const db = require('../models');

module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await db.Genre.bulkCreate([
      {
        name: 'romance',
      },
    ]);

    await queryInterface.bulkInsert('Movies', [
      {
        title: 'Mulan',
        description:
          'Mulan must impersonate warrior to save China and restore her familys honor',
        image:
          'https://static01.nyt.com/images/2020/09/05/arts/22mulan-1998-1/merlin_9808097_8077df05-f783-4b5d-a550-d69296f37652-jumbo.jpg?quality=75&auto=webp',
        releaseYear: 1998,
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down() {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
