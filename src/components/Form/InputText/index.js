import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';

const Input = styled.input`
  order:2;
  width: 100%;
  height: 40px;
  border: none;
  outline: none;
  padding: 11px;
  box-shadow: none;
  ${(props) => props.icon.length > 0 ? `padding-left: 40px;` : ''}
  font-size: 14px;
  transition: all .25s linear;
  background-color: ${(props) => props.theme.form.inputText.background};
  ${(props) => `
      border-radius: 2px;
      border: 1px solid ${props.theme.form.inputText.border};
  `}
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

const InputIcon = styled.span`
  font-size: 14px;
  transition: all .25s linear;
  color: ${(props) => props.theme.form.inputText.placeholder};
  position: absolute;
  left: 15px;
  top: 13px;
`;

const AutoComplete = styled.div`
  width: 100%;
  background-color: #ffffff;
  z-index: 999;
  min-width: 120px;
  position: absolute;
  border-radius: 2px;
  transform: translate(0, 0px);
  border: solid 1px #d5d5d5;
  background-color: #ffffff;
  display: ${(props) => props.visible ? 'block' : 'none' };
`;

const AutoCompleteItem = styled.div`
  width: 100%;
  padding: 13px;
  margin: 0px;
  cursor: pointer;

  &:hover {
    background-color: #f3f3f3;
  }
`;

const HighlightText = styled.span`
  color: ${(props) => props.theme.form.inputText.types[props.kind]};
`;

/* eslint-disable max-len, no-extra-parens */
/**
 * InputText component.
 * E.g.:
 * ```html
 *  <Form.InputText autocompleteList={...ArrayOfStrings} kind="primary" config={{ placeholder: 'I\'m a normal text input with placeholder with primary color' }} />
 *  <Form.InputText kind="default" config={{ placeholder: 'I\'m a normal text input with placeholder with default color ' }} />
 *  <Form.InputText kind="success" config={{ placeholder: 'Search...' }} icon="search" />
 *  <Form.InputText kind="danger" config={{ placeholder: 'Some text...' }} icon="bomb" />
 *  <Form.InputText kind="warning" config={{ placeholder: 'Some placeholder text...' }} icon="bug" />
 *  <Form.InputText config={{ placeholder: 'Rocket', disabled: true }} icon="rocket" />
 * ```
 */
class InputTextComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isAutocompleteVisible: false,
      autocompleteList: []
    };

    this.setInputText = this.setInputText.bind(this);
    this.showAutoComplete = this.showAutoComplete.bind(this);
    this.hideAutoComplete = this.hideAutoComplete.bind(this);
    this.highlightText = this.highlightText.bind(this);
  }

  showAutoComplete(event) {
    const targetValue = event.target.value;
    const { autocompleteList } = this.props;
    const filteredList = autocompleteList.filter((text) => {
      return text.indexOf(targetValue) !== -1;
    });
    if (targetValue.length === 0) {
      this.setState({
        isAutocompleteVisible: true,
        autocompleteList
      });
    } else {
      this.setState({
        isAutocompleteVisible: filteredList.length > 0,
        autocompleteList: filteredList
      });
    }
  }

  setInputText(value, onChangeHandler) {
    return () => {
      this.input.value = value;
      onChangeHandler({ target: { value } })
      this.hideAutoComplete();
    };
  }

  hideAutoComplete() {
    this.setState({
      isAutocompleteVisible: false,
      autocompleteList: []
    });
  }

  highlightText(value, kind) {
    const matchText = this.input.value;
    const startOfMatch = value.indexOf(matchText);
    const endOfMatch = startOfMatch + matchText.length;
    const endOfValue = value.length;
    return <span>
      <span>{value.substring(0, startOfMatch)}</span>
      <HighlightText kind={kind}>{value.substring(startOfMatch, endOfMatch)}</HighlightText>
      <span>{value.substring(endOfMatch, endOfValue)}</span>
    </span>;
  }

  render() {
    const { kind, icon, config, className, autocompleteList } = this.props;

    const eventHandlersConfig = {
      onFocus: (event) => {
        this.showAutoComplete(event)
        config.onFocus && config.onFocus(event)
      },
      onBlur: (event) => {
        this.hideAutoComplete()
        config.onBlur && config.onBlur(event)
      },
      onChange: (event) => {
        this.showAutoComplete(event)
        config.onChange && config.onChange(event)
      }
    }

    return (
      <InputWrapper className={className}>
        <Input
          innerRef={(element) => this.input = element}
          kind={kind}
          icon={icon}
          {...config}
          {...eventHandlersConfig}
        />
        {
          icon.length > 0 ?
            <InputIcon>
              <FontAwesomeIcon icon={icon} />
            </InputIcon> : null
        }
        <AutoComplete
          visible={autocompleteList.length > 0 && this.state.isAutocompleteVisible}
        >
          {this.state.autocompleteList.map((value) => {
            return <AutoCompleteItem
              key={value}
              onMouseDown={this.setInputText(value, config.onChange)}
            >
              {this.highlightText(value, kind)}
            </AutoCompleteItem>;
          })}
        </AutoComplete>
      </InputWrapper>
    );
  }
}

InputTextComponent.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  kind: PropTypes.string,
  config: PropTypes.object,
  list: PropTypes.array,
  autocompleteList: PropTypes.array
};

InputTextComponent.defaultProps = {
  className: '',
  icon: '',
  kind: 'primary',
  config: {},
  autocompleteList: []
};

export default InputTextComponent;
