# cart

https://www.npmjs.com/package/n


Interactively Manage All Your Node Versions
    

Simple flavour of node/iojs binary management, no subshells, no profile setup, no convoluted api, just simple.

Note: Does not work on Windows at the moment. Pull Requests are appreciated. If you are searching for the latest version below 2.x.x, check out the branch "1.x.x"

With node/iojs already installed:

$ npm install -g n
or, by cloning this repo and running:

$ make install
to install n to subdirectory bin/n of the directory specified in environment variable PREFIX, which defaults to /usr/local (note that you will likely need sudo to install there).
To change the default to, say, $HOME, i.e., to install n to $HOME/bin/n, run PREFIX=$HOME make install.

Once installed, n downloads node/iojs versions to subdirectory n/versions of the directory specified in environment variable N_PREFIX, which defaults to /usr/local; the active node/iojs version is installed directly in N_PREFIX.
To change the default to, say, $HOME, prefix later calls to n with N_PREFIX=$HOME or add export N_PREFIX=$HOME to your shell initialization file.

Alternatively, consider third-party installer n-install, which allows installation directly from GitHub; for instance,

curl -L http://git.io/n-install | bash
sets both PREFIX and N_PREFIX to $HOME/n, installs n to $HOME/n/bin, modifies the initialization files of supported shells to export N_PREFIX and add $HOME/n/bin to the PATH, and installs the latest stable node version.
As a result, both n itself and all node/iojs versions it manages are hosted inside a single, optionally configurable directory, which you can later remove with the included n-uninstall script; script n-update updates n itself to the latest version - see the n-install repo for details.

Installing Binaries
Install a few nodes:

$ n 0.8.14
$ n 0.8.17
$ n 0.9.6
Type n to prompt selection of an installed node. Use the up / down arrow to navigate, and press enter or the right arrow to select, or ^C to cancel:

$ n

  0.8.14
ο 0.8.17
  0.9.6
Use or install the latest official release:

$ n latest
Use or install the stable official release:

$ n stable
Use or install the latest LTS official release:

$ n lts
Removing Binaries
Remove some versions:

$ n rm 0.9.4 v0.10.0
Instead of using rm we can simply use -:

$ n - 0.9.4
Binary Usage
When running multiple versions of node, we can target them directly by asking n for the binary path:

$ n bin 0.9.4
/usr/local/n/versions/0.9.4/bin/node
Or by using a specific version through n's use sub-command:

$ n use 0.9.4 some.js
with flags:

$ n as 0.9.4 --debug some.js
Usage
Output from n --help:

    Usage: n [options/env] [COMMAND] [args]

    Environments:
     n [COMMAND] [args]            Uses default env (node)
     n io [COMMAND]                Sets env as io

Commands:

  n                              Output versions installed
  n latest                       Install or activate the latest node release
  n -a x86 latest                As above but force 32 bit architecture
  n stable                       Install or activate the latest stable node release
  n lts                          Install or activate the latest LTS node release
  n <version>                    Install node <version>
  n use <version> [args ...]     Execute node <version> with [args ...]
  n bin <version>                Output bin path for <version>
  n rm <version ...>             Remove the given version(s)
  n --latest                     Output the latest node version available
  n --stable                     Output the latest stable node version available
  n --lts                        Output the latest LTS node version available
  n ls                           Output the versions of node available

(iojs):

  n io latest                    Install or activate the latest iojs release
  n io -a x86 latest             As above but force 32 bit architecture
  n io <version>                 Install iojs <version>
  n io use <version> [args ...]  Execute iojs <version> with [args ...]
  n io bin <version>             Output bin path for <version>
  n io rm <version ...>          Remove the given version(s)
  n io --latest                  Output the latest iojs version available
  n io ls                        Output the versions of iojs available

Options:

  -V, --version   Output current version of n
  -h, --help      Display help information
  -q, --quiet     Disable curl output (if available)
  -d, --download  Download only
  -a, --arch      Override system architecture

Aliases:

  which   bin
  use     as
  list    ls
  -       rm
Custom source
If you would like to use a project other than the official Node.js or io.js projects, you can use the special n project [command] which allows you to control the behavior of n using environment variables.

Example:

To grab the latest io.js version but name it "foo" instead,

  PROJECT_NAME="foo" PROJECT_URL="https://iojs.org/dist/" n project latest
Required Variables:

PROJECT_NAME: The name the project will be stored under
PROJECT_URL: The location to download the project from. Note, this must follow the same format as the io.js/Node.js repos
Optional Variables:

HTTP_USER: The username if the PROJECT_URL is protected by basic authentication
HTTP_PASSWORD: The password if the PROJECT_URL is protected by basic authentication
PROJECT_VERSION_CHECK: Many custom projects keep the same version number as the Node.js release they are based on, and maintain their own separate version in process. This allows you to define a JavaScript variable that will be used to check for the version of the process, for example: process.versions.node
Custom architecture
By default n picks the binaries matching your system architecture, e.g. n will download 64 bit binaries for a 64 bit system. You can override this by using the -a or --arch option.

Download and use latest 32 bit version of node:

$ n --arch x86 latest
Download and use latest 32 bit version of iojs:

$ n io --arch x86 latest
Details

    n by default installs node to /usr/local/n/versions, from which it can see what you have currently installed, and activate previously installed versions of node when n <version> is invoked again.

Activated nodes are then installed to the prefix /usr/local, which of course may be altered via the N_PREFIX environment variable.

To alter where n operates simply export N_PREFIX to whatever you prefer.

http://expressjs.com/en/starter/generator.html
Express application generator

Use the application generator tool, express-generator, to quickly create an application skeleton.

Install express-generator with the following command:

$ npm install express-generator -g

Display the command options with the -h option:

$ express -h

  Usage: express [options] [dir]

  Options:

    -h, --help          output usage information
    -V, --version       output the version number
    -e, --ejs           add ejs engine support (defaults to jade)
        --hbs           add handlebars engine support
    -H, --hogan         add hogan.js engine support
    -c, --css <engine>  add stylesheet <engine> support (less|stylus|compass|sass) (defaults to plain css)
        --git           add .gitignore
    -f, --force         force on non-empty directory

For example, the following creates an Express app named myapp in the current working directory:

$ express myapp

   create : myapp
   create : myapp/package.json
   create : myapp/app.js
   create : myapp/public
   create : myapp/public/javascripts
   create : myapp/public/images
   create : myapp/routes
   create : myapp/routes/index.js
   create : myapp/routes/users.js
   create : myapp/public/stylesheets
   create : myapp/public/stylesheets/style.css
   create : myapp/views
   create : myapp/views/index.jade
   create : myapp/views/layout.jade
   create : myapp/views/error.jade
   create : myapp/bin
   create : myapp/bin/www

Then install dependencies:

$ cd myapp
$ npm install

On MacOS or Linux, run the app with this command:

$ DEBUG=myapp:* npm start

On Windows, use this command:

> set DEBUG=myapp:* & npm start

Then load http://localhost:3000/ in your browser to access the app.

The generated app has the following directory structure:

    .
    ├── app.js
    ├── bin
    │   └── www
    ├── package.json
    ├── public
    │   ├── images
    │   ├── javascripts
    │   └── stylesheets
    │       └── style.css
    ├── routes
    │   ├── index.js
    │   └── users.js
    └── views
        ├── error.jade
        ├── index.jade
        └── layout.jade

    7 directories, 9 files

The app structure created by the generator is just one of many ways to structure Express apps. Feel free to use this structure or modify it to best suit your needs.


$ express cart --hbs

   create : cart
   create : cart/package.json
   create : cart/app.js
   create : cart/public
   create : cart/public/javascripts
   create : cart/public/stylesheets
   create : cart/public/stylesheets/style.css
   create : cart/routes
   create : cart/routes/index.js
   create : cart/routes/users.js
   create : cart/views
   create : cart/views/index.hbs
   create : cart/views/layout.hbs
   create : cart/views/error.hbs
   create : cart/public/images
   create : cart/bin
   create : cart/bin/www

   install dependencies:
     $ cd cart && npm install

   run the app:
     $ DEBUG=cart:* npm start



http://getbootstrap.com/getting-started/#download

Bootstrap CDN

The folks over at MaxCDN graciously provide CDN support for Bootstrap's CSS and JavaScript. Just use these Bootstrap CDN links.
Copy

    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">

https://code.jquery.com/


    <script
                  src="https://code.jquery.com/jquery-1.12.4.min.js"
                  integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
                  crossorigin="anonymous"></script>
    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>

    <!DOCTYPE html>
    <html>
      <head>
        <title>Express</title>
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" integrity="sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7" crossorigin="anonymous">

        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">


        <link rel='stylesheet' href='/stylesheets/style.css' />
      </head>
      <body>
        <h1>Express</h1>
    <p>Welcome to Express</p>

        <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
        <script
                  src="https://code.jquery.com/jquery-1.12.4.min.js"
                  integrity="sha256-ZosEbRLbNQzLpnKIkEdrPv7lOy9C27hHQ+Xp8a4MxAQ="
                  crossorigin="anonymous"></script>
        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
      </body>
    </html>
