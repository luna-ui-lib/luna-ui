import React from 'react';
import renderer from 'react-test-renderer';

import Link from './index';

describe('<Link />', () => {
  const component = <Link href="http://example.de">My Link</Link>;

  test('toMatchSnapshot', () => {
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
