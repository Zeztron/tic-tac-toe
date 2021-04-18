import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Reset from '../Reset';
import { findByTestAttr } from '../../test/testUtils';

describe('Reset Component', () => {
  const reset = jest.fn();
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<Reset reset={reset} />)));

  it('renders Reset component without errors', () => {
    const component = findByTestAttr(wrapper, 'reset-component');
    expect(component.length).toEqual(1);
  });

  it('handles Reset button click', () => {
    reset.mockClear();
    const component = findByTestAttr(wrapper, 'reset-component');
    component.simulate('click');
    expect(reset).toBeCalled();
  });
});
