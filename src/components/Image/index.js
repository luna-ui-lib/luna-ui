import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Image component.
 * E.g.:
 * ```html
 * <Image src="./theta.svg" alt="theta" />
 * ```
 */
class ImageComponent extends React.PureComponent {
  render() {
    const { src, alt, height, width, round, fit, shadow, className } = this.props;

    const Img = styled.img`
      width: ${width};
      height: ${height};
      ${fit ? 'object-fit: cover;' : ''}
      ${shadow ? 'box-shadow: 1px 1px 1px #838383;' : ''}
      ${round ? `border-radius: 100%; width: ${height}` : ''}
    `;

    return (
      <Img className={className} src={src} alt={alt}/>
    );
  }
}

ImageComponent.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  round: PropTypes.bool,
  /**
   * set object-fit as cover
   */
  fit: PropTypes.bool,
  shadow: PropTypes.bool,
  className: PropTypes.string
};

ImageComponent.defaultProps = {
  alt: 'image',
  height: 'auto',
  width: 'auto',
  round: false,
  fit: false,
  shadow: false,
  className: ''
};

export default ImageComponent;
