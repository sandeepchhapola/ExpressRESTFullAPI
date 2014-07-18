var express = require('express')
    path= require('path');
var db=require("./module/dbObject-Bac.js");
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());

var newPath = app.use(express.static(path.join(__dirname + "")));
console.log('path: ',__dirname );


app.post("/user",db.addUser);
app.get("/user",db.showUserList);
app.get("/user/:id",db.showUser);
app.put("/user/:id",db.updateUser);
app.delete("/user/:id",db.deleteUser);

app.post("/admin",db.addAdmin);
app.get("/admin",db.showAdminList);
app.get("/admin/:id",db.showAdmin);
app.put("/admin/:id",db.updateAdmin);
app.delete("/admin/:id",db.deleteAdmin);

app.post("/book",db.addBook);
app.get("/book",db.showBooksList);
app.get("/book/:id",db.showBooks);
app.put("/book/:id",db.updateBook);
app.delete("/book/:id",db.deleteBook);

app.listen(3000);
