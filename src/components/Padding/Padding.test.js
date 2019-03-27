import React from 'react';
import renderer from 'react-test-renderer';

import Padding from './index.js';

describe('<Padding />', () => {
  const content =
    <h1>Snap Test Rocks</h1>
  ;

  const component =
    <Padding>{content}</Padding>;

  const componentSelector =
    <Padding selector="h1">{content}</Padding>;

  const componentValue =
    <Padding value="10px 20px 20px 30px">{content}</Padding>;

  const componentSelectAndValue =
    <Padding selector="h1" value="10px 20px 20px 30px">{content}</Padding>;

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
