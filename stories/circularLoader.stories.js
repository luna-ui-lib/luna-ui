import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, radios, select } from '@storybook/addon-knobs'

import { Theme, Margin, CircularLoader, defaultTheme } from '../src'

storiesOf('CircularLoder', module)
  .addDecorator(withKnobs)
  .add('component', () => {
    const typeOptions = {
      Emit: 'emit'
    }

    const typeValue = radios('Type', typeOptions, 'emit')

    const kindOptions = {
      Default: 'default',
      Primary: 'primary',
      Success: 'success',
      Danger: 'danger',
      Warning: 'warning'
    }

    const kindValue = select('Kind', kindOptions, 'default')

    const sizeValue = text('Size', '100')

    const borderValue = text('Border', '1')

    return (
      <Theme theme={defaultTheme}>
        <Margin selector="> *" value="50px">
          <CircularLoader
            type={typeValue}
            kind={kindValue}
            size={sizeValue}
            border={borderValue}
          />
        </Margin>
      </Theme>
    )
  })