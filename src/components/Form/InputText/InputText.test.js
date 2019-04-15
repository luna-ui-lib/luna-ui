import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import theme from '../../../config/defaultTheme';
import ThemeProvider from '../../Theme/index';

import InputText from './index';

const autocompleteList = [
  'bruno@outfittery.de',
  'rodolfo@outfittery.de',
  'sebastian@outfittery.de'
];

describe('<InputText />', () => {
  let inputList;
  let onChange;

  beforeEach(() => {
    onChange = sinon.spy();

    inputList =
      <ThemeProvider theme={theme}>
        <InputText
          kind="warning"
          config={{
            placeholder: 'Do not sleep more then 3h a day. :P',
            onChange
          }}
          icon="bug"
        />
        <InputText
          kind="warning"
        />
        <InputText
          autocompleteList={autocompleteList}
        />
      </ThemeProvider>;
  });

  test('Check placeholder value', () => {
    const wrapper = mount(inputList);
    expect(wrapper.find('input').at(0)
      .getDOMNode().placeholder).toBe('Do not sleep more then 3h a day. :P');
  });

  test('Call onChange', () => {
    const wrapper = mount(inputList);
    wrapper.find('input').at(0)
      .simulate('change');
    expect(onChange).toHaveProperty('callCount', 1);
  });

  test('toMatchSnapshot', () => {
    const tree = renderer
      .create(inputList)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
