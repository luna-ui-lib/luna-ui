import React from 'react';
import renderer from 'react-test-renderer';

import Theme from '../../config/defaultTheme';
import ThemeProvider from '../Theme/index';

import Navbar from './index';

describe('<Navbar />', () => {
  const navBarContent =
    <div>
      <Navbar.Content>
        <h1>My App</h1>
      </Navbar.Content>
      <Navbar.Actions>
        <button>actions</button>
      </Navbar.Actions>
    </div>;

  const component =
    <ThemeProvider theme={Theme}>
      <Navbar>{navBarContent}</Navbar>
    </ThemeProvider>;

  const componentFixed =
    <ThemeProvider theme={Theme}>
      <Navbar fixed>{navBarContent}</Navbar>
    </ThemeProvider>;

  test('toMatchSnapshot: Static', () => {
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: Fixed', () => {
    const tree = renderer
      .create(componentFixed)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
