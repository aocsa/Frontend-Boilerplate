import { renderComponent, expect, mexpect } from '../test_helper';
import Home from '../../src/components/home';

describe('Home', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(Home);
  });

  it('should render', () => {
    mexpect(component).toBeDefined();
    // expect(component).to.exist;
  });
});
