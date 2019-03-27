import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Theme from '../../config/defaultTheme';
import ThemeProvider from '../Theme/index';

import Paginator from './index';

describe('<Paginator />', () => {
  let component; let onGoToPage; let paginationInfo;
  const generatePaginationInfo = (size, last, first, number, totalPages, totalElements, numberOfElements) => {
    return { size, last, first, number, totalPages, totalElements, numberOfElements };
  };

  describe('NextPage and Previous page disabled', () => {
    beforeEach(() => {
      onGoToPage = jest.fn();
      paginationInfo = generatePaginationInfo(3, false, true, 0, 3, 25, 25);

      component =
        <ThemeProvider theme={Theme}>
          <Paginator onGoToPage={onGoToPage} paginationInfo={paginationInfo} />
        </ThemeProvider>;
    });

    test('HandleClick: NextPage', () => {
      const wrapper = mount(component);
      wrapper.find('button').at(1)
        .simulate('click');

      expect(onGoToPage).toBeCalledWith(1);
    });

    test('HandleClick: Previous page disabled', () => {
      const wrapper = mount(component);

      wrapper.find('button').at(0)
        .simulate('click');
      expect(onGoToPage).not.toBeCalled();
    });

    test('toMatchSnapshot', () => {
      const tree = renderer
        .create(component)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('PreviousPage and Next page disabled', () => {
    beforeEach(() => {
      onGoToPage = jest.fn();
      paginationInfo = generatePaginationInfo(3, true, false, 3, 3, 25, 25);

      component =
        <ThemeProvider theme={Theme}>
          <Paginator onGoToPage={onGoToPage} paginationInfo={paginationInfo} />
        </ThemeProvider>;
    });

    test('HandleClick: PreviousPage', () => {
      const wrapper = mount(component);
      wrapper.find('button').at(0)
        .simulate('click');

      expect(onGoToPage).toBeCalledWith(2);
    });

    test('HandleClick: NextPage page disabled', () => {
      const wrapper = mount(component);

      wrapper.find('button').at(1)
        .simulate('click');
      expect(onGoToPage).not.toBeCalled();
    });

    test('toMatchSnapshot', () => {
      const tree = renderer
        .create(component)
        .toJSON();

      expect(tree).toMatchSnapshot();
    });
  });

  describe('TotalPages equal 0', () => {
    beforeEach(() => {
      onGoToPage = jest.fn();
      paginationInfo = generatePaginationInfo(0, true, true, 0, 0, 0, 0);

      component =
        <ThemeProvider theme={Theme}>
          <Paginator onGoToPage={onGoToPage} paginationInfo={paginationInfo} />
        </ThemeProvider>;
    });

    test('Component should not load', () => {
      const wrapper = mount(component);

      expect(wrapper.html()).toBe('<div></div>');
    });
  });
});
