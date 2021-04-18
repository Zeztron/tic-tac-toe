import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';
import Board from '../Board';

const setup = () => shallow(<Board />);

describe('Board Component', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = setup()));

  it('renders component without errors', () => {
    const component = findByTestAttr(wrapper, 'board-component');
    expect(component.length).toBe(1);
  });
});
