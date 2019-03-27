import PropTypes from 'prop-types';
import styled from 'styled-components';

/* eslint-disable no-confusing-arrow */
/**
 * Table component.
 * E.g.:
 * ```html
 * <Table kind="light">
 *  <Table.Header>
 *    <Table.Row>
 *      <Table.Cell>Example</Table.Cell>
 *    </Table.Row>
 *  </Table.Header>
 *  <Table.Body>
 *    <Table.Row>
 *      <Table.cell>Example</Table.cell>
 *    </Table.Row>
 *  </Table.Body>
 * </Table>
 * ```
 */

const Table = styled.div`
  width: 100%;
  display: table;

  & > section > div > div:first-child, & > section > a > div:first-child {
    border-radius: 2px 0 0 2px;
  }

  & > section > div > div:last-child, & > section > a > div:last-child {
    text-align: right;
    padding-right: 15px;
    border-radius: 0 2px 2px 0;
  }

  & > section > a {
    color: #000000;
    text-decoration: none;
    cursor: pointer;
  }

  & > section > div > div, & > section > a > div {
    min-width: 100px;
    vertical-align: middle;
    padding: 15px 0px 15px 15px;
    border-bottom: 2px solid ${(props) => props.theme.table[props.kind].border};
    ${
  (props) => props.theme.table[props.kind].bg ? `background-color: ${props.theme.table[props.kind].bg}` : undefined
};
  }

  & > header > div > div {
    padding: 15px 0px 10px 15px;
    font-size: 12px;
    color: ${(props) => props.theme.table[props.kind].headerColor};

    &:last-child {
      text-align: right;
      padding-right: 15px;
    }
  }
`;
Table.Header = styled.header`
  display: table-header-group;
`;

Table.Body = styled.section`
  display: table-row-group;
`;

Table.Footer = styled.footer`
  display: table-footer-group;
`;

Table.Row = styled.div`
  display: table-row;
`;

Table.RowLink = styled.a`
  display: table-row;
`;

Table.Cell = styled.div`
  display: table-cell;
`;

Table.propTypes = {
  kind: PropTypes.string
};

Table.defaultProps = {
  kind: 'transparent'
};

export default Table;
