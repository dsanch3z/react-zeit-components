import { Context, createContext, ReactElement } from "react";
import { IToastContainerButtonProps } from "./toast-container";

export interface IToastContext {
  collapsed: boolean;
  toasts: Array<ReactElement<any>>;
  show: (message: string, buttonProps?: IToastContainerButtonProps) => any;
}

const context: Context<IToastContext> = createContext<IToastContext>({
  collapsed: true,
  toasts: [],
  show: () => null
});

export default context;
