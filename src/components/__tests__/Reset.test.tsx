import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Reset from '../Reset';
import { findByTestAttr } from '../../test/testUtils';

const setup = () => shallow(<Reset />);

describe('Reset Component', () => {
  const wrapper: ShallowWrapper = setup();

  it('renders Reset component without errors', () => {
    const component = findByTestAttr(wrapper, 'reset-component');
    expect(component.length).toEqual(1);
  });
});
