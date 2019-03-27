import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

/* eslint-disable no-empty-function */
/**
 * MenuItem Component.
 * ```html
 *  <Popup.NavContextMenu id="2" separator kind="bg" text="EN">
 *    <Popup.MenuItem id="mi2.1">EN</Popup.MenuItem>
 *    <Popup.MenuItem id="mi2.2">DE</Popup.MenuItem>
 *  </Popup.NavContextMenu>
 * ```
 */
class MenuItemComponent extends React.PureComponent {
  render() {
    const { className } = this.props;

    const MenuItem = styled.li`
      transition: all 0.25s linear;
      padding: 8px 30px 8px 14px;
      font-size: 14px;
      line-height: 1.79;
      text-align: left;
      color: #333333;
      cursor: pointer;
      &:hover {
        background-color: #f0f0f0;
      }
    `;
    return (
      <MenuItem className={className} onClick={this.props.onClick}>{this.props.children}</MenuItem>
    );
  }
}

MenuItemComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

MenuItemComponent.defaultProps = {
  children: null,
  className: '',
  onClick: () => {}
};

export default MenuItemComponent;
