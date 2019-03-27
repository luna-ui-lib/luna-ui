import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Margin component.
 * E.g.:
 * ```html
 * <Margin selector="elements" value="1px 3px 4px 2px" />
 * ```
 */
class MarginComponent extends React.PureComponent {
  render() {
    const { selector, value } = this.props;

    const Margin = styled.div`
      & ${selector} {
        margin: ${value};
      }
    `;

    return <Margin {...this.props}>{this.props.children}</Margin>;
  }
}

MarginComponent.propTypes = {
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

MarginComponent.defaultProps = {
  children: null,
  selector: '*',
  value: '11px'
};

export default MarginComponent;
