import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Input, RaisedContainer } from "react-zeit-components";

export default {
  title: "Input",
  component: Input,
  decorators: [withKnobs]
};

export const Regular = () => (
  <RaisedContainer>
    <Input placeholder={text("Placeholder", "Some placeholder")} />
  </RaisedContainer>
);

export const Disabled = () => (
  <RaisedContainer>
    <Input placeholder={text("Placeholder", "Some placeholder")} disabled />
  </RaisedContainer>
);

export const Error = () => (
  <RaisedContainer>
    <Input placeholder={text("Placeholder", "Some placeholder")} errored />
  </RaisedContainer>
);

export const Labeled = () => (
  <RaisedContainer>
    <Input
      placeholder={text("Placeholder", "Some placeholder")}
      label={text("Label", "zeit.co/teams")}
    />
  </RaisedContainer>
);
