import React from 'react';
import { shallow } from 'enzyme';
import { mockedItems } from '../../mockedDataForTests/mockedDataForTests'

import WhatIsNew from './WhatIsNew';

describe('<WhatIsNew />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <WhatIsNew items={mockedItems} />
    );
  });

  test('renders', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
