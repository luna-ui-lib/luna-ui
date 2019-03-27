import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

/**
 * Radiobutton component.
 * E.g.:
 * ```html
 *  <Form.Radiobutton id="rd3" kind="success" label="funk" group="rd" value="3" />
 *  <Form.Radiobutton id="rd4" kind="danger" label="samba" group="rd" value="4" />
 * ```
 */
class RadiobuttonComponent extends React.PureComponent {
  render() {
    const { config, kind, value, id, label, group, className } = this.props;

    const Input = styled.input`
      visibility: hidden;
      &:checked + label {
        color: ${(props) => props.theme.form.radiobutton.types[kind]};
      }
      &::not(:checked) + label {
        color: ${(props) => props.theme.form.radiobutton.checkIcon};
      }
      &:disabled ~ label {
        cursor: not-allowed;
        color: ${(props) => props.theme.form.checkbox.disabledText};
      }
      &:disabled + label {
        color: ${(props) => props.theme.form.radiobutton.disabled};
        background-color: ${(props) => props.theme.form.radiobutton.disabled};
        border-color: ${(props) => props.theme.form.radiobutton.disabledBorder};
      }
    `;

    const Radiobutton = styled.label`
      width: 16px;
      height: 16px;
      padding: 2px;
      cursor: pointer;
      font-size: 10px;
      border-radius: 50%;
      left: 11px;
      position: absolute;
      transition: color .15s linear;
      color: ${(props) => props.theme.form.radiobutton.checkIcon};
      background-color: ${(props) => props.theme.form.radiobutton.checkIcon};
      border: 1px solid ${(props) => props.theme.form.radiobutton.types[kind]};
      & + label {
        position: absolute;
        left: 27px;
        cursor: pointer;
      }
    `;

    const RadiobuttonWraper = styled.div`
      height: 40px;
      padding: 11px;
      display: flex;
      position: relative;
    `;

    return (
      <RadiobuttonWraper className={className}>
        <Input readOnly id={id} name={group} type="radio" {...config} value={value} />
        <Radiobutton htmlFor={id}>
          <FontAwesomeIcon icon="circle" />
        </Radiobutton>
        <label htmlFor={id}>{label}</label>
      </RadiobuttonWraper>
    );
  }
}

RadiobuttonComponent.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  group: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  config: PropTypes.object
};

RadiobuttonComponent.defaultProps = {
  label: '',
  className: '',
  kind: 'primary',
  config: {}
};

export default RadiobuttonComponent;
