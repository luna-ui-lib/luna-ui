import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const changeToActive = (themeColor) => keyframes`
  from {
    border-bottom-color: transparent;
    opacity: .5;
  }

  to {
    border-bottom-color: ${themeColor};
    opacity: 1;
  }
`;

const TabWrapper = styled.div`
  width: 100%;
  display: flex;
`;

const TabInactive = styled.div`
  padding: 5px 10px;
  font-weight: bold;
  color: #333;
  opacity: .5;
  cursor: pointer;
`;

const TabActive = styled.div`
  padding: 5px 10px;
  color: #333;
  font-weight: bold;
  border-bottom: 1px solid transparent;
  animation: ${(props) => changeToActive(props.theme.tabs[props.kind])} .25s ease forwards;
`;

/**
 * Hint component.
 * E.g.:
 * ```html
 *   <Tabs
 *     value={this.state.value}
 *     onChange={(value) => { this.setState({ value }) }}
 *     tabs={{
 *       selection1: <span>Selection 1</span>,
 *       selection2: <span>Selection 2</span>,
 *       selection3: <span>Selection 3</span>,
 *       selection4: <span>Selection 4</span>,
 *       selection5: <span>Selection 5</span>,
 *       selection6: <span>Selection 6</span>
 *     }}
 *   />
 *   <Tabs.SelectView
 *     value={this.state.value}
 *     views={{
 *       selection1: <TabBodyExample>Content for tab 1</TabBodyExample>,
 *       selection2: <TabBodyExample>Content for tab 2</TabBodyExample>,
 *       selection3: <TabBodyExample>Content for tab 3</TabBodyExample>,
 *       selection4: <TabBodyExample>Content for tab 4</TabBodyExample>,
 *       selection5: <TabBodyExample>Content for tab 5</TabBodyExample>,
 *       selection6: <TabBodyExample>Content for tab 6</TabBodyExample>
 *     }}
 *   />
 * ```
 */
class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.renderTabs = this.renderTabs.bind(this);
  }

  renderTabs() {
    const { value, tabs, onChange, kind } = this.props;
    return Object.keys(tabs).map((key) => {
      let TabComponent = TabInactive;
      if (key === value) {
        TabComponent = TabActive;
      }
      return <TabComponent
        kind={kind}
        key={key}
        id={key}
        onClick={() => onChange(key)}
      >
        {tabs[key]}
      </TabComponent>;
    });
  }

  render() {
    const { className } = this.props;

    return <TabWrapper className={className}>
      {this.renderTabs()}
    </TabWrapper>;
  }
}

Tabs.SelectView = ({ value, views }) => {
  return views[value];
};

Tabs.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  tabs: PropTypes.object.isRequired,
  kind: PropTypes.string,
  className: PropTypes.string
};

Tabs.defaultProps = {
  kind: 'primary',
  className: ''
};

export default Tabs;
