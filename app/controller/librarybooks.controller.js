const db = require('../models');
const LibraryBooks = db.library;

// Create and Save a new book
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: 'Book Title can not be empty!' });
    return;
  }

  // Create a book
  const librarybook = new LibraryBooks({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save book in the database
  librarybook
    .save(librarybook)
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while creating the LibraryBooks.'
      });
    });
};
// Retrieve all books from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title
    ? { title: { $regex: new RegExp(title), $options: 'i' } }
    : {};

  LibraryBooks.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving books.'
      });
    });
};

// Find a single book with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  LibraryBooks.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: 'Not found books with id ' + id });
      else res.send(data);
    })
    .catch(err => {
      res.status(500).send({ message: 'Error retrieving books with id=' + id });
    });
};

// Update a book by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!'
    });
  }

  const id = req.params.id;

  LibraryBooks.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Book with id=${id}. Maybe book was not found!`
        });
      } else res.send({ message: 'Book was updated successfully.' });
    })
    .catch(err => {
      res.status(500).send({
        message: 'Error updating book with id=' + id
      });
    });
};

// Delete a book with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  LibraryBooks.findByIdAndRemove(id)
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Book with id=${id}. Maybe Book was not found!`
        });
      } else {
        res.send({
          message: 'Book was deleted successfully!'
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: 'Could not delete Book with id=' + id
      });
    });
};

// Delete all books from the database.
exports.deleteAll = (req, res) => {
  LibraryBooks.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Books were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while removing all book.'
      });
    });
};

// Find all published books
exports.findAllPublished = (req, res) => {
  LibraryBooks.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving books.'
      });
    });
};
