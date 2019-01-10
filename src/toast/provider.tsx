import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "@emotion/styled";

import ToastContext from "./context";
import ToastContainer from "./toast-container";

interface IToastProviderState {
  collapsed: boolean;
  visible: boolean;
  toasts: string[];
  portal: null | HTMLElement;
}

const ToastArea = styled.div`
  position: fixed;
  bottom: 10px;
  right: 20px;
  max-width: 420px;
  z-index: 2000;
  transition: transform 0.4s ease 0s;

  & .visible:nth-last-child(1) {
    transform: translate3d(0px, 0px, 0px) scale(1);
  }
  & .visible:nth-last-child(2) {
    transform: translate3d(0px, -15px, -1px) scale(0.95);
  }
  & .visible:nth-last-child(3) {
    transform: translate3d(0px, -30px, -2px) scale(0.9);
  }

  & .visible:nth-last-child(n + 4) {
    opacity: 0;
    pointer-events: none;
  }

  &:hover {
    transform: translate3d(0px, -10px, 0px);
    & .visible:nth-last-child(1) {
      transform: translate3d(0px, 0px, 0px) scale(0.98205);
    }
    & .visible:nth-last-child(2) {
      transform: translate3d(0px, -70px, -1px) scale(0.98205);
    }
    & .visible:nth-last-child(3) {
      transform: translate3d(0px, -140px, -2px) scale(0.98205);
    }
  }
`;

class ToastProvider extends React.Component<{}, IToastProviderState> {
  public toastsVisibleTimeoutId: any = null;

  public state = {
    toasts: [],
    visible: false,
    collapsed: true,
    portal: document.getElementById("react-zeit-components-toast-portal")
  };

  public render() {
    const { toasts, visible, collapsed, portal } = this.state;
    return portal ? (
      <ToastContext.Provider
        value={{
          toasts,
          collapsed,
          show: this.show
        }}
      >
        {this.props.children}
        {visible}
        {ReactDOM.createPortal(
          <>
            {toasts.map((message, i) => (
              <ToastContainer key={i}>{message}</ToastContainer>
            ))}
          </>,
          portal.firstChild as HTMLElement
        )}
      </ToastContext.Provider>
    ) : null;
  }

  public componentDidMount() {
    const { portal } = this.state;

    if (!portal) {
      const div = this.createPortalContainer();
      ReactDOM.render(
        <ToastArea
          id="react-zeit-components-toast-area"
          onMouseEnter={() => console.log("mouseenter")}
          onMouseLeave={() => console.log("mouseleave")}
        />,
        div,
        () => this.setState({ portal: div })
      );
    }
  }

  public handleMouseEnter = () => this.setState({ collapsed: false });
  public handleMouseLeave = () => this.setState({ collapsed: true });

  public show = (message: string) => {
    this.setState(
      state => ({
        visible: true,
        toasts: state.toasts.concat(message)
      }),
      () => {
        clearTimeout(this.toastsVisibleTimeoutId);
        this.toastsVisibleTimeoutId = setTimeout(
          () => this.setState({ visible: false }),
          5000
        );
      }
    );
  };

  private createPortalContainer() {
    const div = document.createElement("div");
    div.setAttribute("id", "react-zeit-components-toast-portal");
    document.body.appendChild(div);
    return div;
  }
}

export default ToastProvider;
