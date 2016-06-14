# cart
 
#2 Product Index View 

partials/header.hbs



http://getbootstrap.com/components/

<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

 npm install --save express-handlebars

    └── asap@2.0.4 
└─┬ hbs@3.1.1
  └─┬ handlebars@3.0.0
    └─┬ uglify-js@2.3.6
      └── async@0.2.10 


app.js
var expressHbs = require('express-handlebars');

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// view engine setup
//app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs',expressHbs({defaultLayout:'layout', extname:'.hbs'}));
app.set('view engine', '.hbs');

layouts/layout.hbs



http://fontawesome.io/?utm_source=hackernewsletter
our new Font Awesome CDN embed code
Входящие
  x
Font Awesome cdn@fontawesome.com через mg.fortawesome.com 
  
17:34 (5 мин. назад)
    
кому: мне
Font Awesome  
The iconic font and CSS toolkit
Hey there! As requested, here's your … Font Awesome embed code!
<script src="https://use.fontawesome.com/489e433250.js"></script>
Get your icons up and running in just 2 steps!
1   Copy this code & place in your HTML's <head>
2   Use any of Font Awesome 605+ icons in your project's UI
 
Register and save time and headaches
Configure & Edit Embed Codes

Want to enable or disable features like auto-accessibility, asynchronous icon loading, easy updates to newer Font Awesome versions and embed with CSS or JS? Register to set up your embed codes to match just what your site or app needs.
Manage Multiple Embed Codes

Have more than one site or app that you use Font Awesome on? Us too! We'll help you keep track of where you're using Font Awesome, so you can get back to placing icons in just the right spots.
See How You're Using Font Awesome

Want to see what icons you're using in your sites or apps? How about how often and where they are used? Keeping an inventory of where you've placed icons can be tough when building seems pretty handy to us.



<script src="https://use.fontawesome.com/489e433250.js"></script>

<ul class="nav navbar-nav navbar-right">
        <li><a href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i>
Shopping Cart</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user" aria-hidden="true"></i> User Management <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#"><i class="fa fa-user" aria-hidden="true"></i>
 User Account</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Logout</a></li>
          </ul>
        </li>
      </ul>

  views/shop/index.hbs


  routers/index.js

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('shop/index', { title: 'Shopping Cart' });
});

module.exports = router;


http://getbootstrap.com/components/#thumbnailsCustom content

With a bit of extra markup, it's possible to add any kind of HTML content like headings, paragraphs, or buttons into thumbnails.
100%x200
Thumbnail label

Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.

100%x200
Thumbnail label

Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.

100%x200
Thumbnail label

Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.

Copy

<div class="row">
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img src="..." alt="...">
      <div class="caption">
        <h3>Thumbnail label</h3>
        <p>...</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
      </div>
    </div>
  </div>
</div>

views/index.hbs

<div class="row">
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img src="..." alt="...">
      <div class="caption">
        <h3>Thumbnail label</h3>
        <p>...</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
      </div>
    </div>
  </div>
</div>

layouts/layout.hbs

  <body>
    {{> header }}
    <div class = 'container'>
      {{{body}}}
    </div>

views/index.hbs

<div class="row">
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img src="/images/1.jpg" alt="Samsung XXL" class='img-responsive'>
      <div class="caption">
        <h3>Thumbnail label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div class = 'clearfix'>
            <div class='price pull-left'>$2200</div>
            <a href="#" class="btn btn-default pull-right" role="button">Button</a> 
            </div>
      </div>
    </div>
  </div>
   <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img src="/images/1.jpg" alt="Samsung XXL" class='img-responsive'>
      <div class="caption">
        <h3>Thumbnail label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div class = 'clearfix'>
            <div class='price pull-left'>$2200</div>
            <a href="#" class="btn btn-default pull-right" role="button">Button</a> 
            </div>
      </div>
    </div>
  </div>
   <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img src="/images/1.jpg" alt="Samsung XXL" class='img-responsive'>
      <div class="caption">
        <h3>Thumbnail label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <div class = 'clearfix'>
            <div class='price pull-left'>$2200</div>
            <a href="#" class="btn btn-default pull-right" role="button">Button</a> 
            </div>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img src="/images/1.jpg" alt="Samsung XXL">
      <div class="caption">
        <h3>Thumbnail label</h3>
        <p>...</p>
        <p><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></p>
      </div>
    </div>
  </div>
</div>

$ git status
В ветке unit_02
Changes not staged for commit:
  (используйте "git add/rm <file>..." чтобы обновить данные для закрепления)
  (используйте "git checkout -- <file>..." чтобы отменить изменения в рабочей директории)

  modified:   README.md
  modified:   cart/app.js
  modified:   cart/package.json
  modified:   cart/public/stylesheets/style.css
  modified:   cart/routes/index.js
  deleted:    cart/views/layout.hbs

Несопровождаемые файлы:
  (используйте "git add <file>..." чтобы включить то, что должно быть закреплено)

  cart/public/images/
  cart/views/layouts/
  cart/views/partials/
  cart/views/shop/

нет изменений, добавленных в коммит (используйте "git add" и/или "git commit -a"
