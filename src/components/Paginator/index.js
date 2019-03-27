import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Icon from '../Icon';
import Hint from '../Hint';

/**
 * Paginator component.
 * E.g.:
 *
 * ```javascript
 * paginationInfo : {
 *  size: 3,
 *  last: false,
 *  first: true,
 *  number: 0,
 *  totalPages: 3,
 *  totalElements: 25,
 *  numberOfElements: 25
 * }
 * ```
 *
 * ```html
 * <Paginator onGoToPage={this.goToPage.bind(this)} paginationInfo={paginationInfo} />
 * ```
*/
class PaginatorComponent extends React.PureComponent {
  goToPreviousPage() {
    if (this.props.paginationInfo.first) {
      return;
    }

    this.props.onGoToPage(this.props.paginationInfo.number - 1);
  }

  goToNextPage() {
    if (this.props.paginationInfo.last) {
      return;
    }

    this.props.onGoToPage(this.props.paginationInfo.number + 1);
  }

  getPaginator() {
    const { className } = this.props;

    const ControlButton = styled.button`
      color: #fff;
      border: none;
      outline: none;
      cursor: pointer;
      font-weight: bold;
      border-radius: 2px;
      text-transform: uppercase;
      transition: opacity linear 0.25s;

      margin: 0 5px;

      height: 23px;
      padding: 0 8px;

      background-color: ${(props) => props.theme.buttonColors.primary};

      &:hover {
        opacity: 0.8;
      }

      &:disabled {
        opacity: 0.4;
        cursor: not-allowed;
      }
    `;

    return (
      <div className={className}>
        <ControlButton
          disabled={this.props.paginationInfo.first}
          onClick={() => this.goToPreviousPage()}>
          <Icon name="angle-left" />
        </ControlButton>
        <Hint>{this.props.paginationInfo.number + 1} - {this.props.paginationInfo.totalPages}</Hint>
        <ControlButton
          disabled={this.props.paginationInfo.last}
          onClick={() => this.goToNextPage()}>
          <Icon name="angle-right" />
        </ControlButton>
      </div>
    );
  }

  render() {
    const showPaginator = this.props.paginationInfo.totalPages > 1;

    if (showPaginator) {
      return this.getPaginator();
    }

    return null;
  }
}

PaginatorComponent.propTypes = {
  paginationInfo: PropTypes.shape({
    size: PropTypes.number,
    last: PropTypes.bool,
    first: PropTypes.bool,
    number: PropTypes.number,
    totalPages: PropTypes.number,
    totalElements: PropTypes.number,
    numberOfElements: PropTypes.number
  }).isRequired,
  onGoToPage: PropTypes.func.isRequired,
  className: PropTypes.string
};

PaginatorComponent.defaultProps = {
  paginationInfo: {
    size: 0,
    last: false,
    first: false,
    number: 0,
    totalPages: 0,
    totalElements: 0,
    numberOfElements: 0
  },
  onGoToPage: () => true,
  className: ''
};

export default PaginatorComponent;
