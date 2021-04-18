import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Game from '../Game';
import { findByTestAttr } from '../../test/testUtils';

const setup = () => mount(<Game />);

describe('Game Component', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => (wrapper = setup()));

  it('renders without crashing', () => {
    const gameComponent = findByTestAttr(wrapper, 'game-component');
    expect(gameComponent.length).toBe(1);
  });
});
