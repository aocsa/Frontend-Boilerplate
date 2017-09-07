import * as redux from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const INITIAL_STATE = {};

const devTools =
  process.env.NODE_ENV === 'development'
    ? redux.compose(
      redux.applyMiddleware(thunk),
      global.window.__REDUX_DEVTOOLS_EXTENSION__ && global.window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
    : redux.compose(redux.applyMiddleware(thunk));

export const configure = (initialState = INITIAL_STATE) => {
  const REDUCERS_OBJECT = {
    form: formReducer,
  };

  const reducer = redux.combineReducers(REDUCERS_OBJECT);

  /* eslint-disable no-underscore-dangle */
  const configuredStore = redux.createStore(reducer, initialState, devTools);
  /* eslint-enable */

  return configuredStore;
};

const store = configure();

export default store;
