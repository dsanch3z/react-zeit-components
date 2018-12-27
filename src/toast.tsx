import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

interface IToastAreaPortalProps {
  children: (el: HTMLElement) => any;
}

interface IToastAreaPortalState {
  el: HTMLElement;
}

export const ToastArea = styled.div.attrs({
  id: "react-zeit-components-toast-area",
})`
  position: fixed;
  bottom: 10px;
  right: 20px;
  max-width: 420px;
  z-index: 2000;
  transition: transform 0.4s ease 0s;
`;

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

class ToastAreaPortal extends React.PureComponent<
  IToastAreaPortalProps,
  IToastAreaPortalState
> {
  public state = {
    el: document.getElementById("react-zeit-components-toast-portal"),
  };

  public componentDidMount() {
    const { el } = this.state;

    if (!el) {
      const div = this.createPortalContainer();
      ReactDOM.render(<ToastArea />, div, () => this.setState({ el: div }));
    }
  }

  public render() {
    const { el } = this.state;
    return el ? this.props.children(el.firstChild as HTMLElement) : null;
  }

  private createPortalContainer() {
    const div = document.createElement("div");
    div.setAttribute("id", "react-zeit-components-toast-portal");
    document.body.append(div);
    return div;
  }
}

export default class ToastComponent extends React.Component {
  public div: HTMLElement = document.createElement("div");
  public portalContainer = document.getElementById(
    "react-zeit-components-toast-area",
  );

  public render() {
    return (
      <ToastAreaPortal>
        {(el) =>
          ReactDOM.createPortal(
            <ToastContainer className="visible">
              <Toast>{this.props.children}</Toast>
            </ToastContainer>,
            el,
          )
        }
      </ToastAreaPortal>
    );
  }
}
