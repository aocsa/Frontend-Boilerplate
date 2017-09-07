import { renderComponent, expect, mexpect } from './test_helper';
import Home from '../src/components/home';

describe('App', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(Home);
  });

  it('should render', () => {
    console.log(component);
    mexpect(component).toBeDefined();
    // expect(component).to.exist;
  });
});
