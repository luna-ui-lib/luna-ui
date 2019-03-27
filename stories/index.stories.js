import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, radios, select } from '@storybook/addon-knobs'

import { Theme, defaultTheme, Margin, Button } from '../src';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .add('component', () => {
   const kindOptions = {
      Primary: 'primary',
      Default: 'default',
      Success: 'success',
      Danger: 'danger',
      Warning: 'warning'
    };
    const kindValue = radios('Kind', kindOptions, 'primary');

    const sizeOptions = {
      Small: 'small',
      Medium: 'medium',
      Large: 'large'
    };
    const sizeValue = select('Size', sizeOptions, 'medium');

    return (
      <Theme theme={defaultTheme}>
        <Margin selector="> *" value="5px">
          <Button
            size={sizeValue}
            kind={kindValue}
            promise={boolean('Promise', false)}
            config={{
              onClick: action('Clicked'),
              disabled: boolean('Disabled', false)
            }}
          >
            {text('Text', 'Hi There!')}
          </Button>
        </Margin>
      </Theme>
    )
  });
