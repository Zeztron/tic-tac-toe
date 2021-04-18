import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Rewind from '../Rewind';
import { findByTestAttr } from '../../test/testUtils';

describe('Rewind Component', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = shallow(<Rewind />)));

  it('renders Rewind component without errors', () => {
    const component = findByTestAttr(wrapper, 'rewind-component');
    expect(component.length).toEqual(1);
  });
});
