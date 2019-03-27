import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

/* eslint-disable no-extra-parens */
const Select = styled.select`
  order:2;
  width: 100%;
  border: none;
  height: 40px;
  outline: none;
  padding: 10px;
  font-size: 14px;
  box-shadow: none;
  appearance: none;
  -ms-appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  transition: all .25s linear;
  background-color: ${(props) => props.theme.form.inputText.background};
  ${(props) =>
    (`
      border-radius: 2px;
      border: 1px solid ${props.theme.form.inputText.border};
    `)
}
  ${(props) => (
    props.icon.length > 0 ? `
      padding-left: 40px;
    ` : ''
  )}
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${(props) => props.theme.form.inputText.placeholder};
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: ${(props) => props.theme.form.inputText.placeholder};
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: ${(props) => props.theme.form.inputText.placeholder};
  }
  :-moz-placeholder { /* Firefox 18- */
    color: ${(props) => props.theme.form.inputText.placeholder};
  }
  &:focus ~ span {
    color: ${(props) => props.theme.form.inputText.types[props.kind]};
  }
  &:focus {
    border-color: ${(props) => props.theme.form.inputText.types[props.kind]};
  }
  &:disabled ~ span {
    cursor: not-allowed;
    color: ${(props) => props.theme.form.inputText.disabledText};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme.form.inputText.disabledText};
    background-color: ${(props) => props.theme.form.inputText.disabled};
  }
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SelectIcon = styled.span`
  font-size: 14px;
  transition: all .25s linear;
  color: ${(props) => props.theme.form.inputText.placeholder};
  position: absolute;
  left: 15px;
  top: 13px;
`;

const ArrowIcon = styled.span`
  font-size: 14px;
  position: absolute;
  right: 15px;
  top: 13px;
`;

/**
 * Select component.
 * E.g.:
 * ```html
 *  <Form.Select icon="seedling" kind="default">
 *    <option>Angeratum</option>
 *    <option>Marigold</option>
 *  </Form.Select>
 * ```
 */
class SelectComponent extends React.PureComponent {
  render() {
    const { kind, icon, config, children, className } = this.props;

    if (icon.length > 0) {
      return (
        <InputWrapper>
          <Select kind={kind} icon={icon} {...config}>
            {children}
          </Select>
          <ArrowIcon>
            <FontAwesomeIcon icon="caret-down"/>
          </ArrowIcon>
          <SelectIcon>
            <FontAwesomeIcon icon={icon}/>
          </SelectIcon>
        </InputWrapper>
      );
    }

    return (
      <InputWrapper className={className}>
        <Select kind={kind} icon={icon} {...config}>
          {children}
        </Select>
        <ArrowIcon>
          <FontAwesomeIcon icon="caret-down"/>
        </ArrowIcon>
      </InputWrapper>
    );
  }
}

SelectComponent.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.string,
  kind: PropTypes.string,
  config: PropTypes.object,
  className: PropTypes.string
};

SelectComponent.defaultProps = {
  children: null,
  icon: '',
  kind: 'primary',
  config: {},
  className: ''
};

export default SelectComponent;
