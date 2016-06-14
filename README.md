# cart
 
#4 MongoDB / Outputting Data 

routes/index.js

var express = require('express');
var router = express.Router();
var Product = require('../models/product');
/* GET home page. */
router.get('/', function(req, res, next) {
  var products = Product.find();  
  res.render('shop/index', { title: 'Shopping Cart', products: products });
});

module.exports = router;


views/shop/index.hbs

{{# each products }}
  Product!
{{/each}}


routes/index.js

var express = require('express');
var router = express.Router();
var Product = require('../models/product');
/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs){
    res.render('shop/index', { title: 'Shopping Cart', products: docs });  
  });  
  
});




module.exports = router;


routes/index.js

var express = require('express');
var router = express.Router();
var Product = require('../models/product');
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

module.exports = router;


views/shop/index.hbs


{{# each products }}
<div class="row">
    {{# each this}}
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
  {{/each}}
</div>
{{/each}}


views/shop/index.hbs


{{# each products }}
<div class="row">
    {{# each this}}
        <div class="col-sm-6 col-md-4">
          <div class="thumbnail">
            <img src="{{ this.imagePath }}" alt="{{ this.title }}" class='img-responsive'>
            <div class="caption">
              <h3>{{ this.title }}</h3>
              <p>{{ this.description }}</p>
              <div class = 'clearfix'>
                  <div class='price pull-left'>${{ this.price }}</div>
                  <a href="#" class="btn btn-default pull-right" role="button">Add to cart</a> 
                  </div>
            </div>
          </div>
        </div>
  {{/each}}
</div>
{{/each}}

