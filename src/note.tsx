import * as React from "react";
import styled from "@emotion/styled";

export interface INoteProps {
  label: false | string;
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
    color: rgb(6, 125, 247);
    font-size: inherit;
    cursor: pointer;
  }

  &.hint {
    border-color: rgb(6, 125, 247);
    & b {
      color: rgb(6, 125, 247);
    }
  }

  &.alert {
    border-color: rgb(244, 129, 33);
    & b {
      color: rgb(244, 129, 33);
    }
  }

  &.warning {
    border-color: rgb(255, 0, 31);
    & b {
      color: rgb(255, 0, 31);
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
