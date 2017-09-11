// ////////////////////////////////////////////////
// THIS FILE IS FOR DEMONSTRATION PURPOSE ONLY //
// //////////////////////////////////////////////

/*

import { applicationErrorsReducer } from '../../src/reducers';
import { renderComponent, expect, mexpect } from '../test_helper';
import * as actions from '../../src/actions';

const dummyAction = actions.newError('Something occured');

describe('Errors Reducer', () => {
  let reducedState;

  it('should return correct state when an action is sent', () => {
    reducedState = applicationErrorsReducer({}, dummyAction);
    Object.keys(reducedState).forEach((key) => {
      expect(reducedState[key]).to.contain('Something occured');
    });
  });

  it('should return empty state when an invalid action is sent', () => {
    reducedState = applicationErrorsReducer({}, { type: 'HELLO_WORLD', payload: 'Hello' });
    expect(reducedState).to.deep.equal({});
  });
});


import { authReducer } from '../../src/reducers';
import { renderComponent, expect, mexpect } from '../test_helper';
import * as actions from '../../src/actions';

const dummyAction = actions.setAuthentication(true);

describe('Auth Reducer', () => {
  let reducedState;

  it('should return correct state when an action is sent', () => {
    reducedState = authReducer({}, dummyAction);
    expect(reducedState.authenticated).to.equal(true);
  });

  it('should not change state when an invalid action is sent', () => {
    reducedState = authReducer({ authenticated: false }, { type: 'HELLO_WORLD', payload: 'Hello' });
    expect(reducedState.authenticated).to.equal(false);
  });


  import { customerReducer } from '../../src/reducers';
  import { renderComponent, expect, mexpect } from '../test_helper';
  import * as actions from '../../src/actions';

  const dummyAction = actions.loadCustomer({
    name: 'Bas',
    money: 'One million',
  });

  describe('News Reducer', () => {
    let reducedState;

    it('should return correct state when an action is sent', () => {
      reducedState = customerReducer({}, dummyAction);
      expect(reducedState).to.contain({
        name: 'Bas',
        money: 'One million',
      });
    });

    it('should not return a different state when an invalid action is sent', () => {
      reducedState = customerReducer({}, { type: 'MY NAME IS DIO', payload: 'DA WORUDO!' });
      expect(reducedState).to.deep.equal({});
    });
  });


  import { loadingReducer } from '../../src/reducers';
  import { renderComponent, expect, mexpect } from '../test_helper';
  import * as actions from '../../src/actions';

  const dummyAction = actions.setLoading();

  describe('Loading Reducer', () => {
    let reducedState;

    it('should flip its state when the correct action is sent', () => {
      reducedState = loadingReducer(true, dummyAction);
      expect(reducedState).to.equal(false);
    });

    it('should not flip its state when an invalid action is sent', () => {
      reducedState = loadingReducer(true, { type: "ACTUALLY, IT'S MULAN!", payload: '42' });
      expect(reducedState).to.equal(true);
    });
  });


  import { newsReducer } from '../../src/reducers';
  import { renderComponent, expect, mexpect } from '../test_helper';
  import * as actions from '../../src/actions';

  const dummyAction = actions.loadNews([
    { id: 1, news: 'Hillary Clinton Jailed!' },
    { id: 2, news: 'George Soros missing!' },
    { id: 3, news: 'Barack Obama Arrested and Deported!' },
  ]);

  describe('Customers Reducer', () => {
    let reducedState;

    it('should return correct state when an action is sent', () => {
      reducedState = newsReducer({}, dummyAction);
      expect(reducedState).to.deep.equal({
        1: { id: 1, news: 'Hillary Clinton Jailed!' },
        2: { id: 2, news: 'George Soros missing!' },
        3: { id: 3, news: 'Barack Obama Arrested and Deported!' },
      });
    });

    it('should not change its state when an invalid action is sent', () => {
      reducedState = newsReducer({}, { type: 'PEPPERONI' });
      expect(reducedState).to.deep.equal({});
    });
  });


*/
