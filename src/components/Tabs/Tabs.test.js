import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import theme from '../../config/defaultTheme';
import ThemeProvider from '../Theme/index';

import Tabs from './index';

describe('<Tabs />', () => {
  let component;
  let onChange;

  beforeEach(() => {
    onChange = sinon.spy();
    component =
      <ThemeProvider theme={theme}>
        <React.Fragment>
          <Tabs
            value="selection1"
            onChange={onChange}
            tabs={{
              selection1: <span>Selection 1</span>,
              selection2: <span>Selection 2</span>,
              selection3: <span>Selection 3</span>,
              selection4: <span>Selection 4</span>,
              selection5: <span>Selection 5</span>,
              selection6: <span>Selection 6</span>
            }}
          />
          <Tabs.SelectView
            value="selection1"
            views={{
              selection1: <div>Content for tab 1</div>,
              selection2: <div>Content for tab 2</div>,
              selection3: <div>Content for tab 3</div>,
              selection4: <div>Content for tab 4</div>,
              selection5: <div>Content for tab 5</div>,
              selection6: <div>Content for tab 6</div>
            }}
          />
        </React.Fragment>
      </ThemeProvider>
    ;
  });

  test('HandleClick', () => {
    const wrapper = mount(component);
    wrapper.find('#selection3').at(0)
      .simulate('click');
    expect(onChange).toHaveProperty('callCount', 1);
  });

  test('toMatchSnapshot', () => {
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
