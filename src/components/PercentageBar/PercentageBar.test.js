import React from 'react'
import renderer from 'react-test-renderer'

import PercentageBar from './index'

describe('<PercentageBar />', () => {

  let component

  beforeEach(() => {
    const props = {
      fontSize: 12,
      padding: '3px',
      width: 300,
      values: [
        {
          amount: 745,
          color: '#b2e2bf'
        },
        {
          amount: 11036,
          color: '#c09be0'
        },
        {
          amount: 5160,
          color: '#c1e8f6'
        },
        {
          amount: 354,
          color: '#ffb61f'
        }
      ]
    }

    component = (
      <PercentageBar {...props} />
    )
  })

  test('toMatchSnapshot', () => {
    const tree = renderer
      .create(component)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

})
