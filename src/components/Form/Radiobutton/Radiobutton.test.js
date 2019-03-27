import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import theme from '../../../config/defaultTheme';
import ThemeProvider from '../../Theme/index';

import Radiobutton from './index';

describe('<Radiobutton />', () => {
  let radiobuttonList;
  let onChange;

  beforeEach(() => {
    onChange = sinon.spy();

    radiobuttonList =
      <ThemeProvider theme={theme}>
        <Radiobutton id="rd3" kind="success" label="funk" group="rd" value="3" config={{ checked: true }} />
        <Radiobutton id="rd4" kind="danger" label="samba" group="rd" value="4" config={{ onChange }} />
      </ThemeProvider>;
  });

  test('To be checked', () => {
    const wrapper = mount(radiobuttonList);
    expect(wrapper.find('input').at(0)
      .getDOMNode().checked).toBeTruthy();
  });

  test('Call onChange', () => {
    const wrapper = mount(radiobuttonList);
    const radiobutton = () => wrapper.find('input').at(1);
    radiobutton().simulate('change');
    expect(onChange).toHaveProperty('callCount', 1);
  });

  test('toMatchSnapshot', () => {
    const tree = renderer
      .create(radiobuttonList)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
