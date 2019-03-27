import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import ActionFeedback from './index';

describe('<ActionFeedback />', () => {
  const component = <ActionFeedback>Lebron James has scored!</ActionFeedback>;
  test('ActionFeedback', () => {
    const feedback = shallow(component);

    expect(feedback.render().text()).toEqual('Lebron James has scored!');
  });

  test('toMatchSnapshot', () => {
    const tree = renderer
      .create(component)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
