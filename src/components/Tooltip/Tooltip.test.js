import React from 'react';
import renderer from 'react-test-renderer';

import Tooltip from './index';

describe('<Tooltip />', () => {
  const getTooltip = (placement) => {
    return (
      <Tooltip placement={placement} trigger="hover" content={<span>tooltip content</span>}>
        <p> My tooltip test</p>
      </Tooltip>
    );
  };

  test('toMatchSnapshot: Placement -> top', () => {
    const tree = renderer
      .create(getTooltip('top'))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: Placement -> bottom', () => {
    const tree = renderer
      .create(getTooltip('bottom'))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: Placement -> left', () => {
    const tree = renderer
      .create(getTooltip('left'))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: Placement -> right', () => {
    const tree = renderer
      .create(getTooltip('right'))
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
