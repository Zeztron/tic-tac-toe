import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Rewind from '../Rewind';
import { findByTestAttr } from '../../test/testUtils';

describe('Rewind Component', () => {
  const rewind = jest.fn();
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<Rewind />)));

  it('renders Rewind component without errors', () => {
    const component = findByTestAttr(wrapper, 'rewind-component');
    expect(component.length).toEqual(1);
  });

  it('handles Rewind button click', () => {
    rewind.mockClear();
    const component = findByTestAttr(wrapper, 'rewind-component');
    component.simulate('click');
    expect(rewind).toBeCalled();
  });
});
