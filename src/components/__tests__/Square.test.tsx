import { shallow } from 'enzyme';
import React from 'react';
import { findByTestAttr } from '../../test/testUtils';
import Square from '../Square';

const defaultProps = {
  value: '',
  onClick: jest.fn(),
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<Square {...setupProps} />);
};

const wrapper = setup();

it('renders button element without errors', () => {
  const component = findByTestAttr(wrapper, 'square-button');
  expect(component.length).toBe(1);
});

it('displays empty text on render', () => {
  const component = findByTestAttr(wrapper, 'square-button');
  expect(component.text()).toBe('');
});