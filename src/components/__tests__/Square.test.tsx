import React from 'react';
import { shallow, ShallowWrapper, mount } from 'enzyme';
import { findByTestAttr } from '../../test/testUtils';
import Square from '../Square';

const setupProps = {
  value: null,
  onClick: jest.fn(),
  index: 1,
  disabled: false,
};

const setup = () => {
  return shallow(<Square {...setupProps} />);
};

describe('Square Component', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = setup()));

  it('renders button element without errors', () => {
    const component = findByTestAttr(wrapper, 'square-button-1');
    expect(component.length).toBe(1);
  });

  it('displays empty text on render', () => {
    const component = findByTestAttr(wrapper, 'square-button-1');
    expect(component.text()).toBe('');
  });

  it('handles a click event', () => {
    const component = findByTestAttr(wrapper, 'square-button-1');
    component.simulate('click');
    expect(setupProps.onClick).toHaveBeenCalled();
  });

  it('Only allows to click the same button once', () => {
    const disabledProps = {
      value: null,
      onClick: jest.fn(),
      index: 1,
      disabled: true,
    };

    const buttonComponent = mount(<Square {...disabledProps} />);
    buttonComponent.simulate('click');
    expect(disabledProps.onClick).not.toHaveBeenCalled();
  });
});
