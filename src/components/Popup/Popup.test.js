import React from 'react';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import theme from '../../config/defaultTheme';
import ThemeProvider from '../Theme/index';

import Popup from './index';

describe('<Popup />', () => {
  const onHandleClick = sinon.spy();
  const menuItem = <Popup.MenuItem onClick={onHandleClick}>Menu Item</Popup.MenuItem>;

  const navContextMenu =
    <ThemeProvider theme={theme}>
      <Popup.NavContextMenu>
        {menuItem}
      </Popup.NavContextMenu>
    </ThemeProvider>;

  const navContextMenuSeparatorText =
    <ThemeProvider theme={theme}>
      <Popup.NavContextMenu separator text="My Menu">
        {menuItem}
      </Popup.NavContextMenu>
    </ThemeProvider>;

  const contextMenu =
    <ThemeProvider theme={theme}>
      <Popup.ContextMenu>
        {menuItem}
      </Popup.ContextMenu>
    </ThemeProvider>;

  test('HandleClick', () => {
    const wrapper = mount(menuItem);

    wrapper.find('li').simulate('click');
    expect(onHandleClick).toHaveProperty('callCount', 1);
  });

  test('toMatchSnapshot: navContextMenu', () => {
    const tree = renderer
      .create(navContextMenu)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: navContextMenuSeparatorText', () => {
    const tree = renderer
      .create(navContextMenuSeparatorText)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: contextMenu', () => {
    const tree = renderer
      .create(contextMenu)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
