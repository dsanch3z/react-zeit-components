import * as React from "react";
import styled from "styled-components";

export interface IArrowIconProps extends React.SVGAttributes<SVGElement> {
  direction: "up" | "down";
}

const ArrowIconStyled = styled.svg.attrs({
  width: 13,
  height: 6,
  fill: "none",
  stroke: "#979797",
})`
  &.up {
    transform: translateY(-1px) rotate(180deg);
  }
`;

export default function ArrowIcon({ direction }: IArrowIconProps) {
  return (
    <ArrowIconStyled className={direction}>
      <path d="M1.367.375l5.185 5.303M11.685.375L6.5 5.678" />
    </ArrowIconStyled>
  );
}

ArrowIcon.defaultProps = {
  direction: "down",
};
