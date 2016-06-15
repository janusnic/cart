# cart
 
#5 Sign Up View, CSRF Protection & User Model 

views/user/signup.hbs

<div class='row'>
    <div class='col-md-4 col-md-offset-4'>
        <h4>Sign Up</h4>
        <form acction='' method='post'>
            <div class='form-group'>
                <label for='email'>E-Mail</label>
                <inpyt type='text' id='email' name='email' class='form-control'>
            </div>
            <div class='form-group'>
                <label for='password'>Password</label>
                <input type='password' id='password' name='password' class='form-control'>
            </div>
            <button type='submit'>Sign Up</button>
        </form>
    </div>
</div>

models/user.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);

csurf

github.com/expressjs/csurf

npm install --save csurf
cart@0.0.0 /home/janus/github/cart/cart
└─┬ csurf@1.9.0 
  ├── cookie@0.3.1 
  ├─┬ csrf@3.0.3 
  │ ├── base64-url@1.2.2 
  │ ├── rndm@1.2.0 
  │ ├── tsscmp@1.0.5 
  │ └─┬ uid-safe@2.1.1 
  │   └── random-bytes@1.0.0 
  └─┬ http-errors@1.5.0 
    └── setprototypeof@1.0.1 


routes/index.js

var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');

var csrfProtection = csrf();
/* GET home page. */

router.get('/', function(req, res, next) {
  Product.find(function(err, docs){
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i +=chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks });  
  });  
  
});

router.get('/user/signup', function(req, res, next){
    res.render('user/signup', {csrfToken: req.csrfToken()});
})

module.exports = router;


signup.hbs

<div class='row'>
    <div class='col-md-4 col-md-offset-4'>
        <h4>Sign Up</h4>
        <form acction='' method='post'>
            <div class='form-group'>
                <label for='email'>E-Mail</label>
                <input type='text' id='email' name='email' class='form-control'>
            </div>
            <div class='form-group'>
                <label for='password'>Password</label>
                <input type='password' id='password' name='password' class='form-control'>
            </div>
            <button type='submit'>Sign Up</button>
        </form>
        {{ csrfToken }}
    </div>
</div>

npm install --save express-session
cart@0.0.0 /home/janus/github/cart/cart
├─┬ express@4.13.4
│ ├── depd@1.1.0 
│ ├─┬ send@0.13.1
│ │ └── depd@1.1.0 
│ └─┬ serve-static@1.10.3
│   └─┬ send@0.13.2
│     └── depd@1.1.0 
└─┬ express-session@1.13.0 
  ├── cookie@0.2.3 
  ├── crc@3.4.0 
  ├── depd@1.1.0 
  └─┬ uid-safe@2.0.0 
    └── base64-url@1.2.1 

app.js


var session = require('express-session');

var app = express();



mongoose.connect('localhost:27017/shopping');
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',expressHbs({defaultLayout:'layout', extname:'.hbs'}));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: 'mysupersecret', resave: false, saveUninitialized: false}));
app.use(express.static(path.join(__dirname, 'public')));

routes/index.js

var express = require('express');
var router = express.Router();
var Product = require('../models/product');
var csrf = require('csurf');

var csrfProtection = csrf();
router.use(csrfProtection);
/* GET home page. */

router.get('/', function(req, res, next) {
  Product.find(function(err, docs){
    var productChunks = [];
    var chunkSize = 3;
    for (var i = 0; i < docs.length; i +=chunkSize) {
        productChunks.push(docs.slice(i, i + chunkSize));
    }
    res.render('shop/index', { title: 'Shopping Cart', products: productChunks });  
  });  
  
});

router.get('/user/signup', function(req, res, next){
    res.render('user/signup', {csrfToken: req.csrfToken()});
})

module.exports = router;


http://127.0.0.1:3000/user/signup

signup.hbs

<div class='row'>
    <div class='col-md-4 col-md-offset-4'>
        <h4>Sign Up</h4>
        <form acction='' method='post'>
            <div class='form-group'>
                <label for='email'>E-Mail</label>
                <input type='text' id='email' name='email' class='form-control'>
            </div>
            <div class='form-group'>
                <label for='password'>Password</label>
                <input type='password' id='password' name='password' class='form-control'>
            </div>
            <input type='hidden' name='_csrf' value='{{ csrfToken }}'>
            <button type='submit'>Sign Up</button>
        </form>
        
    </div>
</div>

signup.hbs

<div class='row'>
    <div class='col-md-4 col-md-offset-4'>
        <h4>Sign Up</h4>
        <form acction='/user/signup' method='post'>
            <div class='form-group'>
                <label for='email'>E-Mail</label>
                <input type='text' id='email' name='email' class='form-control'>
            </div>
            <div class='form-group'>
                <label for='password'>Password</label>
                <input type='password' id='password' name='password' class='form-control'>
            </div>
            <input type='hidden' name='_csrf' value='{{ csrfToken }}'>
            <button type='submit'>Sign Up</button>
        </form>
        
    </div>
</div>

routers/index.js

router.post('/user/signup', function(req, res, next){
    res.redirect('/');
});


Sign Up with Passport 
=====================

 npm install --save passport
cart@0.0.0 /home/janus/github/cart/cart
└─┬ passport@0.3.2 
  ├── passport-strategy@1.0.0 
  └── pause@0.0.1 


npm install --save bcrypt-nodejs
cart@0.0.0 /home/janus/github/cart/cart
└── bcrypt-nodejs@0.0.3 

 npm install --save connect-flash
cart@0.0.0 /home/janus/github/cart/cart
└── connect-flash@0.1.1 

app.js

var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');

var app = express();



mongoose.connect('localhost:27017/shopping');
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',expressHbs({defaultLayout:'layout', extname:'.hbs'}));
app.set('view engine', '.hbs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret: 'mysupersecret', resave: false, saveUninitialized: false}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());

npm install --save passport-local
cart@0.0.0 /home/janus/github/cart/cart
└── passport-local@1.0.0 


congig/passport.js
------------------
      var passport = require('passport');
      var User = require('../models/user');
      var LocalStrategy = require('passport-local').Strategy;

      passport.serializeUser(function(user, done){
          done(null, user.id);
      });

      passport.deserializeUser(function(id, done){
          User.findById(id, function(err, user){
              done(err, user);
          });
      });

      passport.use('local.signup', new LocalStrategy({
          usernameField: 'email',
          passwordField: 'password',
          passReqToCallback: true
      }, function(req, email, password, done){
          User.findOne({'email': email}, function(err, user){
              if (err){
                  return done(err);
              }
              if (user) {
                  return done(null , false, {message: 'Email is already is use.'});
              }
              var newUser = new User();
              newUser.email = email;
              newUser.password = newUser.encryptPassword(password);
              newUser.save(function(err, result){
                if (err) {
                    return done(err);
                }
                return done(null, newUser);
              });
          });
      }));


models/user.js
--------------
    
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;
    var bcrypt = require('bcrypt-nodejs');

    var userSchema = new Schema({
        email: {type: String, required: true},
        password: {type: String, required: true}
    });

    userSchema.methods.encryptPassword = function(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
    };

    userSchema.method.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    module.exports = mongoose.model('User', userSchema);


congig/passport.js
------------------
    var passport = require('passport');
    var User = require('../models/user');
    var LocalStrategy = require('passport-local').Strategy;

    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializerUser(function(id, done){
        User.findById(id, function(err, user){
            done(err, user);
        });
    });

    passport.use('local.signup', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, function(req, email, password, done){
        User.findOne({'email': email}, function(err, user){
            if (err){
                return done(err);
            }
            if (user) {
                return done(null , false, {;message: 'Email is already is use.'});
            }
            var newUser = new User();
            newUser.email = email;
            newUser.password = newUser.encryptPassword(password);
            newUser.save(function(err, result){
              if (err) {
                  return done(err);
              }
              return done(null, newUser);
            });
        });
    }));

routes/index.js
---------------

    var express = require('express');
    var router = express.Router();
    var Product = require('../models/product');
    var csrf = require('csurf');
    var passport = require('passport');


    var csrfProtection = csrf();
    router.use(csrfProtection);
    /* GET home page. */

    router.get('/', function(req, res, next) {
      Product.find(function(err, docs){
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i +=chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', { title: 'Shopping Cart', products: productChunks });  
      });  
      
    });

    router.get('/user/signup', function(req, res, next){
        res.render('user/signup', {csrfToken: req.csrfToken()});
    });



    // router.post('/user/signup', function(req, res, next){
    //     res.redirect('/');
    // });

    router.post('/user/signup', passport.authenticate('local.signup', {
        successRedirect: '/user/profile',
        failureRedirect: '/user/signup',
        failureFlash: true
    }));

    router.get('/user/profile', function(req, res, next) {
        res.render('user/profile');
    })

    module.exports = router;


app.js
-------
    mongoose.connect('localhost:27017/shopping');
    require('./config/passport');
    // view engine setup


routes/index.js
----------------
    var express = require('express');
    var router = express.Router();
    var Product = require('../models/product');
    var csrf = require('csurf');
    var passport = require('passport');


    var csrfProtection = csrf();
    router.use(csrfProtection);
    /* GET home page. */

    router.get('/', function(req, res, next) {
      Product.find(function(err, docs){
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i +=chunkSize) {
            productChunks.push(docs.slice(i, i + chunkSize));
        }
        res.render('shop/index', { title: 'Shopping Cart', products: productChunks });  
      });  
      
    });

    router.get('/user/signup', function(req, res, next){
        res.render('user/signup', {csrfToken: req.csrfToken()});
    });



    // router.post('/user/signup', function(req, res, next){
    //     res.redirect('/');
    // });

    router.post('/user/signup', passport.authenticate('local.signup', {
        successRedirect: '/user/profile',
        failureRedirect: '/user/signup',
        failureFlash: true
    }));

    router.get('/user/profile', function(req, res, next) {
        res.render('user/profile');
    })

    module.exports = router;



views/user/profile.hbs
-----------------------

    <h1>User Profile</h1>


routers/index.js


router.get('/user/signup', function(req, res, next){
    var messages = req.flash('error');
    res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages});
});

Sign Up

Email is already is use.


router.get('/user/signup', function(req, res, next){
    var messages = req.flash('error');
    res.render('user/signup', {csrfToken: req.csrfToken(), messages: messages, hasErrors: messages.length > 0});
});


views/user/signup.hbs

<div class='row'>
    <div class='col-md-4 col-md-offset-4'>
        <h4>Sign Up</h4>
        {{#if hasErrors}}
            <div class='alert alert-danger'>
                {{# each messages }}
                    <p>{{this}}</p>
                {{/each}}
            </div>

        {{/if}}
        <form acction='/user/signup' method='post'>
            <div class='form-group'>
                <label for='email'>E-Mail</label>
                <input type='text' id='email' name='email' class='form-control'>
            </div>
            <div class='form-group'>
                <label for='password'>Password</label>
                <input type='password' id='password' name='password' class='form-control'>
            </div>
            <input type='hidden' name='_csrf' value='{{ csrfToken }}'>
            <button type='submit'>Sign Up</button>
        </form>
        
    </div>
</div>