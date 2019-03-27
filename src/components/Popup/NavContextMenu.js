import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import NavMenu from './NavMenu';

/* eslint-disable no-extra-parens, indent, space-infix-ops */

/**
 * NavContextMenu Component.
 * ```html
 *  <Popup.NavContextMenu id="2" separator kind="bg" text="EN">
 *    ...
 *  </Popup.NavContextMenu>
 * ```
 */
class NavContextMenuComponent extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = { isPopupMenuActive: props.active };
  }

  onClickOutside() {
    this.setState({ isPopupMenuActive: false });
  }

  toggleMenu() {
    this.setState((prevState) => ({
      isPopupMenuActive: !prevState.isPopupMenuActive
    }));
  }

  render() {
    const { separator, icon, text, className } = this.props;
    const CtxFontAwesomeIconLeft = styled(FontAwesomeIcon)`
      margin-right: 10px;
      vertical-align: -0.19em;
    `;

    const CtxFontAwesomeIconRight = styled(FontAwesomeIcon)`
      ${text ? 'margin-left: 10px;' : null}
      ${(props) => `color: ${props.theme.popup.navMenu.toggleIcon}`}
    `;

    const NavContextMenu = styled.div`
      cursor: pointer;
      position: relative;
      display: inline-block;
      transition: all .25s linear;

      ${(props) => (separator ?
          `border-right: 1px solid ${props.theme.popup.navMenu.separator};`:
          'border-right: 1px solid transparent;')
}

      ${(props) => (this.state.isPopupMenuActive ?
        `background-color: ${props.theme.popup.navMenu.activeBg};`:
        'background-color: transparent')
}
    `;

    const NavContextMenuButton = styled.button`
      width: 100%;
      height: 40px;
      border: none;
      outline: none;
      z-index: 99999;
      padding: 0 10px;
      cursor: pointer;
      font-size: 12px;
      position: relative;

      ${(props) => (this.state.isPopupMenuActive ?
        `background-color: ${props.theme.popup.navMenu.activeBg};`:
        'background-color: transparent;')
}
    `;

    const customIconComponent = icon && <CtxFontAwesomeIconLeft icon={icon} fixedWidth />;

    const toggleIconComponent = this.state.isPopupMenuActive ?
      <CtxFontAwesomeIconRight icon="caret-up" fixedWidth /> :
      <CtxFontAwesomeIconRight icon="caret-down" fixedWidth />;

    return (
      <NavContextMenu className={className} {...this.props.config} onClick={this.toggleMenu.bind(this)}>
        <NavContextMenuButton>
          {customIconComponent} {text} {toggleIconComponent}
        </NavContextMenuButton>
        <NavMenu
          isLastItem={this.props.lastItem}
          active={this.state.isPopupMenuActive}
          onClickOutside={this.onClickOutside.bind(this)}
        >{this.props.children}</NavMenu>
      </NavContextMenu>
    );
  }
}

NavContextMenuComponent.propTypes = {
  active: PropTypes.bool,
  lastItem: PropTypes.bool,
  text: PropTypes.node,
  separator: PropTypes.bool,
  icon: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  config: PropTypes.object
};

NavContextMenuComponent.defaultProps = {
  active: false,
  lastItem: false,
  separator: false,
  icon: undefined,
  text: undefined,
  children: null,
  config: null,
  className: ''
};

export default NavContextMenuComponent;
