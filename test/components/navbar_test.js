import { renderComponent, expect, mexpect } from '../test_helper';
import Navbar from '../../src/components/navbar';

describe('Navbar', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(Navbar);
  });

  it('should render', () => {
    mexpect(component).toBeDefined();
    // expect(component).to.exist;
  });
});
