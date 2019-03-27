import React from 'react';
import sinon from 'sinon';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Theme from '../../config/defaultTheme';
import ThemeProvider from '../Theme/index';

import Button from './index';

describe('<Button />', () => {
  const onHandleClick = sinon.spy();
  const config = { onClick: onHandleClick };
  const component =
    <ThemeProvider theme={Theme}>
      <Button kind="primary" config={config}>primary</Button>
    </ThemeProvider>;

  test('HandleClick', () => {
    const wrapper = mount(component);

    wrapper.find('button').at(0)
      .simulate('click');
    expect(onHandleClick).toHaveProperty('callCount', 1);
  });

  test('toMatchSnapshot: Size -> defaul', () => {
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: Size -> small', () => {
    const componentSmall =
      <ThemeProvider theme={Theme}>
        <Button kind="primary" size="small">primary</Button>
      </ThemeProvider>;

    const tree = renderer
      .create(componentSmall)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: Size -> large', () => {
    const componentLarge =
      <ThemeProvider theme={Theme}>
        <Button kind="primary" size="large">primary</Button>
      </ThemeProvider>;

    const tree = renderer
      .create(componentLarge)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: Promise', () => {
    const componentPromise =
      <ThemeProvider theme={Theme}>
        <Button kind="primary" promise={true}>primary</Button>
      </ThemeProvider>;

    const tree = renderer
      .create(componentPromise)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
