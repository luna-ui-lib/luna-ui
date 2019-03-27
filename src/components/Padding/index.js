import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Padding component.
 * E.g.:
 * ```html
 * <Padding selector="elements" value="1px 3px 4px 2px" />
 * ```
 */
class PaddingComponent extends React.PureComponent {
  render() {
    const { selector, value } = this.props;

    const Padding = styled.div`
      & ${selector} {
        padding: ${value};
      }
    `;

    return <Padding {...this.props}>{this.props.children}</Padding>;
  }
}

PaddingComponent.propTypes = {
  children: PropTypes.node,
  /**
   * Selects the element to receive padding value
   */
  selector: PropTypes.string,
  /**
   * Value of padding to selected elements
   */
  value: PropTypes.string
};

PaddingComponent.defaultProps = {
  children: null,
  selector: '*',
  value: '11px'
};

export default PaddingComponent;
