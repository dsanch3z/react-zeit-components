import * as React from "react";
import styled from "@emotion/styled";

const Span = styled.span`
  display: inline-block;
  line-height: 0;
  vertical-align: top;
  border-radius: 100%;
  overflow: hidden;
  border: 1px solid rgb(238, 238, 238);
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Avatar: React.SFC<React.ImgHTMLAttributes<HTMLImageElement>> = props => (
  <Span style={{ width: props.width, height: props.height }}>
    <Img {...props} />
  </Span>
);

Avatar.defaultProps = {
  width: 30,
  height: 30
};

export default Avatar;
