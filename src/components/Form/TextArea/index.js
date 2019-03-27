import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TextArea = styled.textarea`
  width: 100%;
  border: none;
  outline: none;
  padding: 20px;
  font-size: 14px;
  box-shadow: none;
  height: ${(props) => props.height};
  transition: all .25s linear;
  ${(props) => !props.resize ? 'resize: none;' : ''}
  background-color: ${(props) => props.theme.form.textarea.background};
  border: 1px solid ${(props) => props.theme.form.textarea.border};
  border-radius: 2px;
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: ${(props) => props.theme.form.textarea.placeholder};
  }
  ::-moz-placeholder { /* Firefox 19+ */
    color: ${(props) => props.theme.form.textarea.placeholder};
  }
  :-ms-input-placeholder { /* IE 10+ */
    color: ${(props) => props.theme.form.textarea.placeholder};
  }
  :-moz-placeholder { /* Firefox 18- */
    color: ${(props) => props.theme.form.textarea.placeholder};
  }
  &:focus {
    border-color: ${(props) => props.theme.form.textarea.types[props.kind]};
  }
  &:disabled {
    cursor: not-allowed;
    color: ${(props) => props.theme.form.textarea.disabledText};
    background-color: ${(props) => props.theme.form.textarea.disabled};
  }
`;

/**
 * TextArea component.
 * E.g.:
 * ```html
 * <Form.TextArea kind="default" height='80px' resize />
 * ```
 */
class TextAreaComponent extends React.PureComponent {
  render() {
    const { kind, config, height, resize, children, className } = this.props;
    return (
      <TextArea className={className} kind={kind} height={height} resize={resize} {...config}>{children}</TextArea>
    );
  }
}

TextAreaComponent.propTypes = {
  children: PropTypes.node,
  kind: PropTypes.string,
  config: PropTypes.object,
  height: PropTypes.string,
  resize: PropTypes.bool,
  className: PropTypes.string
};

TextAreaComponent.defaultProps = {
  children: null,
  kind: 'primary',
  config: {},
  height: 200,
  resize: false,
  className: ''
};

export default TextAreaComponent;
