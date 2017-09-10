import { renderComponent, expect, mexpect } from '../test_helper';
import Loading from '../../src/components/loading';

describe('Loading', () => {
  let component;
  beforeEach(() => {
    component = renderComponent(Loading);
  });

  it('should render', () => {
    mexpect(component).toBeDefined();
    // expect(component).to.exist;
  });
});
