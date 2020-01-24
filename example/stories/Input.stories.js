import React from "react";
import { Input, RaisedContainer } from "react-zeit-components";

export default {
  title: "Input",
  component: Input
};

export const Regular = () => (
  <RaisedContainer>
    <Input placeholder="Hey Dude" />
  </RaisedContainer>
);

export const Disabled = () => (
  <RaisedContainer>
    <Input placeholder="Hey Dude" disabled />
  </RaisedContainer>
);

export const Error = () => (
  <RaisedContainer>
    <Input placeholder="Hey Dude" errored />
  </RaisedContainer>
);

export const Labeled = () => (
  <RaisedContainer>
    <Input placeholder="Hey Dude" label="zeit.co/teams" />
  </RaisedContainer>
);
