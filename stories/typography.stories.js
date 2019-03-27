import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, radios } from '@storybook/addon-knobs'

import { Theme, defaultTheme, Hint, Link, Margin } from '../src';

storiesOf('Typography', module)
  .addDecorator(withKnobs)
  .add('text', () => {
    return (
      <Theme theme={defaultTheme}>
        <Margin selector="> *" value="20px">
          <div>
            <h1>Default H1</h1>
            <h2>Default H2</h2>
            <h3>Default H3</h3>
            <h4>Default H4</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <Link href="#">My link</Link> <br />
            <Hint>My text hint</Hint> <br />
            <strong><Hint>My BOLD text hint</Hint></strong>
          </div>
        </Margin>
      </Theme>
    )
  });