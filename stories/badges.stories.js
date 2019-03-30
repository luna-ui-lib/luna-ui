import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs'

import { Theme, defaultTheme, Badge, Margin } from '../src'

storiesOf('Badges', module)
  .addDecorator(withKnobs)
  .add('labels', () => {
    const kindOptions = {
      Address: 'address',
      Payment: 'payment',
      Voucher: 'voucher',
      Wishes: 'wishes',
      General: 'general',
      Nogo: 'nogo',
      Customer: 'customer'
    }

    const kindValue = radios('Kind', kindOptions, 'address')

    return (
      <Theme theme={defaultTheme}>
        <Margin selector="> *" value="10px">
          <Badge
            label={boolean('With Icon', false)}
            active={boolean('Active', true)}
            kind={kindValue}
            config={{
              onClick: action('clicked'),
              disabled: boolean('Disabled', false)
            }}
          >
            {text('Text', 'Hi There!')}
          </Badge>
        </Margin>
      </Theme>
    )
  })