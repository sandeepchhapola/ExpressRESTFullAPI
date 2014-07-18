var mongoose = require('mongoose');
var urlstring = "mongodb://localhost/ExpressExampleDatabase";
mongoose.createConnection(urlstring);

var usersDatabaseSchema = {
    name: String,
    gender: String
};
var usersSchema = new mongoose.Schema(usersDatabaseSchema);
var userModel = mongoose.model("Users", usersSchema);


var addUser = function (req, res) {
    new userModel(req.body).save(function (err, result) {
        if (err) {
            console.log(err);
            return;
        }
        console.log("New Book added: " + result);
        res.end("New Book added: " + result);
    });
};
var updateUser = function (req, res) {
    userModel.update({_id: req.params.id}, {$set: req.body }, function callback(err, numAffected) {
        console.log("Number of Docs affected: " + numAffected);
        res.end("Number of Docs affected: " + numAffected);
    });
};
var deleteUser = function (req, res) {
    userModel.find({_id: req.params.id}).remove().exec(function (err, result) {
        console.log("Number of Docs affected: " + result);
        res.end("Number of Docs affected: " + result);
    });
};
var showUser = function (req, res) {
    userModel.findOne({_id: req.params.id}).exec(function (err, result) {
        console.log(JSON.stringify(result));
        res.end(JSON.stringify(result));
    });
};
var showUserList = function (req, res) {
    userModel.find({}).exec(function (err, result) {
        console.log(JSON.stringify(result));
        res.end(JSON.stringify(result));
    });
};

module.exports.addUser = addUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.showUser = showUser;
module.exports.showUserList = showUserList;
