const express = require ("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require('mongoose');
var User = require('./models/user');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/digicity');
//执行此行代码之前，要保证mongodb数据库已经运行了，并且运行在27017端口。

var db = mongoose.connection;
db.on('error',console.log);
db.once('open', function() {
  User.find().exec(function(err, posts){
    console.log(posts);
  });
});

app.get("/username",function(req, res){
  res.json({"username":"Jugg"});
})
app.get("/email",function(req, res){
  res.json({"email":"601493614@qq.com"});
})

app.listen(3000,function(){
  console.log("running on port 3000...");
});
