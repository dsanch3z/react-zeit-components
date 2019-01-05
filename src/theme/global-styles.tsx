import { createGlobalStyle } from "@emotion/styled";

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
  "sans-serif",
];

export default createGlobalStyle`
  html {
    height: 100%;
    box-sizing: border-box;
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

  *, ::before, ::after {
    box-sizing: inherit;
  }

  ::selection {
    background-color: #79FFE1;
    color: #000;
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
    color: rgb(153, 153, 153);
    text-transform: uppercase;
  }
`;
