import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import theme from '../../../config/defaultTheme';
import ThemeProvider from '../../Theme/index';

import TextArea from './index';

describe('<TextArea />', () => {
  let textAreaList;
  let onClick;

  beforeEach(() => {
    onClick = sinon.spy();

    textAreaList =
      <ThemeProvider theme={theme}>
        <TextArea kind="default" height="80px" resize config={{ defaultValue: 'Bla is blu when blu is bla' }} />
        <TextArea kind="default" height="80px" resize config={{ onClick }} />
      </ThemeProvider>;
  });

  test('Check options deafult value', () => {
    const wrapper = mount(textAreaList);
    expect(wrapper.find('textarea').at(0)
      .getDOMNode().value).toBe('Bla is blu when blu is bla');
  });

  test('Call onClick', () => {
    const wrapper = mount(textAreaList);
    const textarea = () => wrapper.find('textarea').at(1);
    textarea().simulate('click');
    expect(onClick).toHaveProperty('callCount', 1);
  });

  test('toMatchSnapshot', () => {
    const tree = renderer
      .create(textAreaList)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
