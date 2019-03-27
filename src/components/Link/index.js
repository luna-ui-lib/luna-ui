import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Link component.
 * E.g.:
 * ```html
 * <Link href="http://example.de" target="_blank" />
 * ```
 */
class LinkComponent extends React.PureComponent {
  render() {
    const Link = styled.a`
      transition: opacity linear .25s;
      color: ${(props) => props.theme.linkColor};
      &:hover {
        opacity: .8;
      }
    `;

    return <Link {...this.props}>{this.props.children}</Link>;
  }
}

LinkComponent.propTypes = {
  children: PropTypes.node
};

LinkComponent.defaultProps = {
  children: null
};

export default LinkComponent;
