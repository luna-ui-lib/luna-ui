import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'

import { Theme, defaultTheme, Collapsible, Margin, Area } from '../src'

const autocompleteList = [
  'bruno@bruno.de',
  'rodolfo@rodolfo.de',
  'sebastian@sebastian.de'
]

storiesOf('Collapsible', module)
  .add('component', () => {
    return (
      <Theme theme={defaultTheme}>
        <Margin selector="> div" value="20px">
          <div>
            <Area kind="bg">
              <Collapsible collapsed text="Labels">
                <ul>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                </ul>
              </Collapsible>
              <Collapsible text="Roles">
                <ul>
                  <li>First item</li>
                  <li>Second item</li>
                  <li>Third item</li>
                </ul>
              </Collapsible>
            </Area>
          </div>
        </Margin>
      </Theme>
    )
  })