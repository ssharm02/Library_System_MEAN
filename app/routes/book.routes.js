module.exports = app => {
  const librarybooks = require('../controller/librarybooks.controller.js');

  var router = require('express').Router();

  // Create a new librarybook
  router.post('/', librarybooks.create);

  // Retrieve all librarybooks
  router.get('/', librarybooks.findAll);

  // Retrieve all published librarybooks
  router.get('/published', librarybooks.findAllPublished);

  // Retrieve a single librarybook with id
  router.get('/:id', librarybooks.findOne);

  // Update a librarybook with id
  router.put('/:id', librarybooks.update);

  // Delete a librarybook with id
  router.delete('/:id', librarybooks.delete);

  // Create a new librarybook
  router.delete('/', librarybooks.deleteAll);

  app.use('/api/librarybooks', router);
};
