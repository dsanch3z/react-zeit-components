import * as React from "react";
import styled from "@emotion/styled";
import ArrowIcon from "./arrow-icon";

export interface IShowMoreProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  expanded: boolean;
  maxHeight: number | string;
}

export interface IShowMoreState {
  expanded: boolean;
}

const Wrapper = styled("div")({
  margin: "2rem 0",
});

const FlexContainer = styled("div")({
  display: "flex",
  alignItems: "center",
});

const HorizontalLine = styled("div")({
  flexGrow: 1,
  height: 1,
  backgroundColor: "rgb(234, 234, 234)",
});

const Button = styled.button({
  "boxShadow": "rgba(0, 0, 0, 0.06) 0px 4px 4px",
  "cursor": "pointer",
  "fontSize": "12px",
  "textTransform": "uppercase",
  "color": "rgb(102, 102, 102)",
  "height": 28,
  "backgroundColor": "rgb(255, 255, 255)",
  "borderWidth": 0,
  "borderStyle": "initial",
  "borderColor": "initial",
  "borderImage": "initial",
  "padding": "5px 15px",
  "borderRadius": "100px",
  "outline": 0,
  "transition": "all 0.2s ease 0s",
  "& svg": {
    marginLeft: 10,
    transition: "stroke 0.2s ease 0s, transform 0.2s ease 0s",
  },
  "&:hover": {
    color: "black",
    boxShadow: "rgba(0, 0, 0, 0.08) 0px 5px 9px",
  },
  "&:hover svg": {
    stroke: "black",
  },
});

const Content = styled("div")({
  "overflow": "hidden",
  "height": "auto",
  "transition": "max-height 0.2s ease-out",
  "maxHeight": 600,
  "&.collapsed": {
    maxHeight: 0,
  },
  "marginTop": 15,
});

export default class ShowMore extends React.Component<
  IShowMoreProps,
  IShowMoreState
> {
  public static defaultProps = {
    expanded: false,
    maxHeight: 600,
  };

  public state = {
    expanded: this.props.expanded,
  };

  public handleClick = (e: any) => {
    this.setState((state) => ({
      expanded: !state.expanded,
    }));
    if (typeof this.props.onClick === "function") {
      this.props.onClick(e);
    }
  }

  public render() {
    const { children, maxHeight } = this.props;
    const { expanded } = this.state;

    return (
      <Wrapper>
        <FlexContainer>
          <HorizontalLine />
          <Button
            className={expanded ? "up" : ""}
            {...this.props}
            onClick={this.handleClick}
          >
            {expanded ? "Show Less" : "Show More"}
            <ArrowIcon direction={expanded ? "up" : "down"} />
          </Button>
          <HorizontalLine />
        </FlexContainer>
        <Content
          className={expanded ? "" : "collapsed"}
          style={{ maxHeight: expanded ? maxHeight : 0 }}
        >
          {children}
        </Content>
      </Wrapper>
    );
  }
}
