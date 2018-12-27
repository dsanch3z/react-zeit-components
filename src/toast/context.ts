import * as React from "react";

interface IToastContext {
  portal: HTMLElement;
  show: () => any;
  visible: boolean;
}

export default React.createContext<IToastContext>({
  portal: null,
  show: () => null,
  visible: false,
});
