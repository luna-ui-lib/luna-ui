import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../../config/defaultTheme';
import DefaultStyles from '../../config/defaultStyles';
import DefaulTyphography from '../../config/defaultTyphography';

/**
 * Theme component.
 * E.g.:
 * ```html
 * <Theme theme={{...}}>
 *  ...
 * </Theme>
 * ```
 */
class ThemeComponent extends React.PureComponent {
  render() {
    const { theme, children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <div>
          <DefaultStyles />
          <DefaulTyphography />
          {children}
        </div>
      </ThemeProvider>
    );
  }
}

ThemeComponent.propTypes = {
  theme: PropTypes.object,
  children: PropTypes.node
};

ThemeComponent.defaultProps = {
  theme: defaultTheme,
  children: null
};

export default ThemeComponent;
