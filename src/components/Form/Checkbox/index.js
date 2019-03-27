import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

/**
 * Checkbox component.
 * E.g.:
 * ```html
 *  <Form.Checkbox id="ex1" kind="primary" label="pop" group="ex" value="1" />
 *  <Form.Checkbox id="ex2" kind="default" label="rock" group="ex" value="2" />
 *  <Form.Checkbox id="ex3" kind="success" label="funk" group="ex" value="3" />
 *  <Form.Checkbox id="ex4" kind="danger" label="samba" group="ex" value="4" />
 *  <Form.Checkbox id="ex5" kind="warning" label="hiphop" group="ex" value="5" />
 *  <Form.Checkbox id="ex6" kind="danger" label="pagode" group="ex" value="6" config={{ disabled: true }} />
 * ```
 */
class CheckboxComponent extends React.PureComponent {
  render() {
    const { config, kind, value, id, label, group, className } = this.props;

    const Input = styled.input`
      visibility: hidden;
      &:checked + label {
        background-color: ${(props) => props.theme.form.checkbox.types[kind]};
      }

      &::not(:checked) + label {
        background-color: ${(props) => props.theme.form.checkbox.checkIcon};
      }

      &:disabled ~ label {
        cursor: not-allowed;
        color: ${(props) => props.theme.form.checkbox.disabledText};
      }

      &:disabled + label {
        color: ${(props) => props.theme.form.checkbox.disabled};
        background-color: ${(props) => props.theme.form.checkbox.disabled};
        border-color: ${(props) => props.theme.form.checkbox.disabledBorder};
      }
    `;

    const Checkbox = styled.label`
      width: 16px;
      height: 16px;
      padding: 2px;
      cursor: pointer;
      font-size: 10px;
      border-radius: 2px;
      position: absolute;
      left: 11px;
      transition: background-color .15s linear;
      color: ${(props) => props.theme.form.checkbox.checkIcon};
      background-color: ${(props) => props.theme.form.checkbox.checkIcon};
      border: 1px solid ${(props) => props.theme.form.checkbox.types[kind]};
      & + label {
        position: absolute;
        left: 27px;
        cursor: pointer;
      }
    `;

    const CheckboxWrapper = styled.div`
      height: 40px;
      padding: 11px;
      display: flex;
      position: relative;
    `;

    return (
      <CheckboxWrapper className={className}>
        <Input readOnly id={id} name={group} type="checkbox" {...config} value={value} />
        <Checkbox htmlFor={id}>
          <FontAwesomeIcon icon="check" />
        </Checkbox>
        <label htmlFor={id}>{label}</label>
      </CheckboxWrapper>
    );
  }
}

CheckboxComponent.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  group: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  config: PropTypes.object
};

CheckboxComponent.defaultProps = {
  className: '',
  label: '',
  kind: 'primary',
  config: {}
};

export default CheckboxComponent;
