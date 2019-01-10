import * as React from "react";
import styled from "@emotion/styled";

export interface IArrowIconProps extends React.SVGAttributes<SVGElement> {
  direction: "up" | "down";
}

const ArrowIconStyled = styled.svg`
  &.up {
    transform: translateY(-1px) rotate(180deg);
  }
`;

const ArrowIcon: React.SFC<IArrowIconProps> = ({ direction }) => (
  <ArrowIconStyled
    width={13}
    height={6}
    fill="none"
    stroke="#979797"
    className={direction}
  >
    <path d="M1.367.375l5.185 5.303M11.685.375L6.5 5.678" />
  </ArrowIconStyled>
);

ArrowIcon.defaultProps = {
  direction: "down"
};

export default ArrowIcon;
