import { ExoticComponent, ConsumerProps } from "react";
import context, { IToastContext } from "./context";

const ToastConsumer: ExoticComponent<ConsumerProps<IToastContext>> =
  context.Consumer;

export default ToastConsumer;
