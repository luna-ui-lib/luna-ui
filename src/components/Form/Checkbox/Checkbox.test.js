import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import theme from '../../../config/defaultTheme';
import ThemeProvider from '../../Theme/index';

import Checkbox from './index.js';

describe('<Checkbox />', () => {
  let checkboxList;
  let onChange;

  beforeEach(() => {
    onChange = sinon.spy();

    checkboxList =
      <ThemeProvider theme={theme}>
        <Checkbox id="ex1" kind="primary" label="pop" group="ex" value="1" />
        <Checkbox id="ex2" kind="default" label="rock" group="ex" value="2" config={{ checked: true, onChange }} />
        <Checkbox id="ex3" kind="default" label="rock" group="ex" value="2" config={{ disabled: true }} />
      </ThemeProvider>;
  });

  test('To be checked', () => {
    const wrapper = mount(checkboxList);
    expect(wrapper.find('input').at(1)
      .getDOMNode().checked).toBeTruthy();
  });

  test('Call onChange', () => {
    const wrapper = mount(checkboxList);
    const checkbox = () => wrapper.find('input').at(1);
    checkbox().simulate('change');
    expect(onChange).toHaveProperty('callCount', 1);
  });

  test('toMatchSnapshot: List of Checkboxes', () => {
    const tree = renderer
      .create(checkboxList)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
