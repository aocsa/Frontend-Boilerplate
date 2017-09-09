/** ************************************************* */
/*  NODE.JS DEVELOPMENT SERVER FOR REACT FRONT END  */
/** ************************************************* */

const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000;
const app = express();

// //////////////////////////////////////////////////
// DEFINE ALL API ROUTES RIGHT HERE, BEFORE SWITCH!!
// //////////////////////////////////////////////////

switch (true) {
  case process.env.NODE_ENV !== 'production':
    const webpackMiddleware = require('webpack-dev-middleware');
    const webpack = require('webpack');
    const webpackConfig = require('./webpack.config');
    app.use(webpackMiddleware(webpack(webpackConfig)));
    break;
  case process.env.NODE_ENV === 'production':
    app.use(express.static('dist'));
    app.get('*', (request, response) => {
      response.sendFile(path.join(__dirname, 'dist', 'index.html'));
    });
    break;
  default:
    break;
}

// app.use((req, res, next) => {
//   if (req.headers['x-forwarded-proto'] === 'https') {
//     res.redirect(`http://${req.hostname}${req.url}`);
//   } else {
//     // if https, redirect to http version
//     next();
//   }
// }); // this breaks localhost:port start

app.listen(port, () => {
  console.log('Server up on port:', port);
});

/** ************************************************* */
/*  NODE.JS DEVELOPMENT SERVER FOR REACT FRONT END  */
/** ************************************************* */
