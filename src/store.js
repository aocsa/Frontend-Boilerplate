import * as redux from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

// If you want to initialise the store with data, use this one const. Or you may pass your object to the configure() method.
const INITIAL_STATE = {};

export const configure = (initialState = INITIAL_STATE) => {
  // this bit is taken from acemarke@reactiflux's store setup!
  const middlewares = [thunk];
  const appliedMiddlewares = redux.applyMiddleware(...middlewares);
  const composeArguments = [appliedMiddlewares];
  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable no-underscore-dangle */ // Install Redux Devtools Extension on Browser for this to work.
    composeArguments.push(
      global.window.__REDUX_DEVTOOLS_EXTENSION__ && global.window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    /* eslint-enable */
  }
  const composedEnhancer = redux.compose(...composeArguments);

  // Add your reducers here. userReducer, postsReducer etc. formReducer is for redux form.
  const REDUCERS_OBJECT = {
    form: formReducer,
  };

  const reducer = redux.combineReducers(REDUCERS_OBJECT);

  const configuredStore = redux.createStore(reducer, initialState, composedEnhancer);

  return configuredStore;
};

// Initialize here and default export to use the same store everywhere you pass it to a provider. The configure method is also exported as a named export if you would like to set up a new store for testing purposes.
const store = configure();

export default store;
