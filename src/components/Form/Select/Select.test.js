import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import theme from '../../../config/defaultTheme';
import ThemeProvider from '../../Theme/index';

import Select from './index';

describe('<Select />', () => {
  let selectList;
  let onClick;

  beforeEach(() => {
    onClick = sinon.spy();

    selectList =
      <ThemeProvider theme={theme}>
        <Select icon="seedling" kind="default" config={{ defaultValue: 2 }}>
          <option value="1">Angeratum</option>
          <option value="2">Marigold</option>
        </Select>
        <Select kind="default" config={{ onClick }}>
          <option>Dog</option>
          <option>Cat</option>
          <option>Rat</option>
        </Select>
      </ThemeProvider>;
  });

  test('Check options length', () => {
    const wrapper = mount(selectList);
    expect(wrapper.find('select').at(0)
      .find('option')).toHaveLength(2);
  });

  test('Check options deafult value', () => {
    const wrapper = mount(selectList);
    expect(wrapper.find('select').at(0)
      .getDOMNode().value).toBe('2');
  });

  test('Call onClick', () => {
    const wrapper = mount(selectList);
    const select = () => wrapper.find('select').at(1);
    select().simulate('click');
    expect(onClick).toHaveProperty('callCount', 1);
  });

  test('toMatchSnapshot', () => {
    const tree = renderer
      .create(selectList)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
