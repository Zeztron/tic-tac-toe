import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from '../App';
import Game from '../Game';

const setup = () => shallow(<App />);

describe('<App />', () => {
  let wrapper: ShallowWrapper;
  beforeEach(() => (wrapper = setup()));

  it('successfully renders Game component', () => {
    expect(wrapper.containsMatchingElement(<Game />)).toEqual(true);
  });
});
