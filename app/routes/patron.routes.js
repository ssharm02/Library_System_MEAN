module.exports = app => {
  const librarypatrons = require('../controller/libraryPatron.controller');

  var router = require('express').Router();

  // Create a new librarypatron
  router.post('/createPatron', librarypatrons.create);

  // Retrieve all librarypatrons
  router.get('/getAllPatrons', librarypatrons.findAll);

  // Retrieve all published librarypatrons
  router.get('/published', librarypatrons.findAllPublished);

  // Retrieve a single librarypatron with id
  router.get('/:id', librarypatrons.findOne);

  // Update a librarypatron with id
  router.put('/:id', librarypatrons.update);

  // Delete a librarypatron with id
  router.delete('/:id', librarypatrons.delete);

  // Create a new librarypatron
  router.delete('/', librarypatrons.deleteAll);

  app.use('/api/librarypatrons', router);
};
