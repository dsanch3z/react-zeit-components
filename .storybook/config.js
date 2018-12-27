import React, { Fragment } from "react";
import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { checkA11y } from "@storybook/addon-a11y";
import { withKnobs } from "@storybook/addon-knobs";

import GlobalStyles from "../src/theme/global-styles";

// automatically import all files ending in *.stories.js
const req = require.context("../stories", true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(withInfo);
addDecorator(checkA11y);
addDecorator(withKnobs);

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
