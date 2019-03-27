import React from 'react';
import PropTypes from 'prop-types';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

/**
 * Icon component.
 * E.g.:
 * ```html
 *  <Icon name="rocket" />
 *  <Icon name="search" />
 *  <Icon name="plus" />
 *  <Icon name="minus" />
 *  <Icon name="star" />
 *  <Icon name="circle" />
 *  <Icon name="square" />
 * ```
 */
class IconComponent extends React.PureComponent {
  render() {
    const { name } = this.props;
    return <FontAwesomeIcon icon={name} />;
  }
}

IconComponent.propTypes = {
  name: PropTypes.string.isRequired
};

export default IconComponent;
