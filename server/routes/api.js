var express = require('express');
var mongoose = require('mongoose');
var Book = require('../modules/book.js');

var router = express.Router();

var db = 'mongodb://quocn:1234@ds135384.mlab.com:35384/book';
mongoose.Promise = global.Promise;

mongoose.connect(db, {useMongoClient: true}, function (err, res) {
  if (err) {
    console.log('Failed to connected to ' + db);
  } else {
    console.log('Connected to ' + db);
  }
});

// Get All Books
router.get('/books', function (req, res) {
  Book.find({})
    .exec(function (err, books) {
      if (err) {
        console.log('Error ')
      } else {
        res.json(books);
      }
    });
});

// Get A Book
router.get('/books/:id', function (req, res) {
  Book.find({_id: req.params.id})
    .exec(function (err, book) {
      if (err) {
        console.log('Error ')
      } else {
        res.json(book);
      }
    });
});

// Create A Book
router.post('/books', function (req, res) {
  Book.create(req.body, function (err, book) {
    if (err) {
      console.log('Error ')
    } else {
      res.json(book);
    }
  });
});

// Update A Book
router.put('/books/:id', function (req, res) {
  Book.update({_id: req.params.id}, req.body, function (err, book) {
    if (err) {
      console.log('Error ')
    } else {
      res.json(book);
    }
  });
});

// Delete A Book
router.delete('/books/:id', function (req, res) {
  Book.deleteOne({_id: req.params.id}, function (err, book) {
    if (err) {
      console.log('Error ')
    } else {
      res.json(book);
    }
  });
});

module.exports = router;
