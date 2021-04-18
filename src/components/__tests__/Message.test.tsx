import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Message from '../Message';
import { findByTestAttr } from '../../test/testUtils';

const setup = () => shallow(<Message />);

describe('Message Component', () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => (wrapper = setup()));

  it('renders outer div component without errors', () => {
    const component = findByTestAttr(wrapper, 'message-component');
    expect(component.length).toBe(1);
  });
});
