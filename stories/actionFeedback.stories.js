import React from 'react'
import { storiesOf } from '@storybook/react'

import { Theme, ActionFeedback, Margin, defaultTheme } from '../src'

storiesOf('ActionFeedback', module)
  .add('component', () => {
    return (
      <Theme theme={defaultTheme}>
        <Margin selector="> div" value="20px">
          <div>
            <ActionFeedback>Lorem Ipsum is simply dummy text of the printing and .<strong> type setting industry.</strong></ActionFeedback>
          </div>
        </Margin>
      </Theme>
    )
  })