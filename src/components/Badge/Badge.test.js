import React from 'react';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Theme from '../../config/defaultTheme';
import ThemeProvider from '../Theme/index';

import Badge from './index';

describe('<Badge />', () => {
  const onHandleClick = sinon.spy();
  const component =
    <ThemeProvider theme={Theme}>
      <Badge active onHandleClick={onHandleClick}>Address</Badge>
    </ThemeProvider>;

  test('OnHandleClick', () => {
    const wrapper = mount(component);

    wrapper.find('span').at(0)
      .simulate('click');
    expect(onHandleClick).toHaveProperty('callCount', 0);
  });

  test('toMatchSnapshot: Badge', () => {
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: Label', () => {
    const labelComponent =
      <ThemeProvider theme={Theme}>
        <Badge label active={true}>Address</Badge>
      </ThemeProvider>;

    const tree = renderer
      .create(labelComponent)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
