import React from 'react';
import renderer from 'react-test-renderer';

import Image from './index';

describe('<Image />', () => {
  test('toMatchSnapshot: no attrs', () => {
    const component = <Image width="150px" height="150px" alt="Luna" src="./luna.jpg" />;
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('toMatchSnapshot: with attrs', () => {
    const component = <Image fit round shadow width="150px" height="150px" alt="Luna" src="./luna.jpg" />;

    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
