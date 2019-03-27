import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Button component.
 * E.g.:
 * ```html
 *  <Button kind="primary" config={onClick: function}>primary</Button>
 *  <Button kind="default">default</Button>
 *  <Button kind="success">success</Button>
 *  <Button kind="danger">danger</Button>
 *  <Button kind="warning">warning</Button>
 * ```
 */
class ButtonComponent extends React.PureComponent {
  _getButtonSizeDefinitions() {
    switch (this.props.size) {
      case 'large':
        return 'font-size: 16px; padding: 8px 35px; height: 40px;';
      case 'small':
        return 'font-size: 12px; padding: 4px 20px; height: 30px;';
      default:
        return 'font-size: 14px; padding: 6px 30px; height: 35px;';
    }
  }

  _getLoadingSizeDefinitions() {
    switch (this.props.size) {
      case 'large':
        return 'width="30px" height="30px" style="top:5px; left:2px; margin:0; position: absolute;"';
      case 'small':
        return 'width="20px" height="20px" style="top:5px; left:2px; margin:0; position: absolute;"';
      default:
        return 'width="25px" height="25px" style="top:5px; left:2px; margin:0; position: absolute;"';
    }
  }

  render() {
    const { kind, config, children, size, promise, className } = this.props;

    const Button = styled.button`
      color: #fff;
      border: none;
      outline: none;
      cursor: pointer;
      font-weight: bold;
      border-radius: 2px;
      text-transform: uppercase;
      transition: opacity linear 0.25s;
      position: relative;

      ${this._getButtonSizeDefinitions(size)};

      background-color: ${(props) => props.theme.buttonColors[kind]};

      ${(props) => {
    if (promise) {
      return 'opacity: 0.8; cursor: not-allowed;';
    }
  }};

      &:hover {
        opacity: 0.8;
      }
      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    `;

    const LoadingWrapper = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    `;

    const Loading = `
      <svg version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px" y="0px"
        ${this._getLoadingSizeDefinitions(size)}
        viewBox="0 0 50 50"
        style="enable-background:new 0 0 50 50;">
      <path fill="#fff"
        d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z"
        transform="rotate(217.187 25 25)">
        <animateTransform
          attributeType="xml"
          attributeName="transform"
          type="rotate" from="0 25 25" to="360 25 25" dur="0.6s"
          repeatCount="indefinite"></animateTransform>
      </path>
    </svg>`;

    return <Button {...config} className={className}>
      { promise &&
        <LoadingWrapper dangerouslySetInnerHTML={{ __html: Loading }} />
      } {children}
    </Button>;
  }
}

ButtonComponent.propTypes = {
  kind: PropTypes.oneOf(['default', 'primary', 'success', 'danger', 'warning']),
  children: PropTypes.node,
  config: PropTypes.object,
  promise: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.oneOf(['small', 'large', 'medium'])
};

ButtonComponent.defaultProps = {
  kind: 'default',
  className: '',
  children: null,
  config: {},
  promise: null,
  size: 'medium'
};

export default ButtonComponent;
