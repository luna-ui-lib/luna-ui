import React from 'react'
import { mount } from 'enzyme'
import renderer from 'react-test-renderer'

import theme from '../../config/defaultTheme'
import ThemeProvider from '../Theme/index'

import PercentageCircle from './index'

describe('<PercentageCircle />', () => {

  let component

  beforeEach(() => {
    const props = {
      value: 2.5,
      size: 100,
      lineWidth: 8,
      color: '#ffb61f',
      contrastColor: '#f0f0f0'
    }


    component = (
      <PercentageCircle {...props} />
    )
  })

  it('allows us to set value prop', () => {
    const wrapper = mount(component)
    expect(wrapper.props().value).toBe(2.5)
    wrapper.setProps({ value: 5.3 })
    expect(wrapper.props().value).toBe(5.3)
  })

  it('allows us to set value size', () => {
    const wrapper = mount(component)
    expect(wrapper.props().size).toBe(100)
    wrapper.setProps({ size: 200 })
    expect(wrapper.props().size).toBe(200)
  })

  it('allows us to set value lineWidth', () => {
    const wrapper = mount(component)
    expect(wrapper.props().lineWidth).toBe(8)
    wrapper.setProps({ lineWidth: 9 })
    expect(wrapper.props().lineWidth).toBe(9)
  })

  it('allows us to set value color', () => {
    const wrapper = mount(component)
    expect(wrapper.props().color).toBe('#ffb61f')
    wrapper.setProps({ color: '#00ff00' })
    expect(wrapper.props().color).toBe('#00ff00')
  })

  it('allows us to set value lineWidth', () => {
    const wrapper = mount(component)
    expect(wrapper.props().contrastColor).toBe('#f0f0f0')
    wrapper.setProps({ contrastColor: '#00ff00' })
    expect(wrapper.props().contrastColor).toBe('#00ff00')
  })

  test('toMatchSnapshot', () => {
    const tree = renderer
      .create(component)
      .toJSON()

    expect(tree).toMatchSnapshot()
  })

})
