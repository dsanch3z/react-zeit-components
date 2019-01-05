import * as React from "react";
import classNames from "classnames";
import styled from "@emotion/styled";

import CheckboxSvg from "./checkbox";
import CheckboxCheckedSvg from "./checkbox-checked";

const Wrapper = styled.span`
  display: inline-flex;
  position: relative;
  &.disabled {
    cursor: not-allowed;
    & input {
      cursor: not-allowed;
    }
    & span {
      cursor: not-allowed;
    }
  }
  &.checked.disabled {
    opacity: 0.5;
  }
`;

const Input = styled.input`
  height: 0px;
  opacity: 0;
  position: absolute;
  cursor: pointer;
  width: 0px;
`;

const CheckMarkStyled = styled.span`
  cursor: pointer;
  display: inline-flex;
  height: 12px;
  width: 12px;
  outline: currentcolor none 0px;
`;

export default function Checkbox(
  props: React.InputHTMLAttributes<HTMLInputElement>,
) {
  const { checked, disabled } = props;
  const wrapperClassName = classNames({ checked, disabled });
  return (
    <label>
      <Wrapper className={wrapperClassName}>
        <Input {...props} />
        <CheckMarkStyled>
          {checked ? <CheckboxCheckedSvg /> : <CheckboxSvg />}
        </CheckMarkStyled>
      </Wrapper>
    </label>
  );
}
