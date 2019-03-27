import React from 'react';
import renderer from 'react-test-renderer';

import Hint from './index';

describe('<Hint />', () => {
  const component = <Hint>Address</Hint>;

  test('toMatchSnapshot', () => {
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
