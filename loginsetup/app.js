var bodyParser = require('body-parser');
var bcrypt = require('bcryptjs');
var express = require('express');
var mongoose = require('mongoose');
var sessions = require('client-sessions');

var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

//connect to mongo
mongoose.connect('mongodb://localhost/newauthkey');

var User = mongoose.model('User', new Schema({
  id: ObjectId,
  firstName: String,
  lastName: String,
  email: { type: String, unique: true},
  password: String,
}));

//Above schema is set up for DB

var app = express();
app.set('view engine', 'jade');
app.locals.pretty = true;

//middleware
app.use(bodyParser.urlencoded({ extended: true}));

app.use(sessions({
  cookieName: 'session',
  secret: 'osgnoo8923g5923hbtf98b323b9124b01ibsibf35',
  duration: 30 * 60 * 1000,
  activeDuration: 5 * 60 * 1000,
}));

app.get('/', function(req,res){
  res.render('index.jade');
});

app.get('/register', function(req,res){
  res.render('register.jade');
});

app.post('/register', function(req,res){
  var hash = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

  var user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hash,
  });
  user.save(function(err){
    if (err) {
      var err = "Something bad happened! Try again!";
      if (err.code === 12345){
        error = 'that email is already in use, try another.'
      }

      res.render('register.jade', { error:error });
    } else {
      res.redirect('/dashboard');
    }
  });
});

app.get('/login', function(req,res){
  res.render('login.jade');
});

app.post('/login', function(req,res){
  User.findOne({ email: req.body.email }, function(err, user){
    if(!user){
      res.render('login.jade', { error: 'invalid email or password.'});
    } else {
      if (bcrypt.compareSync(req.body.password, user.password)){
        req.session.user = user;
        res.redirect('/dashboard');
      } else {
        res.render('login.jade', { error: 'invalid email or password.'});
      }
    }
  });
});



app.get('/dashboard', function(req,res){
  if (req.session && req.session.user) {
    User.findOne({ email: req.session.user.email}, function(err, user){
      if (!user) {
        req.session.reset();
        res.redirect('/login');
      } else {
        res.locals.user = user;
        res.render('dashboard.jade');
      }
    });
  } else {
  res.redirect('/login');
  }
});

app.get('/logout', function(req,res){
  req.session.reset();
  res.redirect('/');
});

app.listen(3000);
