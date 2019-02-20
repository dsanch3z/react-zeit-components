import * as React from "react";
import styled from "@emotion/styled";

export interface INoteProps {
  label?: false | string;
  type: "note" | "hint" | "alert" | "warning";
  children: any;
}

const Div = styled.div`
  padding: 16px 24px;
  border-radius: 4px;
  background: white none repeat scroll 0% 0%;
  border: 1px solid rgb(221, 221, 221);
  font-size: 14px;
  line-height: 1.8;
  & b {
    text-transform: uppercase;
    font-weight: 500;
  }

  & a {
    text-decoration: none;
    color: var(--highlight);
    font-size: inherit;
    cursor: pointer;
  }

  &.hint {
    border-color: var(--highlight);
    & b {
      color: var(--highlight);
    }
  }

  &.alert {
    border-color: var(--alert);
    & b {
      color: var(--alert);
    }
  }

  &.warning {
    border-color: var(--warning);
    & b {
      color: var(--warning);
    }
  }
`;

const Note: React.SFC<INoteProps> = props => {
  const { label, type, children } = props;
  return (
    <Div className={type}>
      {label === false ? null : <b>{label || type.toUpperCase()}:</b>}{" "}
      {children}
    </Div>
  );
};

Note.defaultProps = {
  type: "note"
};

export default Note;
