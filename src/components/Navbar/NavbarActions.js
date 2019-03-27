import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * NavbarActions component.
 * E.g.:
 * ```html
 * <Navbar.Actions />
 * ```
 */
class NavbarActionsComponent extends React.PureComponent {
  render() {
    const { className } = this.props;

    const NavbarActions = styled.div`
      float: right;
    `;

    return <NavbarActions className={className}>{this.props.children}</NavbarActions>;
  }
}

NavbarActionsComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

NavbarActionsComponent.defaultProps = {
  children: null,
  className: ''
};

export default NavbarActionsComponent;
