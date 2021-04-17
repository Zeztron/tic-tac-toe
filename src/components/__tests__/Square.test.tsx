import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { findByTestAttr } from '../../test/testUtils';
import Square from '../Square';

const setupProps = {
  value: '',
  onClick: jest.fn(),
};

const setup = () => {
  return shallow(<Square {...setupProps} />);
};

describe('Square Component', () => {
  let wrapper: ShallowWrapper;
  const onClick = jest.fn();
  beforeEach(() => (wrapper = setup()));

  it('renders button element without errors', () => {
    const component = findByTestAttr(wrapper, 'square-button');
    expect(component.length).toBe(1);
  });

  it('displays empty text on render', () => {
    const component = findByTestAttr(wrapper, 'square-button');
    expect(component.text()).toBe('');
  });

  it('handles a click event', () => {
    const component = findByTestAttr(wrapper, 'square-button');
    component.simulate('click');
    expect(setupProps.onClick).toHaveBeenCalled();
  });
});
