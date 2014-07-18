var urlstring = "mongodb://localhost/ExpressExampleDatabase";
var mongoose = require('mongoose');
mongoose.createConnection(urlstring);

var bookDatabaseSchema = {
    name: String,
    author: String
};

var bookSchema = new mongoose.Schema(bookDatabaseSchema);
var bookModel = mongoose.model("Books", bookSchema);


var addBook = function (req, res) {
    console.log(req.body);
    new bookModel(req.body).save(function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("New Book added: " + result);
        res.end("New Book added: " + result);
    });
};
var updateBook = function (req, res) {
    bookModel.update({_id: req.params.id}, {$set: req.body }, function callback(err, numAffected) {
        console.log("Number of Docs affected: " + numAffected);
        res.end("Number of Docs affected: " + numAffected);
    });
};
var deleteBook = function (req, res) {
    bookModel.find({_id: req.params.id}).remove().exec(function (err, result) {
        console.log("Number of Docs affected: " + result);
        res.end("Number of Docs affected: " + result);
    });
};
var showBooks = function (req, res) {
    bookModel.findOne({_id: req.params.id}).exec(function (err, result) {
        console.log(JSON.stringify(result));
        res.end(JSON.stringify(result));
    });
};
var showBooksList = function (req, res) {
    bookModel.find({}).exec(function (err, result) {
        console.log(JSON.stringify(result));
        res.end(JSON.stringify(result));
    });
};

module.exports.addBook = addBook;
module.exports.updateBook = updateBook;
module.exports.deleteBook = deleteBook;
module.exports.showBooks = showBooks;
module.exports.showBooksList = showBooksList;


