
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

import { Theme, Margin, Image, defaultTheme } from '../src'

storiesOf('Image', module)
  .addDecorator(withKnobs)
  .add('component', () => {
    return (
      <Theme theme={defaultTheme}>
        <Margin selector="> *" value="50px">
          <Image
            height={`${text('Height', '150')}px`}
            width={`${text('Width', '150')}px`}
            round={boolean('Round', true)}
            fit={boolean('Fit', true)}
            shadow={boolean('Shadow', true)}
            src="https://res.cloudinary.com/teepublic/image/private/s--UvSUNgzW--/b_rgb:fffffe,t_Heather%20Preview/c_lpad,f_jpg,h_630,q_90,w_1200/v1494469473/production/designs/1595608_1.jpg"
          />
        </Margin>
      </Theme>
    )
  })