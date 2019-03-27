import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import Theme from '../../config/defaultTheme';
import ThemeProvider from '../Theme/index';

import Area from './index';

describe('<Area />', () => {
  const component =
    <ThemeProvider theme={Theme}>
      <Area><strong>Lebron James has scored!</strong></Area>
    </ThemeProvider>;

  test('Render component', () => {
    const area = shallow(component);

    expect(area.render().find('strong')).toHaveLength(1);
    expect(area.render().text()).toEqual('Lebron James has scored!');
  });

  test('toMatchSnapshot', () => {
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
