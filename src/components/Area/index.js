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
      box-shadow: 0 0 1px 1px rgba(145, 145, 145, .2);
      -webkit-box-shadow: 0 0 10px 2px rgba(145,145,145,.2);
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
