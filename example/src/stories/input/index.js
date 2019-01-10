import React from "react";

import { storiesOf } from "@storybook/react";

import { Input, RaisedContainer } from "react-zeit-components";

storiesOf("Input", module)
  .add("Input", () => (
    <RaisedContainer>
      <Input placeholder="Hey Dude" />
    </RaisedContainer>
  ))
  .add("Disabled", () => (
    <RaisedContainer>
      <Input placeholder="Hey Dude" disabled />
    </RaisedContainer>
  ))
  .add("Error", () => (
    <RaisedContainer>
      <Input placeholder="Hey Dude" errored />
    </RaisedContainer>
  ))
  .add("Labeled", () => (
    <RaisedContainer>
      <Input placeholder="Hey Dude" label="zeit.co/teams" />
    </RaisedContainer>
  ));
