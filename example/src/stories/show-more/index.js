import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { RaisedContainer, ShowMore } from "react-zeit-components";

storiesOf("ShowMore", module).add("ShowMore", () => (
  <RaisedContainer>
    <ShowMore>
      <div style={{ padding: 20, textAlign: "center" }}>
        <h1>Hey dude</h1>
        <p>I'm hidden by default</p>
      </div>
    </ShowMore>

    <ShowMore expanded onClick={action("Clicked")}>
      <div style={{ padding: 20, textAlign: "center" }}>
        <h1>Hey dude</h1>
        <p>I'm expanded by default</p>
      </div>
    </ShowMore>
  </RaisedContainer>
));
