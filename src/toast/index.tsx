import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

import ToastProvider from "./provider";
import ToastConsumer from "./consumer";

const ToastContainer = styled.div`
  width: 420px;
  height: 72px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  transform: translate3d(0px, 100%, 0px) scale(1);
  opacity: 1;
  transition: all 0.4s ease 0s;
  animation: show-jsx-1285904019 0.4s ease 0s 1 normal forwards running;

  &.visible {
    transform: translate3d(0px, 0px, 0px) scale(1);
  }
`;

const Toast = styled.div`
  width: 420px;
  color: black;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 4px 9px;
  font-size: 14px;
  display: flex;
  background: white;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 5px;
  padding: 0px 20px;
  transition: all 0.4s ease 0s;
`;

export default class ToastComponent extends React.Component {
  public render() {
    return (
      <ToastConsumer>
        {({ portal }) =>
          ReactDOM.createPortal(
            <ToastContainer className="visible">
              <Toast>{this.props.children}</Toast>
            </ToastContainer>,
            portal,
          )}
      </ToastConsumer>
    );
  }
}
