const db = require('../models');
const LibraryPatrons = db.libraryPatronModel;

// Create and Save a new book
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: 'Library Patron Data can not be empty!' });
    return;
  }

  // Create a book
  const libraryPatron = new LibraryPatrons({
    patronEmail: req.body.patronEmail,
    patronName: req.body.patronName,
    patronFine: req.body.patronFine ? req.body.patronFine : false,
    patronCanLend: req.body.patronCanLend ? req.body.patronCanLend : false,
    patronIsBanned: req.body.patronIsBanned ? req.body.patronIsBanned : false,
    patronImage: req.body.patronImage,
    patronBooksOwned: req.checkBody("please enter book properties").custom(data => Array.isArray(data) && data.length)
  });

  // Save book in the database
  libraryPatron
    .save(libraryPatron)
    .then(data => {
      console.log(data);
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message ||
          'Some error occurred while creating the Library Patron.'
      });
    });
};
