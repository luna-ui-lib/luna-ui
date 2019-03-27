import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import hex2Rgba from '../../ultils/hex2Rgba';

/**
 * ActionFeedback component.
 * E.g.:
 * ```html
 * <ActionFeddback>Theta ui lib =D</ActionFeddback>
 * ```
 */
class ActionFeedbackComponent extends React.PureComponent {
  render() {
    const { className } = this.props;

    const ActionFeedback = styled.div`
      width: 100%;
      display: flex;
      border-radius: 2px;
      padding: 20px 35px;
      align-items: center;
      transition: opacity linear .25s;
      color: ${(props) => props.theme.actionFeedbackTextColor};
      ${(props) =>
    `background-color: ${hex2Rgba(`${props.theme.actionFeedbackBackgroundColor}`, 0.9)};`
};
    `;

    return <ActionFeedback className={className}>{this.props.children}</ActionFeedback>;
  }
}

ActionFeedbackComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

ActionFeedbackComponent.defaultProps = {
  children: null,
  className: ''
};

export default ActionFeedbackComponent;
