/*
THIS FILE IS FOR NODE.JS EXPRESS SERVER , THE APPLICATION ENTRY POINT IS AT SRC/APP.JS

First create the scaffold

Then install dependencies:

npm i react react-dom react-redux redux react-router react-router-dom redux-form redux-thunk

Then install eslint package:

export PKG=eslint-config-airbnb; npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest" babel-eslint

Then install dev dependencies:

npm i --save-dev babel-core babel-polyfill babel-loader babel-preset-env babel-preset-react webpack webpack-dev-server css-loader style-loader image-webpack-loader html-webpack-plugin extract-text-webpack-plugin rimraf sass-loader node-sass

Then install more dev dependencies for testing :

npm i --save-dev chai chai-jquery jquery jsdom mocha react-addons-test-utils expect

*/

const express = require('express');
const path = require('path');
const http = require('http');

const port = process.env.PORT || 3000;
const app = express();

app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect(`http://${req.hostname}${req.url}`);
  } else {
    // if https, redirect to http version
    next();
  }
}); // this breaks localhost:port start

app.use(express.static('dist'));

app.get('*', (request, response) => {
  response.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = http.createServer(app);

server.listen(port, () => {
  console.log('Server up on port:', port);
});

/** ************************************************* */
/*  NODE.JS DEVELOPMENT SERVER FOR REACT FRONT END  */
/** ************************************************* */
