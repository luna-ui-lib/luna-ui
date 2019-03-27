import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

import hex2Rgba from '../../ultils/hex2Rgba';

import { componentAnimationsKeyframes } from './componentAnimationsKeyframes';

const firstLoad = true;

class ModalComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { active: props.active };
    this.handleCloseModalAction = this._handleCloseModalAction.bind(this);
  }

  _handleCloseModalAction() {
    this.setState({ active: false });

    // eslint-disable-next-line no-undef
    this.desableTimeout = setTimeout((_) => {
      this.props.onSetModalAsDisabled();

      // eslint-disable-next-line no-undef
      clearTimeout(this.desableTimeout);
    }, 300);
  }

  _getFadeAnimation() {
    if (this.state.active && firstLoad) {
      return `animation: ${componentAnimationsKeyframes.fadeIn} .25s ease-in;`;
    }
    return `animation: ${componentAnimationsKeyframes.fadeOut} .25s ease-in;`;
  }

  _getBounceAnimation() {
    if (this.state.active) {
      return `animation: ${componentAnimationsKeyframes.bounceIn} .7s .25s cubic-bezier(0.215, 0.610, 0.355, 1.000);`;
    } else if (!this.state.active) {
      return `animation: ${componentAnimationsKeyframes.bounceOut} .7s;`;
    }
  }

  render() {
    const { className } = this.props;

    const ModalWrapper = styled.section`
      width: 100%;
      height: 100%;
      padding: 5%;
      top: 0;
      left: 0;
      z-index: 10000;
      position: fixed;
      overflow: scroll;
      background-color: ${hex2Rgba('#333333', 0.9)};

      // animation
      opacity: 0;
      visibility: hidden;
      ${this._getFadeAnimation()}
      animation-fill-mode: forwards;
    `;

    const ModalContent = styled.div`
      width: 100%;
      max-width: 600px;
      padding: 20px;
      margin: 0 auto;
      position: relative;
      background-color: #f0f0f0;
      top: 20%;
      transform: translateY(-20%);
      margin-bottom: 200px;

      // animation
      opacity: 0;
      ${this._getBounceAnimation()}
      animation-fill-mode: forwards;

      ${(props) =>
    `border-top: 2px solid ${props.theme.buttonColors.primary}`
};
    `;

    const CloseModal = styled.button`
      border: none;
      outline: none;
      cursor: pointer;
      width: 50px;
      height: 50px;
      font-size: 20px;
      color: #fff;
      position: absolute;
      top: -52px;
      right: 0;
      transition: opacity linear 0.25s;

      ${(props) =>
    `background-color: ${props.theme.buttonColors.primary}`
};

      &:hover {
        opacity: 0.8;
      }
    `;

    return (
      <ModalWrapper>
        <ModalContent>
          <CloseModal
            className={className}
            onClick={this._handleCloseModalAction.bind(this)}>
            <FontAwesomeIcon icon="times" />
          </CloseModal>
          {this.props.children}
        </ModalContent>
      </ModalWrapper>
    );
  }
}

ModalComponent.propTypes = {
  active: PropTypes.bool.isRequired,
  onSetModalAsDisabled: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string
};

export default ModalComponent;
