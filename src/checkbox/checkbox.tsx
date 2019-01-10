import * as React from "react";
import styled from "@emotion/styled";

const Svg = styled.svg`
  &:hover {
    & rect {
      stroke: #000;
    }
  }
`;

export default () => (
  <Svg width={12} height={12}>
    <rect
      stroke="#999"
      x={0.5}
      y={0.5}
      width={11}
      height={11}
      rx={3}
      fill="none"
      fillRule="evenodd"
    />
  </Svg>
);
