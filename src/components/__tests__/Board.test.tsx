import { shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';
import Board from '../Board';
import Square from '../Square';

const setupProps = {
  squares: Array(9).fill({ value: null, disabled: false }),
  onClick: jest.fn(),
};

const setup = () => shallow(<Board {...setupProps} />);

describe('Board Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => (wrapper = setup()));

  it('renders outer div component without errors', () => {
    const component = findByTestAttr(wrapper, 'board-component');
    expect(component.length).toBe(1);
  });

  it('displays the specified amount of Square components to represent the tic-tac-toe grid', () => {
    expect(wrapper.find(Square).length).toEqual(setupProps.squares.length);
  });
});
