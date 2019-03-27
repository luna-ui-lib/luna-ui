import React from 'react';
import renderer from 'react-test-renderer';

import Theme from '../../config/defaultTheme';
import ThemeProvider from '../Theme/index';

import CircularLoader from './index';

describe('<CircularLoader />', () => {
  const component =
    <ThemeProvider theme={Theme}>
      <CircularLoader type="emit" kind="default" size={100} />
    </ThemeProvider>;

  test('toMatchSnapshot', () => {
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
