import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, color, number } from '@storybook/addon-knobs'

import { Theme, defaultTheme, Area, Margin, PercentageCircle, PercentageBar } from '../src'

storiesOf('Graphs', module)
  .addDecorator(withKnobs)
  .add('Circle', () => {
    return (
      <Theme theme={defaultTheme}>
        <Margin selector="> *" value="20px">
          <div>
            <Area kind="bg">
              <PercentageCircle
                value={number('Value', 2.5)}
                size={number('Size', 100)}
                lineWidth={number('LineWidth', 8)}
                color={color('Color', '#ffb61f')}
                contrastColor={color('ContrastColor', '#f0f0f0')}
              />
            </Area>
          </div>
        </Margin>
      </Theme>
    )
  })
  .add('Bars', () => {
    const elementsGroup = 'Elements'
    const propsGroup = 'Props'

    const values = [
      {
        amount: number('Element 1 value', 745, {}, elementsGroup),
        color: color('Element 1 color', '#b2e2bf', elementsGroup)
      },
      {
        amount: number('Element 2 value', 11036, {}, elementsGroup),
        color: color('Element 2 color', '#c09be0', elementsGroup)
      },
      {
        amount: number('Element 3 value', 5160, {}, elementsGroup),
        color: color('Element 3 color', '#c1e8f6', elementsGroup)
      },
      {
        amount: number('Element 4 value', 354, {}, elementsGroup),
        color: color('Element 4 color', '#ffb61f', elementsGroup)
      }
    ]

    return (
      <Theme theme={defaultTheme}>
        <Margin selector="> *" value="20px">
          <div>
            <Area kind="bg">
              <PercentageBar
                values={values}
                width={number('Width', 350, {}, propsGroup)}
                fontSize={number('FontSize', 12, {}, propsGroup)}
                padding={text('Padding', '3px', propsGroup)}
              />
            </Area>
          </div>
        </Margin>
      </Theme>
    )
  })