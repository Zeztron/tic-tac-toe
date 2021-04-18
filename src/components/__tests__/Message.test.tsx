import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Message from '../Message';
import { findByTestAttr } from '../../test/testUtils';

const setup = (props = { hasStarted: false, isXNext: true }) =>
  shallow(<Message {...props} />);

describe('Message Component', () => {
  it('renders outer div component without errors', () => {
    const wrapper: ShallowWrapper = setup();
    const component = findByTestAttr(wrapper, 'message-component');
    expect(component.length).toBe(1);
  });

  it('prompts the user at the start of the game', () => {
    const wrapper: ShallowWrapper = setup();
    const messageComponent = findByTestAttr(wrapper, 'message-component');
    expect(messageComponent.text()).toBe('Click To Start Game');
  });
});
