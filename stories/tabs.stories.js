import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'

import { Theme, defaultTheme, Margin, Area, Tabs } from '../src'

class TabsStory extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      value: 'selection1'
    }
  }

  render () {
    return (
      <Theme theme={defaultTheme}>
        <Margin selector="> *" value="100px 200px">
          <Area kind="bg">
            <Tabs
              value={this.state.value}
              onChange={(value) => { this.setState({ value }) }}
              tabs={{
                selection1: <span>Selection 1</span>,
                selection2: <span>Selection 2</span>,
                selection3: <span>Selection 3</span>
              }}
            />
            <Tabs.SelectView
              value={this.state.value}
              views={{
                selection1: <Area>Content for tab 1</Area>,
                selection2: <Area>Content for tab 2</Area>,
                selection3: <Area>Content for tab 3</Area>
              }}
            />
          </Area>
        </Margin>
      </Theme>
    )
  }
};


storiesOf('Tabs', module)
  .add('component', () => <TabsStory />)
