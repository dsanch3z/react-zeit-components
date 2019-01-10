import React, { Fragment } from "react";
import { configure, addDecorator } from "@storybook/react";
import { GlobalStyles } from "react-zeit-components";

function loadStories() {
  require("../src/stories/index.stories");
}

addDecorator(story => (
  <Fragment>
    <GlobalStyles />
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#fafafa",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div
        style={{
          flex: 1,
          maxWidth: 600
        }}
      >
        {story()}
      </div>
    </div>
  </Fragment>
));

configure(loadStories, module);
