import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Area component.
 * E.g.:
 * ```html
 * <Area>
 *  <div>
 *    ...
 *  </div>
 * </Area>
 * ```
 */
class AreaComponent extends React.PureComponent {
  render() {
    const { kind, className } = this.props;
    const Area = styled.div`
      padding: 20px;
      margin-bottom: 30px;
      box-shadow: 0 0 4px 0 rgba(0,0,0,.1);
      border-radius: 2px;
      background-color: ${(props) => props.theme.areaColors[kind]};
    `;

    return <Area className={className}>{this.props.children}</Area>;
  }
}

AreaComponent.propTypes = {
  kind: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node
};

AreaComponent.defaultProps = {
  kind: 'bg',
  className: '',
  children: null
};

export default AreaComponent;
