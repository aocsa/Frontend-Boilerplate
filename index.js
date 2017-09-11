/*

|-src/
|  |-actions/               redux actions directory. the actions and the types are exported from an index and a types file respectively
|  |-assets/                assets such as images and fonts
|  |-components/            components. generally resuable and simple components here.
|  |-containers/            containers. generally something you pass to redux connect and do complicated things in
|  |-hoc/                   higher order components. they are components that recieve a component and return that component after manipulating
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
|  |-components/            component tests. example indluded.
|  |-containers/            container component tests
|  |-hoc/                   higher order component tests.
|  |-middleware/            middleware tests
|  |-reducers/              reducer tests. example included
|-.elasticbeanstalk/        Required to serve via Node.js server on AWS ElasticBeanStalk. May add mongo and others to Node then.
|
|-.babelrc                  babel setup for presets and environments
|-.eslintrc                 eslint setup for presets and extends and rules
|-index.html                defunct index.html file. We now use an index.html template in src/ for HtmlExtractTextPlugin
|-index.js                  defunct index.js. We now use this as an infromation dump about the boilerplate
|-LICENSE.md                MIT license
|-package.json              package.json , take care to keep express in project dependencies, it is excluded form webpack.
|-Procfile                  This tells Heroku how to serve this boilerplate via Node.js
|-README.md                 This is the README file, containing instructions and descriptions
|-server.js                 This is the Node.js server we use to serve our project for local dev (if not webpack-dev-server) and on Heroku/Amazon
|-webpack.config.js         Self created webpack config. Don't touch if you don't know what you're doing.
|-.env                      Should contain APPKEY, and APPSECRET for Amazon s3 bucket website hosting.






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

git add .
git commit -m "Preparing to deploy on Heroku"
npm run build
git add .
git commit -m "Deploying on Heroku"
git push heroku master
heroku open
npm run clean
git add .
git commit -m "deployed on heroku, cleaned dist folder again.."


git add .
git commit -m "preparing to deploy on AWS Elastic Beanstalk"
npm run build
git add .
git commit -m "Deploying on AWS Elastic Beanstalk"
eb deploy
eb setenv NODE_ENV=production
eb open
npm run clean
git add .
git commit -m "Deployed on AWS Elastic Beanstalk, cleaning dist folder.."


*/

// ///////////////////////////////////////////////////////
// / REACT LIFECYCLE METHODS DOCS FOR QUICK REFERENCE ///
// /////////////////////////////////////////////////////


// ES 7 SYNTAX
// state = {
// key: value
// }

// MOUNTING

// componentWillMount() {
//   called when an instance of a component is being created and inserted into the DOM: componentWillMount() is invoked immediately before mounting occurs. It is called before render(), therefore setting state synchronously in this method will not trigger a re-rendering. Avoid introducing any side-effects or subscriptions in this method. This is the only lifecycle hook called on server rendering. Generally, we recommend using the constructor() instead.
// }

// componentDidMount(){
//  called when an instance of a component is being created and inserted into the DOM: componentDidMount() is invoked immediately after a component is mounted. Initialization that requires DOM nodes should go here. If you need to load data from a remote endpoint, this is a good place to instantiate the network request. Setting state in this method will trigger a re-rendering.
// }

// UPDATING

// componentWillReceiveProps(nextProps) {
// An update can be caused by changes to props or state. These methods are called when a component is being re-rendered: componentWillReceiveProps() is invoked before a mounted component receives new props. If you need to update the state in response to prop changes (for example, to reset it), you may compare this.props and nextProps and perform state transitions using this.setState() in this method. Note that React may call this method even if the props have not changed, so make sure to compare the current and next values if you only want to handle changes. This may occur when the parent component causes your component to re-render. React doesn't call componentWillReceiveProps with initial props during mounting. It only calls this method if some of component's props may update. Calling this.setState generally doesn't trigger componentWillReceiveProps.
// }

/* shouldComponentUpdate(nextProps, nextState){
  An update can be caused by changes to props or state. These methods are called when a component is being re-rendered: Use shouldComponentUpdate() to let React know if a component's output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior. shouldComponentUpdate() is invoked before rendering when new props or state are being received. Defaults to true. This method is not called for the initial render or when forceUpdate() is used. Returning false does not prevent child components from re-rendering when their state changes. Currently, if shouldComponentUpdate() returns false, then componentWillUpdate(), render(), and componentDidUpdate() will not be invoked. Note that in the future React may treat shouldComponentUpdate() as a hint rather than a strict directive, and returning false may still result in a re-rendering of the component. If you determine a specific component is slow after profiling, you may change it to inherit from React.PureComponent which implements shouldComponentUpdate() with a shallow prop and state comparison. If you are confident you want to write it by hand, you may compare this.props with nextProps and this.state with nextState and return false to tell React the update can be skipped.
} */

// componentWillUpdate(nextProps, nextState){
// An update can be caused by changes to props or state. These methods are called when a component is being re-rendered: componentWillUpdate() is invoked immediately before rendering when new props or state are being received. Use this as an opportunity to perform preparation before an update occurs. This method is not called for the initial render. Note that you cannot call this.setState() here. If you need to update state in response to a prop change, use componentWillReceiveProps() instead.
// componentWillUpdate() will not be invoked if shouldComponentUpdate() returns false.
// }

// componentDidUpdate(prevProps, prevState) {
// An update can be caused by changes to props or state. These methods are called when a component is being re-rendered: componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render. Use this as an opportunity to operate on the DOM when the component has been updated. This is also a good place to do network requests as long as you compare the current props to previous props (e.g. a network request may not be necessary if the props have not changed).
// componentDidUpdate() will not be invoked if shouldComponentUpdate() returns false.
// }

// UNMOUNTING

// componentWillUnmount() {
// This method is called when a component is being removed from the DOM: componentWillUnmount() is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any DOM elements that were created in componentDidMount
// }

// SET STATE

// setState(updater, [callback])
// component.forceUpdate(callback)

// helperMethod = () => {
// "this" is bound automatically.
// }
//


// PROP TYPES:
/*
// outside class!
import PropTypes from 'prop-types';
ComponentName.propTypes = {
prop: PropTypes.someType
}

// DEFAULT PROPS:
/*
ComponentName.defaultProps= {
prop: () => {},
otherProp: 'Some string'
}

*/


*/
