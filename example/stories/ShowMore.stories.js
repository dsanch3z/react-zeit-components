import React from "react";
import { action } from "@storybook/addon-actions";
import {
  ShowMore as ShowMoreComponent,
  RaisedContainer
} from "react-zeit-components";

export default {
  title: "ShowMore",
  component: ShowMoreComponent
};

export const DefaultOpen = () => (
  <RaisedContainer>
    <ShowMoreComponent expanded onClick={action("Toggled")}>
      <div style={{ padding: 20, textAlign: "center" }}>
        <h1>Hey dude</h1>
        <p>I'm expanded by default</p>
      </div>
    </ShowMoreComponent>
  </RaisedContainer>
);

export const DefaultClosed = () => (
  <RaisedContainer>
    <ShowMoreComponent>
      <div style={{ padding: 20, textAlign: "center" }}>
        <h1>Hey dude</h1>
        <p>I'm hidden by default</p>
      </div>
    </ShowMoreComponent>
  </RaisedContainer>
);
