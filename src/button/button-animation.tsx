import * as React from "react";
import styled from "@emotion/styled";
import { keyframes } from "@emotion/core";

export interface IButtonAnimationProps {
  x: number | null;
  y: number | null;
  onComplete: () => any;
}

const expand = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);
  }
  30% {
    opacity: 1;
  }
  80% {
    opacity: 0.5;
  }
  100% {
    transform: scale(25);
    opacity: 0;
  }
`;

const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Svg = styled.svg`
  position: absolute;
  animation: 400ms ease-in ${expand};
  animation-fill-mode: forwards;
  width: 20px;
  height: 20px;
`;

export default class ButtonAnimation extends React.Component<
  IButtonAnimationProps
> {
  public el: HTMLDivElement | null = null;

  onElement = (el: HTMLDivElement) => {
    this.el = el;
    if (el) {
      el.addEventListener("animationend", this.onAnimationEnd);
    }
  };

  onAnimationEnd = () => {
    if (this.props.onComplete) {
      this.props.onComplete();
    }
  };

  render() {
    const { x, y } = this.props;
    return (
      <Div ref={this.onElement}>
        <Svg
          style={{
            top: y! - 10,
            left: x! - 10
          }}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g fill="#ddd">
              <rect width="100%" height="100%" rx="10" />
            </g>
          </g>
        </Svg>
      </Div>
    );
  }
}
