import React from 'react';
import { shallow } from 'enzyme';

import Labels from './Labels';

describe('<Labels />', () => {
  let wrapper;
  let props;
  const handleClick = jest.fn();

  beforeEach(() => {
    props = {
      getLabel: jest.fn()
    }
    wrapper = shallow(
      <Labels {...props}/>
    );
  });

  test('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke function handleClick when event on click occurs', () => {
    const event = { target: { innerText: 'TEST' } };
    wrapper
      .find('.label__wrapper')
      .simulate('click', event);
    expect(props.getLabel).toHaveBeenCalledWith('test');
  });
});
