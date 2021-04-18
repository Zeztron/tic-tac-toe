import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import Announcement from '../Announcement';
import { findByTestAttr } from '../../test/testUtils';

describe('Announcement Component', () => {
  const wrapper = shallow(<Announcement winner={'X'} />);

  it('renders announcement component without errors', () => {
    const announcementComponent = findByTestAttr(
      wrapper,
      'announcement-component'
    );
    expect(announcementComponent.length).toBe(1);
  });
});
