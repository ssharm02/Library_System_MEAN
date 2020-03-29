const dbConfig = require('../config/db.config.js');

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.libraryBookModel = require('./library.bookmodel.js')(mongoose);
db.librarianModel = require('./library.librarianmodel.js')(mongoose);
db.libraryPatronModel = require('./library.patronmodel.js')(mongoose);
db.libraryPostModel = require('./library.postmodel.js')(mongoose);
module.exports = db;
