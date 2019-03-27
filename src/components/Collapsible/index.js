import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';

/**
 * Collapsible component.
 * E.g.:
 * ```html
 * <Collapsible collapsed text="Labels">
 *  <ul>
 *    <li>Element 1.1</li>
 *  </ul>
 * </Collapsible>
 * ```
 */
class CollapsibleComponent extends React.Component {
  constructor(props) {
    super(props);
    const { collapsed } = props && props;
    this.state = { isCollapsed: collapsed };
  }

  _toggle(event) {
    if (event) {
      event.preventDefault();
    }

    this.setState((prevState) => ({
      isCollapsed: !prevState.isCollapsed
    }));
  }

  render() {
    const { text, className } = this.props;

    const CtxFontAwesomeIconRight = styled(FontAwesomeIcon)`
      right: 24px;
      position: absolute;
      ${(props) => `color: ${props.theme.collapsible.toggleIcon}`};
    `;

    const CollapsibleArea = styled.div`
      padding: 10px;
      ${this.state.isCollapsed ? 'display: none' : 'display: block'};
    `;

    const CollapsibleButton = styled.button`
      width: 100%;
      height: 50px;
      border: none;
      outline: none;
      cursor: pointer;
      font-size: 14px;
      text-align: left;
      font-weight: bold;
      position: relative;
      padding: 0 0 0 10px;
      transition: all 0.25s linear;
      color: ${(props) => props.theme.collapsible.label};

      background-color:
        ${(props) => this.state.isCollapsed ? props.theme.collapsible.inactiveBg : props.theme.collapsible.activeBg};

      &:hover {
        background-color: ${(props) => props.theme.collapsible.activeBg};
      }
    `;

    const toggleIcon = this.state.isCollapsed ? 'caret-down' : 'caret-up';

    return (
      <div className={className}>
        <CollapsibleButton onClick={this._toggle.bind(this)}>
          {text} <CtxFontAwesomeIconRight icon={toggleIcon} fixedWidth />
        </CollapsibleButton>
        <CollapsibleArea>{this.props.children}</CollapsibleArea>
      </div>
    );
  }
}

CollapsibleComponent.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
  collapsed: PropTypes.bool
};

CollapsibleComponent.defaultProps = {
  text: '',
  className: '',
  children: null,
  collapsed: false
};

export default CollapsibleComponent;
