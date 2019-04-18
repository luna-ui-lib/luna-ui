import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import Menu from './Menu';

class ContextMenuComponent extends React.Component {
  constructor(props) {
    super(props);

    this.firstLoad = true;
    this.state = { active: props.active };
  }

  onClickOutside() {
    if (!this.state.active) {
      return;
    }
    this.toggleMenu();
  }

  toggleMenu() {
    this.setState((prevState) => ({
      active: !prevState.active
    }));

    this.firstLoad = !this.firstLoad;
  }

  _getAnimation(inverse, props) {
    const inactiveBackground = `${!inverse ?
      props.theme.popup.contextMenu.inactiveBg :
      props.theme.popup.contextMenu.activeBg}
    `;

    const activeBackground = `${!inverse ?
      props.theme.popup.contextMenu.activeBg :
      props.theme.popup.contextMenu.inactiveBg}
    `;

    const backgroundAnimationKeyframes = keyframes`
      from {
        color: ${props.theme.popup.contextMenu.inactiveIcon};
        background-color: ${inactiveBackground};
      }

      to {
        color: ${props.theme.popup.contextMenu.activeIcon};
        background-color: ${activeBackground};
      }
    `;

    if (!this.state.active && this.firstLoad) {
      return `background-color: ${inactiveBackground}; color: ${props.theme.popup.contextMenu.inactiveIcon};`;
    } else if (this.state.active && !this.firstLoad) {
      return `animation: ${backgroundAnimationKeyframes} .25s ease-in;`;
    }
    return `animation: ${backgroundAnimationKeyframes} .25s reverse ease-in; `;
  }

  render() {
    const { inverse, className } = this.props;

    const CtxFontAwesomeIcon = styled(FontAwesomeIcon)`
      display: block;
      margin: 2px 0px;
      font-size: 5px;
    `;

    const ContextMenu = styled.div`
      cursor: pointer;
      border-radius: 2px;
      position: relative;
      display: inline-block;
    `;

    const ContextMenuButton = styled.button`
      padding: 2px 6px;
      border: none;
      outline: none;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      font-weight: bold;
      border-radius: 2px;

      ${(props) => this._getAnimation(inverse, props)}
      animation-fill-mode: forwards;
    `;

    return (
      <ContextMenu className={className} onClick={this.toggleMenu.bind(this)}>
        <ContextMenuButton>
          <CtxFontAwesomeIcon icon="circle" />
          <CtxFontAwesomeIcon icon="circle" />
          <CtxFontAwesomeIcon icon="circle" />
        </ContextMenuButton>
        <Menu active={this.state.active} onClickOutside={this.onClickOutside.bind(this)}>{this.props.children}</Menu>
      </ContextMenu>
    );
  }
}

ContextMenuComponent.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  inverse: PropTypes.bool,
  className: PropTypes.string
};

ContextMenuComponent.defaultProps = {
  active: false,
  inverse: false,
  className: ''
};

export default ContextMenuComponent;
