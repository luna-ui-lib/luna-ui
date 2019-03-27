import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MenuAnimation } from './MenuAnimationAnnotation';

let fistLoad = true;

/**
 * NavMenu (Subcomponent) Component.
 * ```html
 *  <NavMenu active={this.state.isPopupMenuActive}
 *   onClickOutside={this.onClickOutside.bind(this)}>{this.props.children}</NavMenu>
 * ```
 */
@MenuAnimation
class NavMenuComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { active: props.active };
    this.isLastItem = props.isLastItem;
  }

  // eslint-disable-next-line class-methods-use-this
  onClick(event) {
    if (event) {
      event.stopPropagation();
    }
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
    const { className } = this.props;

    const NavMenu = styled.ul`
      width: 100%;
      z-index: 999;
      min-width: 120px;
      list-style: none;
      position: absolute;
      border-radius: 2px;
      border: solid 1px #d5d5d5;
      background-color: #ffffff;

      ${this.isLastItem ? 'right: 0;' : ''}

      // animation
      opacity: 0;
      visibility: hidden;
      transform: translate(0, -30px);

      &.elementIn {
        ${this._getAnimation('navMenu')}
        animation-fill-mode: forwards;
      }

      &.elementOut {
        ${this._getAnimation('navMenu', true)}
        animation-fill-mode: forwards;
      }

    `;

    // eslint-disable-next-line no-return-assign
    return <NavMenu
      innerRef={(comp) => this.animatedElement = comp}
      className={`${this._getElementAnimationClass(this.animatedElement, fistLoad)} ${className}`}
      onClick={this.onClick.bind(this)}
    >{this.props.children}</NavMenu>;
  }
}

NavMenuComponent.propTypes = {
  active: PropTypes.bool,
  isLastItem: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  onClickOutside: PropTypes.func.isRequired
};

NavMenuComponent.defaultProps = {
  active: false,
  isLastItem: false,
  children: null,
  className: ''
};

export default NavMenuComponent;
