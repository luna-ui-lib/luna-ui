import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Hint component.
 * E.g.:
 * ```html
 * <Hint>Theta ui lib =D</Hint>
 * ```
 */
class HintComponent extends React.PureComponent {
  render() {
    const { className } = this.props;

    const Hint = styled.span`
      display: inline-block;
      color: ${(props) => props.theme.hintColor};
    `;

    return <Hint className={className}>{this.props.children}</Hint>;
  }
}

HintComponent.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

HintComponent.defaultProps = {
  children: null,
  className: ''
};

export default HintComponent;
