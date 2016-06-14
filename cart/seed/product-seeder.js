var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var products = [
 new Product({
    imagePath: '/images/i.jpg',
    title: 'Sumsung XLL',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 200
}),
new Product({
    imagePath: '/images/i.jpg',
    title: 'Sumsung XLL2',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 555
}),
new Product({
    imagePath: '/images/i.jpg',
    title: 'Sumsung XLL 3',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 211
}),
new Product({
    imagePath: '/images/i.jpg',
    title: 'Sumsung XLL 4',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 222
}),
new Product({
    imagePath: '/images/i.jpg',
    title: 'Sumsung XLL 5',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 300
}),
new Product({
    imagePath: '/images/i.jpg',
    title: 'Sumsung XLL 6',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 100
})
 ];

var done = 0;

 for (var i = 0; i< products.length; i++){
    products[i].save(function(err, resukt){
        done++;
        if (done === products.length){
            exit();
        }
    });
 }

function exit(){
    mongoose.disconnect();
}
