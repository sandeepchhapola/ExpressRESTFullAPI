var express = require('express');
var admn=require("./adminmodule");
var usr=require("./usermodule");
var book=require("./bookmodule");

var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser());

app.post("/user",usr.addUser);
app.get("/user",usr.showUserList);
app.get("/user/:id",usr.showUser);
app.put("/user/:id",usr.updateUser);
app.delete("/user/:id",usr.deleteUser);

app.post("/admin",admn.addAdmin);
app.get("/admin",admn.showAdminList);
app.get("/admin/:id",admn.showAdmin);
app.put("/admin/:id",admn.updateAdmin);
app.delete("/admin/:id",admn.deleteAdmin);

app.post("/book",book.addBook);
app.get("/book",book.showBooksList);
app.get("/book/:id",book.showBooks);
app.put("/book/:id",book.updateBook);
app.delete("/book/:id",book.deleteBook);

app.listen(8585);
