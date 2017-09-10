/*
THIS FILE IS FOR NODE.JS EXPRESS SERVER , THE APPLICATION ENTRY POINT IS AT SRC/APP.JS

First create the scaffold

Then install dependencies:

npm i react@next react-dom@next react-redux redux react-router react-router-dom redux-form redux-thunk

Then install eslint package:

export PKG=eslint-config-airbnb; npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest" babel-eslint

Then install dev dependencies:

npm i --save-dev babel-core babel-polyfill babel-loader babel-preset-env babel-preset-react webpack webpack-dev-server css-loader style-loader image-webpack-loader html-webpack-plugin extract-text-webpack-plugin rimraf sass-loader node-sass

Then install more dev dependencies for testing :

npm i --save-dev chai chai-jquery jquery jsdom@8.5.0 mocha react-addons-test-utils expect

heroku create
eb init && eb create

FOR HEROKU AND EB TO WORK:

1- EXPRESS MUST BE IN DEPENDENCIES BUT NOT COMPILED BY WEBPACK
2- THE APP MUST HAVE BEEN BUILT INTO DIST DIRECTORY AND DIST MUST NOT BE ON GITIGNORE!


*/
