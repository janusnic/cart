# cart
 
#3 MongoDB / Mongoose Setup 

https://www.mongodb.com/

Building on the Best of Relational with the Innovations of NoSQL



Getting Started with MongoDB (MongoDB Shell Edition)

On this page

    Overview
    Available Editions
    Additional Information

Overview

Welcome to the Getting Started with MongoDB guide. This guide provides instructions to get you started using MongoDB. The guide covers the following topics:

    Introduction to MongoDB as well as instructions to Import Example Dataset;
    A brief overview of the MongoDB Shell (mongo);
    Basic Insert, Find, Update, Remove operations plus Aggregation;
    Instructions on creating Indexes to improve query performance.

The MongoDB Shell Edition of this guide also includes instructions for installing MongoDB.
Available Editions

This is the MongoDB Shell (mongo) edition of the guide. The Getting Started guide is available in the following editions:

    MongoDB Shell (mongo) Edition (this edition)
    Python Edition
    Node.JS Edition
    C++ Edition
    Java Edition
    C# Edition

Additional Information

For more information, see:

    The MongoDB Manual for a comprehensive documentation of MongoDB
    MongoDB University: Free, Online Courses for Developers and DBAs
    MongoDB Architecture Guide
    MongoDB Administration 101 Presentation
    Attend an upcoming MongoDB event or webinar
    For information on MongoDB licensing, see MongoDB Licensing.


mongod
Программа 'mongod' на данный момент не установлена. Вы можете установить её, выполнив:
sudo apt-get install mongodb-server
janus@janus-P55-US3L ~/github/cart $ ^C
janus@janus-P55-US3L ~/github/cart $ sudo apt-get install mongodb-server

Install MongoDB Community Edition on Linux

On this page

    Recommended
    Manual Installation

These documents provide instructions to install MongoDB Community Edition for various Linux systems.

Note

Starting in MongoDB 3.2, 32-bit binaries are deprecated and will be unavailable in future releases.
Recommended

For the best installation experience, MongoDB provides packages for popular Linux distributions. These packages, which support specific platforms and provide improved performance and TLS/SSL support, are the preferred way to run MongoDB. The following guides detail the installation process for these systems:

Install on Red Hat
    Install MongoDB Community Edition on Red Hat Enterprise and related Linux systems using .rpm packages.
Install on SUSE
    Install MongoDB Community Edition on SUSE Linux systems using .rpm packages.
Install on Amazon
    Install MongoDB Community Edition on Amazon Linux AMI systems using .rpm packages.
Install on Ubuntu
    Install MongoDB Community Edition on Ubuntu Linux systems using .deb packages.
Install on Debian
    Install MongoDB Community Edition on Debian systems using .deb packages.

For systems without supported packages, refer to the Manual Installation tutorial.
Manual Installation

For Linux systems without supported packages, MongoDB provides a generic Linux release. These versions of MongoDB don’t include TLS/SSL, and may not perform as well as the targeted packages, but are compatible on most contemporary Linux systems. See the following guides for installation:

Install From Tarball
    Install MongoDB Community Edition on other Linux systems from MongoDB archives. 



Install MongoDB Community Edition on Ubuntu

On this page

    Overview
    Packages
    Init Scripts
    Install MongoDB Community Edition
    Run MongoDB Community Edition

Overview

Use this tutorial to install MongoDB Community Edition on LTS Ubuntu Linux systems from .deb packages. While Ubuntu includes its own MongoDB packages, the official MongoDB Community Edition packages are generally more up-to-date.

Platform Support

MongoDB only provides packages for 64-bit long-term support Ubuntu releases. Currently, this means 12.04 LTS (Precise Pangolin) and 14.04 LTS (Trusty Tahr). While the packages may work with other Ubuntu releases, this is not a supported configuration.
Packages

MongoDB provides officially supported packages in their own repository. This repository contains the following packages:
mongodb-org   A metapackage that will automatically install the four component packages listed below.
mongodb-org-server  Contains the mongod daemon and associated configuration and init scripts.
mongodb-org-mongos  Contains the mongos daemon.
mongodb-org-shell   Contains the mongo shell.
mongodb-org-tools   Contains the following MongoDB tools: mongoimport bsondump, mongodump, mongoexport, mongofiles, mongooplog, mongoperf, mongorestore, mongostat, and mongotop.

These packages conflict with the mongodb, mongodb-server, and mongodb-clients packages provided by Ubuntu.

The default /etc/mongod.conf configuration file supplied by the packages have bind_ip set to 127.0.0.1 by default. Modify this setting as needed for your environment before initializing a replica set.
Init Scripts

The mongodb-org package includes various init scripts, including the init script /etc/init.d/mongod. You can use these scripts to stop, start, and restart daemon processes.

The package configures MongoDB using the /etc/mongod.conf file in conjunction with the init scripts. See the Configuration File reference for documentation of settings available in the configuration file.

As of version 3.0.4, there are no init scripts for mongos. The mongos process is used only in sharding. You can use the mongod init script to derive your own mongos init script for use in such environments. See the mongos reference for configuration details.
Install MongoDB Community Edition

MongoDB only provides packages for 64-bit long-term support Ubuntu releases. Currently, this means 12.04 LTS (Precise Pangolin) and 14.04 LTS (Trusty Tahr). While the packages may work with other Ubuntu releases, this is not a supported configuration.
1
Import the public key used by the package management system.

The Ubuntu package management tools (i.e. dpkg and apt) ensure package consistency and authenticity by requiring that distributors sign packages with GPG keys. Issue the following command to import the MongoDB public GPG Key:

sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927

2
Create a list file for MongoDB.

Create the /etc/apt/sources.list.d/mongodb-org-3.2.list list file using the command appropriate for your version of Ubuntu:

Ubuntu 12.04

echo "deb http://repo.mongodb.org/apt/ubuntu precise/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

Ubuntu 14.04

echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list

3
Reload local package database.

Issue the following command to reload the local package database:

sudo apt-get update

4
Install the MongoDB packages.

You can install either the latest stable version of MongoDB or a specific version of MongoDB.
Install the latest stable version of MongoDB.

Issue the following command:

sudo apt-get install -y mongodb-org

Install a specific release of MongoDB.

To install a specific release, you must specify each component package individually along with the version number, as in the following example:

sudo apt-get install -y mongodb-org=3.0.4 mongodb-org-server=3.0.4 mongodb-org-shell=3.0.4 mongodb-org-mongos=3.0.4 mongodb-org-tools=3.0.4

If you only install mongodb-org=3.0.4 and do not include the component packages, the latest version of each MongoDB package will be installed regardless of what version you specified.
Pin a specific version of MongoDB.

Although you can specify any available version of MongoDB, apt-get will upgrade the packages when a newer version becomes available. To prevent unintended upgrades, pin the package. To pin the version of MongoDB at the currently installed version, issue the following command sequence:

echo "mongodb-org hold" | sudo dpkg --set-selections
echo "mongodb-org-server hold" | sudo dpkg --set-selections
echo "mongodb-org-shell hold" | sudo dpkg --set-selections
echo "mongodb-org-mongos hold" | sudo dpkg --set-selections
echo "mongodb-org-tools hold" | sudo dpkg --set-selections

Run MongoDB Community Edition

The MongoDB instance stores its data files in /var/lib/mongodb and its log files in /var/log/mongodb by default, and runs using the mongodb user account. You can specify alternate log and data file directories in /etc/mongod.conf. See systemLog.path and storage.dbPath for additional information.

If you change the user that runs the MongoDB process, you must modify the access control rights to the /var/lib/mongodb and /var/log/mongodb directories to give this user access to these directories.
1
Start MongoDB.

Issue the following command to start mongod:

sudo service mongod start

2
Verify that MongoDB has started successfully

Verify that the mongod process has started successfully by checking the contents of the log file at /var/log/mongodb/mongod.log for a line reading

[initandlisten] waiting for connections on port <port>

where <port> is the port configured in /etc/mongod.conf, 27017 by default.
3
Stop MongoDB.

As needed, you can stop the mongod process by issuing the following command:

sudo service mongod stop

4
Restart MongoDB.

Issue the following command to restart mongod:

sudo service mongod restart



package.json

{
  "name": "cart",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "express-handlebars": "^3.0.0",
    "hbs": "~3.1.0",
    "morgan": "~1.6.1",
    "serve-favicon": "~2.3.0"
  }
}


npm install --save mongoose

{
  "name": "cart",
  "version": "0.0.0",
  "private": true,
  "scripts": {
    "start": "node ./bin/www"
  },
  "dependencies": {
    "body-parser": "~1.13.2",
    "cookie-parser": "~1.3.5",
    "debug": "~2.2.0",
    "express": "~4.13.1",
    "express-handlebars": "^3.0.0",
    "hbs": "~3.1.0",
    "mongoose": "^4.5.0",
    "morgan": "~1.6.1",
    "serve-favicon": "~2.3.0"
  }
}


mongod
2016-06-14T12:31:16.679+0300 I CONTROL  [initandlisten] MongoDB starting : pid=7444 port=27017 dbpath=/data/db 64-bit host=janus-P55-US3L
2016-06-14T12:31:16.679+0300 I CONTROL  [initandlisten] db version v3.2.7
2016-06-14T12:31:16.679+0300 I CONTROL  [initandlisten] git version: 4249c1d2b5999ebbf1fdf3bc0e0e3b3ff5c0aaf2
2016-06-14T12:31:16.679+0300 I CONTROL  [initandlisten] OpenSSL version: OpenSSL 1.0.1f 6 Jan 2014
2016-06-14T12:31:16.679+0300 I CONTROL  [initandlisten] allocator: tcmalloc
2016-06-14T12:31:16.679+0300 I CONTROL  [initandlisten] modules: none
2016-06-14T12:31:16.679+0300 I CONTROL  [initandlisten] build environment:
2016-06-14T12:31:16.679+0300 I CONTROL  [initandlisten]     distmod: ubuntu1404
2016-06-14T12:31:16.680+0300 I CONTROL  [initandlisten]     distarch: x86_64
2016-06-14T12:31:16.680+0300 I CONTROL  [initandlisten]     target_arch: x86_64
2016-06-14T12:31:16.680+0300 I CONTROL  [initandlisten] options: {}
2016-06-14T12:31:16.696+0300 E NETWORK  [initandlisten] listen(): bind() failed errno:98 Address already in use for socket: 0.0.0.0:27017
2016-06-14T12:31:16.696+0300 E NETWORK  [initandlisten]   addr already in use
2016-06-14T12:31:16.696+0300 E STORAGE  [initandlisten] Failed to set up sockets during startup.
2016-06-14T12:31:16.696+0300 I CONTROL  [initandlisten] dbexit:  rc: 48


app.js

var mongoose = require('mongoose');
var app = express();

mongoose.connect('localhost:27017/shopping');



models/product.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    imagePath: {type: String, required: true},
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},

});


module.exports = mongoose.model('Product', schema);



seed/product-seeder.js

var Product = require('../models/product');

var product = new Product({
    imagePath: '/images/i.jpg',
    title: 'Sumsung XLL',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    price: 200
})


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



node seed/product-seeder.js 
janus@janus-P55-US3L ~/github/cart/cart $ mongo

use shopping
switched to db shopping
> db.products.find()
{ "_id" : ObjectId("575fdeffd0c11f981f9b8d1c"), "imagePath" : "/images/i.jpg", "title" : "Sumsung XLL", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "price" : 200, "__v" : 0 }
{ "_id" : ObjectId("575fdeffd0c11f981f9b8d1d"), "imagePath" : "/images/i.jpg", "title" : "Sumsung XLL2", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "price" : 555, "__v" : 0 }
{ "_id" : ObjectId("575fdeffd0c11f981f9b8d1e"), "imagePath" : "/images/i.jpg", "title" : "Sumsung XLL 3", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "price" : 211, "__v" : 0 }
{ "_id" : ObjectId("575fdeffd0c11f981f9b8d1f"), "imagePath" : "/images/i.jpg", "title" : "Sumsung XLL 4", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "price" : 222, "__v" : 0 }
{ "_id" : ObjectId("575fdeffd0c11f981f9b8d20"), "imagePath" : "/images/i.jpg", "title" : "Sumsung XLL 5", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "price" : 300, "__v" : 0 }
{ "_id" : ObjectId("575fdeffd0c11f981f9b8d21"), "imagePath" : "/images/i.jpg", "title" : "Sumsung XLL 6", "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "price" : 100, "__v" : 0 }
> 
