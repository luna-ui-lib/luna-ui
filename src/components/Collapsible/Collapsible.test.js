import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import theme from '../../config/defaultTheme';
import ThemeProvider from '../Theme/index';

import Collapsible from './index';

describe('<Collapsible />', () => {
  let content;
  let component;
  let componentCollapsed;

  beforeEach(() => {
    content =
      <ul>
        <li>First item</li>
        <li>Second item</li>
        <li>Third item</li>
      </ul>
    ;

    component =
      <ThemeProvider theme={theme}>
        <Collapsible text="Labels">
          {content}
        </Collapsible>
      </ThemeProvider>;

    componentCollapsed =
      <ThemeProvider theme={theme}>
        <Collapsible collapsed text="Labels">
          {content}
        </Collapsible>
      </ThemeProvider>;
  });

  test('HandleClick', () => {
    const wrapper = mount(component);
    wrapper.find('button').simulate('click');
    const componentInstance = wrapper
      .find(Collapsible)
      .instance();
    expect(componentInstance.state.isCollapsed).toBeTruthy();
  });

  test('toMatchSnapshot: Expanded', () => {
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: Collapsed', () => {
    const tree = renderer
      .create(componentCollapsed)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
