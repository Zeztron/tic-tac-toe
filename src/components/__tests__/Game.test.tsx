import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Game from '../Game';
import { findByTestAttr } from '../../test/testUtils';
import Message from '../Message';

const setup = () => mount(<Game />);

describe('Game Component', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => (wrapper = setup()));

  it('renders without crashing', () => {
    const gameComponent = findByTestAttr(wrapper, 'game-component');
    expect(gameComponent.length).toBe(1);
  });

  it('renders an instance of Board component successfully', () => {
    expect(wrapper.find('Board').length).toEqual(1);
  });

  it('renders an instance of Message component successfully', () => {
    expect(wrapper.find('Message').length).toEqual(1);
  });
});
