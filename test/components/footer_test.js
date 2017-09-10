import { renderComponent, expect, mexpect } from '../test_helper';
import Footer from '../../src/components/footer';

describe('Footer', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(Footer);
  });

  it('should render', () => {
    mexpect(component).toBeDefined();
    // expect(component).to.exist;
  });
});
