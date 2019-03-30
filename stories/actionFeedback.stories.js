import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { Theme, ActionFeedback, defaultTheme } from '../src'

storiesOf('ActionFeedback', module)
  .add('component', () => {
    return (
      <Theme theme={defaultTheme}>
        <ActionFeedback>Lorem Ipsum is simply dummy text of the printing and <strong> typesetting industry.</strong></ActionFeedback>
      </Theme>
    )
  })