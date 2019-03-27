import React from 'react';
import renderer from 'react-test-renderer';

import Margin from './index.js';

describe('<Margin />', () => {
  const content =
    <h1>Snap Test Rocks</h1>
  ;

  const component =
    <Margin>{content}</Margin>;

  const componentSelector =
    <Margin selector="h1">{content}</Margin>;

  const componentValue =
    <Margin value="10px 20px 20px 30px">{content}</Margin>;

  const componentSelectAndValue =
    <Margin selector="h1" value="10px 20px 20px 30px">{content}</Margin>;

  test('toMatchSnapshot', () => {
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: Selector', () => {
    const tree = renderer
      .create(componentSelector)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: Value', () => {
    const tree = renderer
      .create(componentValue)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: Selector and Value', () => {
    const tree = renderer
      .create(componentSelectAndValue)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
