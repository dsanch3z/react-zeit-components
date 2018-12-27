import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

import ToastContext from "./context";

interface IToastProviderState {
  portal: HTMLElement;
  visible: boolean;
  collapsed: boolean;
}

const ToastArea = styled.div.attrs({
  id: "react-zeit-components-toast-area",
})`
  position: fixed;
  bottom: 10px;
  right: 20px;
  max-width: 420px;
  z-index: 2000;
  transition: transform 0.4s ease 0s;
`;

class ToastProvider extends React.Component<{}, IToastProviderState> {
  public state = {
    portal: document.getElementById("react-zeit-components-toast-portal"),
    visible: false,
    collapsed: true,
  };

  public render() {
    const { portal, visible } = this.state;
    return portal ? (
      <ToastContext.Provider
        value={{
          visible,
          show: this.show,
          portal: portal.firstChild as HTMLElement,
        }}
      >
        {this.props.children}
      </ToastContext.Provider>
    ) : null;
  }

  public componentDidMount() {
    const { portal } = this.state;

    if (!portal) {
      const div = this.createPortalContainer();
      ReactDOM.render(<ToastArea />, div, () => this.setState({ portal: div }));
    }
  }

  public show = () => this.setState({ visible: true });

  private createPortalContainer() {
    const div = document.createElement("div");
    div.setAttribute("id", "react-zeit-components-toast-portal");
    document.body.append(div);
    return div;
  }
}

export default ToastProvider;
