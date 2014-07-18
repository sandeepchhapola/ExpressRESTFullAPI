var mongoose = require('mongoose');
var urlstring = "mongodb://localhost/ExpressExampleDatabase";
var dbconnection=mongoose.createConnection(urlstring);

var usersDatabaseSchema = {
    name: String,
    gender: String
};
var adminDatabaseSchema = {
    name: String,
    gender: String
};
var bookDatabaseSchema =
{
    name: String,
    author: String
};
var usersSchema = new mongoose.Schema(usersDatabaseSchema);
var userModel = dbconnection.model("Users", usersSchema);
var adminSchema = new mongoose.Schema(adminDatabaseSchema);
var adminModel = dbconnection.model("Admins", adminSchema);
var bookSchema = new mongoose.Schema(bookDatabaseSchema);
var bookModel = dbconnection.model("Books", bookSchema);

var addUser = function (req, res) {
    new userModel(req.body).save(function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
//        console.log("New Book added: " + result);
        res.end("New Book added: " + result);
    });
};
var updateUser = function (req, res) {
    userModel.update({_id: req.params.id}, {$set: req.body }, function callback(err, numAffected) {
//        console.log("Number of Docs affected: " + numAffected);
        res.end("Number of Docs affected: " + numAffected);
    });
};
var deleteUser = function (req, res) {
    userModel.find({_id: req.params.id}).remove().exec(function (err, result) {
//        console.log("Number of Docs affected: " + result);
        res.end("Number of Docs affected: " + result);
    });
};
var showUser = function (req, res) {
    userModel.findOne({_id: req.params.id}).exec(function (err, result) {
//        console.log(JSON.stringify(result));
        res.end(JSON.stringify(result));
    });
};
var showUserList = function (req, res) {
    userModel.find({}).exec(function (err, result) {
        res.header("Access-Control-Allow-Origin", 'http://localhost:63342');
//        console.log(JSON.stringify(result));
        res.end(JSON.stringify(result));
    });
};


var addAdmin = function (req, res) {
    new adminModel(req.body).save(function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
//        console.log("New Admin added: " + result);
        res.end("New Admin added: " + result);
    });
};
var updateAdmin = function (req, res) {
    adminModel.update({_id: req.params.id}, {$set: req.body }, function callback(err, numAffected) {
//        console.log("Number of Docs affected: " + numAffected);
        res.end("Number of Docs affected: " + numAffected);
    });
};
var deleteAdmin = function (req, res) {
    adminModel.find({_id: req.params.id}).remove().exec(function (err, result) {
//        console.log("Number of Docs affected: " + result);
        res.end("Number of Docs affected: " + result);
    });
};
var showAdmin = function (req, res) {
    adminModel.findOne({_id: req.params.id}).exec(function (err, result) {
//        console.log(JSON.stringify(result));
        res.end(JSON.stringify(result));
    });
};
var showAdminList = function (req, res) {
    adminModel.find({}).exec(function (err, result) {
//        console.log(JSON.stringify(result));
        res.end(JSON.stringify(result));
    });
};


var addBook = function (req, res) {
//    console.log(req.body);
    new bookModel(req.body).save(function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
//        console.log("New Book added: " + result);
        res.end("New Book added: " + result);
    });
};
var updateBook = function (req, res) {
    bookModel.update({_id: req.params.id}, {$set: req.body }, function callback(err, numAffected) {
//        console.log("Number of Docs affected: " + numAffected);
        res.end("Number of Docs affected: " + numAffected);
    });
};
var deleteBook = function (req, res) {
    bookModel.find({_id: req.params.id}).remove().exec(function (err, result) {
//        console.log("Number of Docs affected: " + result);
        res.end("Number of Docs affected: " + result);
    });
};
var showBooks = function (req, res) {
    bookModel.findOne({_id: req.params.id}).exec(function (err, result) {
//        console.log(JSON.stringify(result));
        res.end(JSON.stringify(result));
    });
};
var showBooksList = function (req, res) {
    bookModel.find({}).exec(function (err, result) {
//        console.log(JSON.stringify(result));
        res.end(JSON.stringify(result));
    });
};


module.exports.addUser = addUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.showUser = showUser;
module.exports.showUserList = showUserList;

module.exports.addAdmin = addAdmin;
module.exports.updateAdmin = updateAdmin;
module.exports.deleteAdmin = deleteAdmin;
module.exports.showAdmin = showAdmin;
module.exports.showAdminList = showAdminList;

module.exports.addBook = addBook;
module.exports.updateBook = updateBook;
module.exports.deleteBook = deleteBook;
module.exports.showBooks = showBooks;
module.exports.showBooksList = showBooksList;
