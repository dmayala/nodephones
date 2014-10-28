# Nodephones 

A sample [MEAN](http://blog.mongodb.org/post/49262866911/the-mean-stack-mongodb-expressjs-angularjs-and) stack application with Backbone.js used as a substitute for AngularJS.

Users are able to browse a list of products, view the details of a specific item, add items to a cart, and then checkout using Coinbase.

## Requirements
  - [node.js](http://nodejs.org/)
  - [mongoDB](http://www.mongodb.org/)
  - [Heroku Toolbelt](https://toolbelt.heroku.com/)

An .env file needs to be created in the project root, with the following attributes:

```sh
  NODE_ENV=INSERTVARHERE
  COINBASE_API_KEY=INSERTVARHERE
  COINBASE_API_SECRET=INSERTVARHERE
  SESSION_KEY=INSERTVARHERE
  SESSION_SECRET=INSERTVARHERE
``` 

Where ```INSERTVARHERE``` is replaced with your own values.

## Running Locally
  1. Satisfy the above requirements.

  2. Run mongod.

  3. Enter the ```foreman start``` command.

## Deploying to Heroku
To deploy to Heroku, simply execute the following commands:

```sh
  git clone https://github.com/dmayala/nodephones.git
  cd nodephones
  heroku login
  heroku create
  heroku addons:add mongohq 
  git push heroku master
  heroku config:push
  heroku open
``` 

The postinstall script in the ```package.json``` will automatically install all the client dependencies listed in the ```bower.json``` and then run the ```r.js``` optimizer.

