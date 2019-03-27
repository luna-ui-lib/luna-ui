import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import hex2Rgba from '../../ultils/hex2Rgba';

/**
 * Navbar component.
 * E.g.:
 * ```html
 * <Navbar fixed />
 * ```
 */
class NavbarComponent extends React.PureComponent {
  render() {
    const { fixed, className } = this.props;

    const Navbar = styled.div`
      width: 100%;
      height: 42px;
      z-index: 1000;
      ${fixed ? `position: fixed;` : ''}
      transition: background-color .15s linear;
      border-bottom: 1px solid ${(props) => props.theme.navbar.border};
      background-color: ${(props) => hex2Rgba(props.theme.navbar.bg, 0.8)};
      &:hover {
        background-color: ${(props) => hex2Rgba(props.theme.navbar.bg, 1)};
      }
    `;

    return (
      <Navbar className={className}>
        {this.props.children}
      </Navbar>
    );
  }
}

NavbarComponent.propTypes = {
  children: PropTypes.node,
  /**
   * set navbar position to fixed.
   */
  fixed: PropTypes.bool,
  className: PropTypes.string
};

NavbarComponent.defaultProps = {
  children: null,
  fixed: false,
  className: ''
};

export default NavbarComponent;
