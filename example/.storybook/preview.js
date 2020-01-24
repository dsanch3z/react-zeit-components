import React, { Fragment } from "react";
import { addDecorator } from "@storybook/react";
import { GlobalStyles } from "react-zeit-components";

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
