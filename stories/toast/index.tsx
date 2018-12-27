import * as React from "react";
import { storiesOf } from "@storybook/react";

import Button from "../../src/button";
import Toast from "../../src/toast";
import RaisedContainer from "../../src/raised-container";

export default class ToastStory extends React.Component<{}, { open: boolean }> {
  public state = {
    open: false,
  };

  public handleClick = () => this.setState((state) => ({ open: !state.open }));

  public render() {
    const { open } = this.state;
    return (
      <>
        <Button onClick={this.handleClick}>Show toast</Button>
        {open ? <Toast>The Evil Rabbit jumped over the fence.</Toast> : null}
      </>
    );
  }
}

storiesOf("Toast", module).add("Toast", () => (
  <RaisedContainer>
    <ToastStory />
  </RaisedContainer>
));
