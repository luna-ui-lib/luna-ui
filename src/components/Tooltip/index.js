import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TooltipContent = styled.span`
  display: inline-block;
  position: relative;
  z-index: 2;
`;

/**
 * Tooltip component.
 * E.g.:
 * ```html
 *  <Tooltip placement="top | bottom | right | left" trigger="hover" content={<span>tooltip content</span>}>
 *    <AnyComponent />
 *  </Tooltip>
 * ```
 */
class TooltipComponent extends PureComponent {
  _getPlacementDefinitions() {
    const spacingToComponent = 12;

    switch (this.props.placement) {
      case 'top':
        return `top: -${this.tooltipRefMeasurements.height + spacingToComponent}px;`;
      case 'bottom':
        return `bottom: -${this.tooltipRefMeasurements.height + spacingToComponent}px;`;
      case 'right':
        return `right: -${this.tooltipRefMeasurements.width + spacingToComponent}px;`;
      default:
        return `left: -${this.tooltipRefMeasurements.width + spacingToComponent}px;`;
    }
  }

  _getArrowPlacementDefinitions() {
    switch (this.props.placement) {
      case 'top':
        return `left: 50%; margin-left: -6px; bottom: -6px; transform: rotate(45deg);`;
      case 'bottom':
        return `left: 50%; margin-left: -6px; top: -6px; transform: rotate(225deg);`;
      case 'right':
        return `top: 50%; margin-top: -6px; left: -6px; transform: rotate(135deg);`;
      default:
        return `top: 50%; margin-top: -6px; right: -6px; transform: rotate(-45deg);`;
    }
  }

  _getAlignmentDefinitions() {
    const needsHorizontalAlignment = (this.props.placement === 'top') || (this.props.placement === 'bottom');

    if (needsHorizontalAlignment) {
      return `left: 50%; margin-left: -${this.tooltipRefMeasurements.width / 2}px;`;
    }

    return `top: 50%; margin-top: -${this.tooltipRefMeasurements.height / 2}px;`;
  }

  componentDidMount() {
    if (this.TooltipRef) {
      this.tooltipRefMeasurements = {
        width: this.TooltipRef.clientWidth || 0,
        height: this.TooltipRef.clientHeight || 0
      };

      this.TooltipRef.style = `${this._getPlacementDefinitions()} ${this._getAlignmentDefinitions()}`;
    }
  }

  componentDidUpdate() {
    if (this.TooltipRef) {
      this.tooltipRefMeasurements = {
        width: this.TooltipRef.clientWidth || 0,
        height: this.TooltipRef.clientHeight || 0
      };

      console.log(`${this._getPlacementDefinitions()} ${this._getAlignmentDefinitions()}`)

      this.TooltipRef.style = `${this._getPlacementDefinitions()} ${this._getAlignmentDefinitions()}`;
    }
  }

  render() {
    const TooltipWapper = styled.div`
      display: inline-block;
      position: relative;

      &:hover .luna-tooltip {
        visibility: visible;
        opacity: 1;
      }
    `;

    const Tooltip = styled.div`
      width: 150px;
      padding: 6px;
      font-size: 12px;
      background-color: #fff;
      position: absolute;
      border-radius: 2px;
      border: 1px solid #d5d5d5;
      z-index: 99;

      opacity: 0;
      visibility: hidden;
      transition: opacity ease .25s;

      &::after {
        content: '';
        width: 10px;
        height: 10px;
        position: absolute;
        background-color: #fff;
        border-bottom: 1px solid #d5d5d5;
        border-right: 1px solid #d5d5d5;
        ${this._getArrowPlacementDefinitions()}
      }
    `;

    return (
      <TooltipWapper className={this.props.className} ref={(comp) => this.TooltipWapperRef = comp}>
        <Tooltip className="luna-tooltip" ref={(comp) => this.TooltipRef = comp}>
          <TooltipContent>{this.props.content}</TooltipContent>
        </Tooltip>
        <div>{this.props.children}</div>
      </TooltipWapper>
    );
  }
}

TooltipComponent.propTypes = {
  placement: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
  trigger: PropTypes.oneOf(['hover']),
  children: PropTypes.node,
  content: PropTypes.node,
  className: PropTypes.string
};

TooltipComponent.defaultProps = {
  placement: 'top',
  trigger: 'hover',
  children: null,
  content: null,
  className: ''
};

export default TooltipComponent;
