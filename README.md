# Gameori
Gameori is a Node app built with MongoDB and Angular. Node provides the RESTful API. Angular provides the frontend and accesses the API. MongoDB stores data.

Gameori aims to review the latest games and at the same time promoting the product to the user.

## Prerequisites
* Node.js - Download and Install [Node.js](http://www.nodejs.org/download/).
* MongoDB - Download and Install [MongoDB](http://docs.mongodb.org/manual/installation/) - Make sure `mongod` is running on the default port (27017).

### Tools Prerequisites
* NPM - Node.js package manage; should be installed when you install node.js.
* Bower - Web package manager. Installing [Bower](http://bower.io/) is simple when you have `npm`:

```
$ [sudo] npm install -g bower
```

## Additional Packages
* BodyParser - Defined as npm module in the [package.json](package.json) file.
* Express - Defined as npm module in the [package.json](package.json) file.
* Mongoose - Defined as npm module in the [package.json](package.json) file.
* AngularJS - Defined as bower module in the [bower.json](bower.json) file.
* Bootstrap - Defined as bower module in the [bower.json](bower.json) file.
* Font Awesome - Defined as bower module in the [bower.json](bower.json) file.
* JQuerry - Defined as bower module in the [bower.json](bower.json) file.

## Quick Install
  Install dependencies:

    $ [sudo] npm install

  Bower dependencies:

    $ [sudo] bower install

  Run server:

    $ node server

  Then, open a browser and go to:

    http://localhost:3000

## Sources
1. [Node Todo App](https://github.com/scotch-io/node-todo)
2. [MEAN Stack on OpenShift](https://github.com/linnovate/mean-on-openshift)