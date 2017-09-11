# Frontend Boilerplate

A modern boilerplate with

React Fiber (react and react-dom@16)
React Router 4 (route splitting included)
React Redux
Redux Form
Webpack 3 (Code splitting, image and css imports, cache busting, extracted style)
Mocha, Chai (Uses jsdom@8.5 as headless browser. Easy tests with a Test Helper)
Easy Deployment Scripts (Surge, Heroku, AWS S3, AWS Elastic Beanstalk, Github Pages)
Dual Dev Environment (Webpack Dev Server or Node.js Express Server)



### Getting Started

```
> git clone https://github.com/Babazon/Frontend-Boilerplate.git YourProject
> cd YourProject
> npm install
> npm run dev
```

Alternatively, add these in your bash_profile file and you have a command line argument at all times:

```
function boilerplate {
    git clone https://github.com/Babazon/Frontend-Boilerplate.git $1 && cd $1 && npm install && git init && clear
}
export -f boilerplate
```

Such as:

`> boilerplate NewProject`  and you are done.

### Getting a Production Package

```
> npm run build
```

### The Project Structure

|-src/  
|  |-actions/               redux actions directory. the actions and the types are exported from an index and a types file respectively  
|  |-assets/                assets such as images and fonts  
|  |-components/            components. generally reusable and simple components here.  
|  |-containers/            containers. generally something you pass to redux connect and do complicated things in  
|  |-hoc/                   higher order components. they are components that receive a component and return that component after manipulating  
|  |-middleware/            middlewares. mostly for redux middlewares that you might want to write yourself  
|  |-reducers/              redux store reducers directory , they are exported from an index file  
|  |-styles/                styles such as css, scss (not yet implemented in webpack)  
|  |  
|  |-app.js                 the main component being rendered to the dom. Provider and Router rendered inside this.  
|  |-index.html             the html template that webpack will attach script links for dynamically split/generated js files.  
|  |-router.js              routes for our react router. do main routing and component/route importing rendering here. not in App.js.  
|  |-store.js               the redux store config. we export an initialized store and a named createStore (config) method from this file.  
|-test/  
|  |-actions/               action tests. example included.  
|  |-assets/                asset tests. not sure why you would need this but it's here.  
|  |-components/            component tests. example included.  
|  |-containers/            container component tests  
|  |-hoc/                   higher order component tests.  
|  |-middleware/            middleware tests  
|  |-reducers/              reducer tests. example included  
|-.elasticbeanstalk/        Required to serve via Node.js server on AWS ElasticBeanStalk. May add mongo and others to Node then.  
|  
|-.babelrc                  babel setup for presets and environments  
|-.eslintrc                 eslint setup for presets and extends and rules  
|-index.html                defunct index.html file. We now use an index.html template in src/ for HtmlExtractTextPlugin  
|-index.js                  defunct index.js. We now use this as an information dump about the boilerplate  
|-LICENSE.md                MIT license  
|-package.json              package.json , take care to keep express in project dependencies, it is excluded form webpack.  
|-Procfile                  This tells Heroku how to serve this boilerplate via Node.js  
|-README.md                 This is the README file, containing instructions and descriptions  
|-server.js                 This is the Node.js server we use to serve our project for local dev (if not webpack-dev-server) and on Heroku/Amazon  
|-webpack.config.js         Self created webpack config. Don't touch if you don't know what you're doing.  
|-.env                      Should contain APPKEY, and APPSECRET for Amazon s3 bucket website hosting.  
