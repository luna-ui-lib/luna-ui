import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import hex2Rgba from '../../ultils/hex2Rgba';

/**
 * CircularLoader component.
 * E.g.:
 * ```html
 * <CircularLoader type="emit" kind="default" size="100px" />
 * ```
 */
class CircularLoader extends React.PureComponent {
  getLoaderAnimation(props) {
    return `
      @keyframes rotate-animation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes anti-rotate-animation {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(-360deg);
        }
      }

      :before {
        width: ${this.props.size - (this.props.border * 2)}px;
        height: ${this.props.size - (this.props.border * 2)}px;
        border-bottom-color: ${props.theme.circularLoader[this.props.kind]};
        border-right-color: ${props.theme.circularLoader[this.props.kind]};
        border-top-color: ${hex2Rgba(`${props.theme.circularLoader[this.props.kind]}`, 0)};
        border-left-color: ${hex2Rgba(`${props.theme.circularLoader[this.props.kind]}`, 0)};
        top: 0px;
        left: 0px;
        animation: rotate-animation 1s linear 0s infinite;
      }

      :after {
        width: ${(this.props.size - (this.props.border * 2)) * 0.7}px;
        height: ${(this.props.size - (this.props.border * 2)) * 0.7}px;
        border-bottom-color: ${props.theme.circularLoader[this.props.kind]};
        border-right-color: ${props.theme.circularLoader[this.props.kind]};
        border-top-color: ${hex2Rgba(`${props.theme.circularLoader[this.props.kind]}`, 0)};
        border-left-color: ${hex2Rgba(`${props.theme.circularLoader[this.props.kind]}`, 0)};
        top:  ${
  ((this.props.size - (this.props.border * 2)) - ((this.props.size - (this.props.border * 2)) * 0.7)) / 2
}px;
        left: ${
  ((this.props.size - (this.props.border * 2)) - ((this.props.size - (this.props.border * 2)) * 0.7)) / 2
}px;
        animation: anti-rotate-animation 0.85s linear 0s infinite;
      }
    `;
  }

  render() {
    const Loader = styled.div`
      position: relative;
      width: ${this.props.size}px;
      height: ${this.props.size}px;

      :before, :after {
        content: "";
        display: block;
        position: absolute;
        border-width: 4px;
        border-style: solid;
        border-radius: 50%;
      }

      ${(props) => this.getLoaderAnimation(props)}
    `;

    return <Loader />;
  }
}

CircularLoader.propTypes = {
  size: PropTypes.number,
  border: PropTypes.number,
  kind: PropTypes.string
};

CircularLoader.defaultProps = {
  size: 125,
  border: 4,
  kind: 'black'
};

export default CircularLoader;
