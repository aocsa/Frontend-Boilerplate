// //////////////////////////////////////////////////////////////////
// // THIS FILE IS FOR DEMONSTRATION PURPOSE ONLY! DO NOT UNCOMMENT
// ////////////////////////////////////////////////////////////////

/*
FORM TEST:

import { renderComponent, expect, mexpect } from '../test_helper';
import UserForm from '../../src/components/user_form';

describe('UserForm', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(UserForm);
  });

  it('BETTER HAS A CLASS WITH THE SAME NAME!', () => {
    expect(component).to.have.class('user-form');
  });

  it('BETTER DISPLAY INPUTS!', () => {
    expect(component.find('input').length).to.equal(6);
  });

  it('BETTER DISPLAY A TEXT AREA!', () => {
    expect(component.find('textarea')).to.exist;
  });

  it('BETTER HAS A BUTTON!', () => {
    expect(component.find('button')).to.exist;
  });

  describe('Functionality', () => {
    beforeEach(() => {
      component.find('textarea').simulate('change', 'new comment');
    });

    it('BETTER SHOW TEXT THAT IS ENTERED!', () => {
      expect(component.find('textarea')).to.have.value('new comment');
    });

    it('BETTER CLEAR INPUT ON SUBMIT!', () => {
      component.simulate('submit');
      expect(component.find('textarea')).to.have.value('');
    });
  });
});


/// NAVBAR test


import { renderComponent, expect, mexpect } from '../test_helper';
import Navbar from '../../src/components/navbar';
import { Link } from 'react-router-dom';

describe('Navbar', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Navbar);
  });

  it('should render', () => {
    expect(component).to.exist;
  });

  it('should have Links', () => {
    // Link is rendered into dom as anchor tag
    expect(component.find('a').length).to.equal(3);
  });
});


// SIMPLE PRESENTATIONAL COMPONENT TEST:

import { renderComponent, expect, mexpect } from '../test_helper';
import UserArea from '../../src/components/user_area';

describe('UserArea', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(UserArea);
  });

  it('renders something', () => {
    mexpect(component).toExist();
  });

  it('has classname of app', () => {
    expect(component).to.have.class('user-area');
  });

  it('displays default text', () => {
    expect(component).to.contain('User Area');
  });
});


*/
