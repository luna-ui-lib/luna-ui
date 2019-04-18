import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'

import { Theme, defaultTheme, Margin, Area, Paginator } from '../src'

class PaginatorStory extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      paginationInfo : {
        size: 3,
        last: false,
        first: true,
        number: 0,
        totalPages: 3,
        totalElements: 25,
        numberOfElements: 44
      }
    }
  }

  goToPage(page) {
    this.setState({'paginationInfo': {
      size: 3,
      last: (page + 1) === this.state.paginationInfo.totalPages,
      first: page === 0,
      number: page,
      totalPages: 3,
      totalElements: 25,
      numberOfElements: 44
    }})
  }

  render() {
    return (
      <Theme theme={defaultTheme}>
        <Margin selector="> *" value="100px 200px">
          <Area kind="bg">
            <Paginator onGoToPage={this.goToPage.bind(this)} paginationInfo={this.state.paginationInfo}/>
          </Area>
        </Margin>
      </Theme>
    )
  }
}

storiesOf('Paginator', module)
  .add('component', () => <PaginatorStory />)
