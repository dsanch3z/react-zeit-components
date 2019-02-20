import * as React from "react";
import { Global, css, SerializedStyles } from "@emotion/core";

import theme from "./index";

interface IGlobalStylesProps {
  overrides: string | SerializedStyles;
}

const fonts = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  "sans-serif"
];

const GlobalStyles = ({ overrides }: IGlobalStylesProps) => (
  <Global
    styles={css`
      :root {
        --primary: #000;
        --secondary: #fff;
        --highlight: #007aff;
        --danger: #eb5757;
        --warning: rgb(255, 0, 31);
        --alert: rgb(244, 129, 33);
        --selection-bg: #79ffe1;
        --selection-color: #000;
      }

      body {
        font-family: ${fonts.join(",")};
        box-sizing: border-box;
        color: rgb(0, 0, 0);
        font-size: 14px;
        font-weight: 400;
        line-height: 24px;
        text-rendering: optimizelegibility;
        background: #fafafa;
      }

      *,
      ::before,
      ::after {
        box-sizing: inherit;
      }

      ::selection {
        background-color: var(--selection-bg);
        color: var(--selection-color);
      }

      p {
        font-weight: 400;
        font-size: 14px;
        line-height: 24px;
      }

      h1 {
        font-weight: 400;
        font-size: 32px;
        line-height: 42px;
      }

      h2 {
        font-weight: 400;
        font-size: 24px;
      }

      h3 {
        font-weight: bold;
        font-size: 18px;
      }

      h4 {
        font-weight: bold;
        font-size: 16px;
      }

      .subheading {
        font-weight: 400;
        font-size: 14px;
        line-height: 16px;
        color: ${theme.accent[2]};
        text-transform: uppercase;
      }

      ${overrides}
    `}
  />
);

export default GlobalStyles;
