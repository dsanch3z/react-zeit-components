import * as React from "react";
import classNames from "classnames";
import styled from "styled-components";

export interface IInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  errored: boolean;
}

export interface IInputState {
  focused: boolean;
}

const Wrapper = styled.div`
  align-items: center;
  display: inline-flex;
  height: 37px;
  position: relative;
  vertical-align: middle;
  width: initial;
  border-radius: 5px;
  border: 1px solid rgb(225, 225, 225);
  transition: border 0.2s ease 0s, color 0.2s ease 0s;

  &.focused {
    border: 1px solid rgb(136, 136, 136);
  }
  &.disabled {
    background: rgb(250, 250, 250) none repeat scroll 0% 0%;
  }
  &.errored {
    border: 1px solid red;
  }
  &.inner-input {
    border-bottom-left-radius: 0px;
    border-top-left-radius: 0px;
    flex: 1 1 0%;
  }
`;

const InputWrapper = styled.div`
  display: block;
  margin: 4px 10px;
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  background-color: transparent;
  border-radius: 0px;
  border: medium none;
  box-shadow: none;
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  line-height: 27px;
  outline: currentcolor none 0px;
  width: 100%;
  &.disabled {
    background: rgb(250, 250, 250) none repeat scroll 0% 0%;
    color: rgb(153, 153, 153);
    cursor: not-allowed;
  }
  &.errored {
    color: red;
  }
`;

const LabeledInputWrapper = styled.div`
  display: inline-flex;
  width: initial;
`;

const Label = styled.span`
  background-color: rgb(250, 250, 250);
  border: 1px solid rgb(225, 225, 225);
  border-right: none;
  border-radius: 5px 0 0 5px;
  color: rgb(155, 155, 155);
  font-size: 14px;
  line-height: 1;
  margin: 0px;
  padding: 10px;
  pointer-events: none;
  width: initial;
`;

export default class Input extends React.Component<IInputProps, IInputState> {
  public state = {
    focused: false,
  };

  public handleFocus = (e: any) => {
    this.setState({ focused: true });
    if (typeof this.props.onFocus === "function") {
      this.props.onFocus(e);
    }
  }

  public handleBlur = (e: any) => {
    this.setState({ focused: false });
    if (typeof this.props.onBlur === "function") {
      this.props.onBlur(e);
    }
  }

  public render() {
    const { disabled, errored, label } = this.props;
    const { focused } = this.state;

    const Container = label ? LabeledInputWrapper : React.Fragment;
    const wrapperClassName = classNames({
      focused,
      disabled,
      errored,
      "inner-input": Boolean(label),
    });
    return (
      <Container>
        {label ? <Label>{label}</Label> : null}
        <Wrapper className={wrapperClassName}>
          <InputWrapper>
            <StyledInput
              className={classNames({ disabled, errored })}
              {...this.props}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
          </InputWrapper>
        </Wrapper>
      </Container>
    );
  }
}
