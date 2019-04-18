import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'

import { Theme, defaultTheme, Margin, Area, Button, Modal } from '../src'

class ModalStory extends PureComponent {
  constructor(props) {
    super(props)

    this.state = { activeModal : false, activeModal2 : false }
  }

  toggleModal(state) {
    this.setState({activeModal: state});
  }

  toggleModal2(state) {
    this.setState({activeModal2: state});
  }

  render() {
    return (
      <Theme theme={defaultTheme}>
        <Margin selector="> *" value="100px 200px">
          <Area kind="bg">
            <Margin value="5px">
              <Button size="medium" kind="default" config={{ onClick: () => this.toggleModal(true)}}>Show Modal 1</Button>
              <Button size="medium" kind="primary" config={{ onClick: () => this.toggleModal2(true)}}>Show Modal 2</Button>
            </Margin>
            { (this.state.activeModal) ? <Modal active={this.state.activeModal} onSetModalAsDisabled={() => this.toggleModal(false)}><h3>My Modal 1</h3></Modal> : null }
            { (this.state.activeModal2) ? <Modal active={this.state.activeModal2} onSetModalAsDisabled={() => this.toggleModal2(false)}><h3>My Modal2</h3></Modal> : null }
          </Area>
        </Margin>
      </Theme>
    )
  }
}

storiesOf('Modal', module)
  .add('component', () => <ModalStory />)
