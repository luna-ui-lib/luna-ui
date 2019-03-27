import React from 'react';
import renderer from 'react-test-renderer';

import theme from '../../config/defaultTheme';
import ThemeProvider from '../Theme/index';

import Table from './index';

describe('<Table />', () => {
  let lightTable;
  let transparentTable;

  beforeEach(() => {
    const header =
      <Table.Header>
        <Table.Row>
          <Table.Cell>Example</Table.Cell>
        </Table.Row>
      </Table.Header>;

    const body =
      <Table.Body>
        <Table.Row>
          <Table.Cell>Example</Table.Cell>
        </Table.Row>
      </Table.Body>;

    lightTable =
      <ThemeProvider theme={theme}>
        <Table kind="light">
          {header}
          {body}
        </Table>
      </ThemeProvider>;

    transparentTable =
      <ThemeProvider theme={theme}>
        <Table kind="transparent">
          {header}
          {body}
        </Table>
      </ThemeProvider>;
  });

  test('toMatchSnapshot: Light', () => {
    const tree = renderer
      .create(lightTable)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: Transparent', () => {
    const tree = renderer
      .create(transparentTable)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
