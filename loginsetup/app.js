var bodyParser = require('body-parser');
var express = require('express');
var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var User = mongoose.model('User', new Schema({
  id: ObjectId,
  firstName: String,
  lastName: String,
  email: { type: String, unique: true},
  password: String,
}));

var app = express();
app.set('view engine', 'jade');
app.locals.pretty = true;

//connect to mongo
mongoose.connect('mongodb://localhost/newauth');

//middleware
app.use(bodyParser.urlencoded({ extended: true}));


app.get('/', function(req,res){
  res.render('index.jade');
});

app.get('/register', function(req,res){
  res.render('register.jade');
});

app.post('/register', function(req,res){
  res.json(req.body);
});

app.get('/login', function(req,res){
  res.render('login.jade');
});

app.get('/dashboard', function(req,res){
  res.render('dashboard.jade');
});

app.get('/logout', function(req,res){
  res.redirect('/');
});

app.listen(3000);
