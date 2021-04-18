import React from 'react';
import { mount, ReactWrapper } from 'enzyme';
import Game from '../Game';
import { findByTestAttr } from '../../test/testUtils';
import Board from '../Board';

const setup = () => mount(<Game />);

const boardProps = {
  squares: Array(9).fill(null),
  onClick: jest.fn(),
};

describe('Game Component', () => {
  let wrapper: ReactWrapper;
  beforeEach(() => (wrapper = setup()));

  it('renders without crashing', () => {
    const gameComponent = findByTestAttr(wrapper, 'game-component');
    expect(gameComponent.length).toBe(1);
  });

  it('renders Board component successfully', () => {
    expect(wrapper.containsMatchingElement(<Board {...boardProps} />)).toBe(
      true
    );
  });
});
