var urlstring = "mongodb://localhost/ExpressExampleDatabase";
var mongoose = require('mongoose');
mongoose.createConnection(urlstring);

var adminDatabaseSchema = {
    name: String,
    gender: String
};
var adminSchema = new mongoose.Schema(adminDatabaseSchema);
var adminModel = mongoose.model("Admins", adminSchema);


var addAdmin = function (req, res) {
    new adminModel(req.body).save(function (err, result) {
        if (err) {
            console.log(err);
            return;
        }

        console.log("New Admin added: " + result);
        res.end("New Admin added: " + result);
    });
};
var updateAdmin = function (req, res) {
    adminModel.update({_id: req.params.id}, {$set: req.body }, function callback(err, numAffected) {
        console.log("Number of Docs affected: " + numAffected);
        res.end("Number of Docs affected: " + numAffected);
    });
};
var deleteAdmin = function (req, res) {
    adminModel.find({_id: req.params.id}).remove().exec(function (err, result) {
        console.log("Number of Docs affected: " + result);
        res.end("Number of Docs affected: " + result);
    });
};
var showAdmin = function (req, res) {
    adminModel.findOne({_id: req.params.id}).exec(function (err, result) {
        console.log(JSON.stringify(result));
        res.end(JSON.stringify(result));
    });
};
var showAdminList = function (req, res) {
    adminModel.find({}).exec(function (err, result) {
        console.log(JSON.stringify(result));
        res.end(JSON.stringify(result));
    });
};

module.exports.addAdmin = addAdmin;
module.exports.updateAdmin = updateAdmin;
module.exports.deleteAdmin = deleteAdmin;
module.exports.showAdmin = showAdmin;
module.exports.showAdminList = showAdminList;
