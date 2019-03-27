import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';

import { Theme, defaultTheme, Margin, Tooltip, Button } from '../src';

storiesOf('Tooltips', module)
  .addDecorator(withKnobs)
  .add('component', () => {
   const placementOptions = {
      Top: 'top',
      Right: 'right',
      Bottom: 'bottom',
      Left: 'left'
    };
    const placementValue = radios('Placement', placementOptions, 'top');

    const TooltipContent = <span>
      <strong> Reason: <br/></strong>
      other: Mussum Ipsum, cacilds vidis litro abertis.
    </span>

    return (
      <Theme theme={defaultTheme}>
        <Margin selector="> *" value="100px 200px">
          <Tooltip placement={placementValue} trigger="hover" content={TooltipContent}>
            <Button size="small" kind="primary">{placementValue}</Button>
          </Tooltip>
        </Margin>
      </Theme>
    )
  });
