import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * NavbarContent component.
 * E.g.:
 * ```html
 * <Navbar.Content />
 * ```
 */
class NavbarContentComponent extends React.PureComponent {
  render() {
    const { className } = this.props;

    const NavbarContent = styled.div`
      display: inline-block;
    `;

    return <NavbarContent className={className}>{this.props.children}</NavbarContent>;
  }
}

NavbarContentComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

NavbarContentComponent.defaultProps = {
  children: null,
  className: ''
};

export default NavbarContentComponent;
