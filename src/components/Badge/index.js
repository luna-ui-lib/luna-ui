import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

/**
 * Badge component.
 * E.g.:
 * ```html
 *  <Badge label active kind="address">Address</Badge>
 *  <Badge label active kind="payment">Payment</Badge>
 *  <Badge label active kind="voucher">Voucher</Badge>
 *  <Badge label active kind="request">Request</Badge>
 *  <Badge label active kind="general">General</Badge>
 *  <Badge label active kind="nogo">No go's</Badge>
 *  <Badge label active kind="customer">Customer</Badge>
 *  <Badge active={this.state.address} onHandleClick={this.toggleBadge('address')} kind="address">Address</Badge>
 *  <Badge active={this.state.payment} onHandleClick={this.toggleBadge('payment')} kind="payment">Payment</Badge>
 *  <Badge active={this.state.voucher} onHandleClick={this.toggleBadge('voucher')} kind="voucher">Voucher</Badge>
 *  <Badge active={this.state.wishes} onHandleClick={this.toggleBadge('wishes')} kind="wishes">Wishes</Badge>
 *  <Badge active={this.state.general} onHandleClick={this.toggleBadge('general')} kind="general">General</Badge>
 *  <Badge active={this.state.nogo} onHandleClick={this.toggleBadge('nogo')} kind="nogo">No go</Badge>
 *  <Badge active={this.state.customer} onHandleClick={this.toggleBadge('customer')} kind="customer">Customer</Badge>
 *  <Badge config={{disabled: true}} kind="customer">Customer</Badge>
 * ```
 */
class BadgeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.firstLoad = true;
  }

  _getBackgroundAnimation(props) {
    const backgroundAnimationKeyframes = keyframes`
      from {
        background-color: #f0f0f0;
      }

      to {
        background-color: ${props.theme.badgeColors[this.props.kind]};
      }
    `;

    if (!this.props.active && this.firstLoad) {
      return `background-color: #f0f0f0;`;
    } else if (this.props.active && this.firstLoad) {
      return `background-color: ${props.theme.badgeColors[this.props.kind]};`;
    } else if (this.props.active && !this.firstLoad) {
      return `animation: ${backgroundAnimationKeyframes} .25s ease-in;`;
    }
    return `animation: ${backgroundAnimationKeyframes} .25s reverse ease-in; `;
  }

  render() {
    const { active, label, config, className } = this.props;

    /* eslint-disable no-confusing-arrow */
    const Badge = styled.span`
      font-size: 10px;
      border-radius: 2px;
      display: inline-block;
      padding: 3px 5px 3px 5px;
      border: solid 1px transparent;
      ${(props) => label ? 'cursor: default;' : 'cursor: pointer;'}
      ${(props) => this._getBackgroundAnimation(props)};
      ${(props) => config.disabled ? 'cursor: not-allowed; !important' : null}

      animation-fill-mode: forwards;
    `;

    const BadgeText = styled.strong`
      opacity: 0.9;
      color: #333333;
    `;

    const BadgeMarkerWrapper = styled.span`
      font-size: 8px;
      padding-right: 2px;
      display: inline-block;
      transform: translateY(-1px);
    `;

    const markerIcon = active ? 'check' : 'plus';
    const BadgeStatusMarker = <BadgeMarkerWrapper>
        <FontAwesomeIcon icon={markerIcon} fixedWidth />
      </BadgeMarkerWrapper>
    ;

    return (
      <Badge className={className} {...config}>
        {label && BadgeStatusMarker}

        <BadgeText>{this.props.children}</BadgeText>
      </Badge>
    );
  }
}

BadgeComponent.propTypes = {
  active: PropTypes.bool,
  label: PropTypes.bool,
  config: PropTypes.object,
  children: PropTypes.node,
  kind: PropTypes.string,
  className: PropTypes.string
};

BadgeComponent.defaultProps = {
  active: false,
  label: false,
  config: {},
  children: null,
  kind: 'general',
  className: ''
};

export default BadgeComponent;
