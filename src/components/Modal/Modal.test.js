import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import theme from '../../config/defaultTheme';
import ThemeProvider from '../Theme/index';

import Modal from './index.js';

describe('<Modal />', () => {
  let onSetModalAsDisabled; let activeModal; let deactiveModal;

  beforeEach(() => {
    onSetModalAsDisabled = sinon.spy();

    activeModal =
      <ThemeProvider theme={theme}>
        <Modal active={true} onSetModalAsDisabled={onSetModalAsDisabled}><h3>My Modal2</h3></Modal>
      </ThemeProvider>;

    deactiveModal =
      <ThemeProvider theme={theme}>
        <Modal active={false} onSetModalAsDisabled={onSetModalAsDisabled}><h3>My Modal 1</h3></Modal>
      </ThemeProvider>;
  });

  test('onSetModalAsDisabled', () => {
    jest.useFakeTimers();
    const wrapper = mount(activeModal);
    wrapper.find('button').at(0)
      .simulate('click');
    jest.runAllTimers();
    expect(window.setTimeout).toHaveBeenCalledTimes(1);
    expect(onSetModalAsDisabled).toHaveProperty('callCount', 1);
  });

  test('toMatchSnapshot: Active Modal', () => {
    const tree = renderer
      .create(activeModal)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: Deactive Modal', () => {
    const tree = renderer
      .create(deactiveModal)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
