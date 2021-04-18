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

  it('renders an instance of Board component successfully', () => {
    expect(wrapper.find('Board').length).toEqual(1);
  });

  it('renders an instance of Message component successfully', () => {
    expect(wrapper.find('Message').length).toEqual(1);
  });

  it('renders an instance of Reset component successfully', () => {
    expect(wrapper.find('Reset').length).toEqual(1);
  });

  it('renders an instance of Rewind componetn successfully', () => {
    expect(wrapper.find('Rewind').length).toEqual(1);
  });

  it('displays X and O in their respective squares', () => {
    const x = findByTestAttr(wrapper, 'square-button-0');
    const o = findByTestAttr(wrapper, 'square-button-1');
    x.simulate('click');
    o.simulate('click');
    expect(x.text()).toBe('X');
    expect(o.text()).toBe('O');
  });

  it('displays the winner if X or O won', () => {
    const squares = Array.from(Array(9), (x, index) =>
      findByTestAttr(wrapper, `square-button-${index}`)
    );

    [0, 1, 4, 5, 8].forEach((i) => squares[i].simulate('click'));

    const announcementWrapper = findByTestAttr(
      wrapper,
      'announcement-component'
    );
    expect(announcementWrapper.text()).toBe('X Wins!');
  });

  it('displays a message "Its a Tie!" if theres a tie', () => {
    const squares = Array.from(Array(9), (x, index) =>
      findByTestAttr(wrapper, `square-button-${index}`)
    );

    [0, 1, 2, 4, 3, 6, 5, 8, 7].forEach((i) => squares[i].simulate('click'));

    const announcementWrapper = findByTestAttr(
      wrapper,
      'announcement-component'
    );
    expect(announcementWrapper.text()).toBe("It's a Tie!");
  });

  it('disables all Square buttons if theres a winner or a tie', () => {
    const squares = Array.from(Array(9), (x, index) =>
      findByTestAttr(wrapper, `square-button-${index}`)
    );

    [0, 1, 4, 5, 8].forEach((i) => squares[i].simulate('click'));

    Array.from(Array(9), (x, index) =>
      findByTestAttr(wrapper, `square-button-${index}`)
    ).forEach((square) => {
      expect(square.prop('disabled')).toBe(true);
    });
  });

  it('resets the game if Reset button is pressed', () => {
    const squares = Array.from(Array(9), (x, index) =>
      findByTestAttr(wrapper, `square-button-${index}`)
    );

    [0, 1, 4, 5, 8].forEach((i) => squares[i].simulate('click'));

    const resetButton = findByTestAttr(wrapper, 'reset-component');
    resetButton.simulate('click');

    Array.from(Array(9), (x, index) =>
      findByTestAttr(wrapper, `square-button-${index}`)
    ).forEach((square) => {
      expect(square.text()).toEqual('');
      expect(square.prop('disabled')).toBe(false);
    });
  });

  it('rewinds if the Rewind button is pressed', () => {
    const square = findByTestAttr(wrapper, 'square-button-0');
    square.simulate('click');
    const rewindButton = findByTestAttr(wrapper, 'rewind-component');
    rewindButton.simulate('click');
    expect(square.text()).toBe('');
  });
});
