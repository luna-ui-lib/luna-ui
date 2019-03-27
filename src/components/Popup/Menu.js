import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MenuAnimation } from './MenuAnimationAnnotation';

let fistLoad = true;

@MenuAnimation
class MenuComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { active: props.active };
  }

  componentDidMount() {
    fistLoad = false;
    // eslint-disable-next-line no-undef
    document.addEventListener('click', this.props.onClickOutside);
  }
  componentWillUnmount() {
    // eslint-disable-next-line no-undef
    document.removeEventListener('click', this.props.onClickOutside);
  }

  render() {
    const Menu = styled.ul`
      width: 100%;
      min-width: 120px;
      z-index: 999;
      list-style: none;
      position: absolute;
      border-radius: 2px;
      background-color: #ffffff;
      border: solid 1px #d5d5d5;

      // animation
      opacity: 0;
      visibility: hidden;
      transform: translate(-115px, -30px);

      &.elementIn {
        ${this._getAnimation('contextMenu')}
        animation-fill-mode: forwards;
      }

      &.elementOut {
        ${this._getAnimation('contextMenu', true)}
        animation-fill-mode: forwards;
      }
    `;

    /* eslint-disable no-return-assign */
    return <Menu
      innerRef={(comp) => this.animatedElement = comp}
      className={this._getElementAnimationClass(this.animatedElement, fistLoad)}
    >{this.props.children}
    </Menu>;
  }
}

MenuComponent.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  onClickOutside: PropTypes.func.isRequired
};

MenuComponent.defaultProps = {
  active: false
};

export default MenuComponent;
