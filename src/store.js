import * as redux from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const INITIAL_STATE = {};

// const devTools =
//   process.env.NODE_ENV === 'development'
//     ? redux.compose(
//       redux.applyMiddleware(thunk),
//       global.window.__REDUX_DEVTOOLS_EXTENSION__ && global.window.__REDUX_DEVTOOLS_EXTENSION__(),
//     )
//     : redux.compose(redux.applyMiddleware(thunk));

export const configure = (initialState = INITIAL_STATE) => {
  // this bit taken from acemarke's store setup!
  const middlewares = [thunk];
  const appliedMiddlewares = redux.applyMiddleware(...middlewares);
  const composeArguments = [appliedMiddlewares];
  if (process.env.NODE_ENV === 'development') {
    /* eslint-disable no-underscore-dangle */
    composeArguments.push(
      global.window.__REDUX_DEVTOOLS_EXTENSION__ && global.window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    /* eslint-enable */
  }
  const composedEnhancer = redux.compose(...composeArguments);

  const REDUCERS_OBJECT = {
    form: formReducer,
  };

  const reducer = redux.combineReducers(REDUCERS_OBJECT);

  const configuredStore = redux.createStore(reducer, initialState, composedEnhancer);

  return configuredStore;
};

const store = configure();

export default store;
