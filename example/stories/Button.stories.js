import React from "react";
import { action } from "@storybook/addon-actions";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Button } from "react-zeit-components";

export default {
  title: "Button",
  component: Button,
  decorators: [withKnobs]
};

export const Emoji = () => (
  <Button onClick={action("clicked")}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
);

export const Primary = () => (
  <div>
    <Button onClick={action("clicked")}>{text("Button text", "Action")}</Button>
    <br />
    <Button size="sm" onClick={action("clicked")}>
      {text("Button text", "Action")}
    </Button>
  </div>
);

export const Secondary = () => (
  <div>
    <Button color="secondary" onClick={action("clicked")}>
      {text("Button text", "Action")}
    </Button>
    <br />
    <Button color="secondary" size="sm" onClick={action("clicked")}>
      {text("Button text", "Action")}
    </Button>
  </div>
);

export const Disabled = () => (
  <div>
    <Button onClick={action("clicked")} disabled>
      {text("Button text", "Action")}
    </Button>
    <br />
    <Button size="sm" onClick={action("clicked")} disabled>
      {text("Button text", "Action")}
    </Button>
  </div>
);

export const Loading = () => (
  <div>
    <Button onClick={action("clicked")} loading>
      Action
    </Button>
    <br />
    <Button size="sm" onClick={action("clicked")} loading>
      Action
    </Button>
  </div>
);

export const Abort = () => (
  <div>
    <Button color="abort" onClick={action("clicked")}>
      {text("Button text", "Action")}
    </Button>
    <br />
    <Button color="abort" size="sm" onClick={action("clicked")}>
      {text("Button text", "Action")}
    </Button>
  </div>
);

export const Danger = () => (
  <div>
    <Button color="danger" onClick={action("clicked")}>
      {text("Button text", "Action")}
    </Button>
    <br />
    <Button color="danger" size="sm" onClick={action("clicked")}>
      {text("Button text", "Action")}
    </Button>
  </div>
);

export const Highlight = () => (
  <div>
    <Button color="highlight" onClick={action("clicked")}>
      {text("Button text", "Action")}
    </Button>
    <br />
    <Button color="highlight" size="sm" onClick={action("clicked")}>
      {text("Button text", "Action")}
    </Button>
  </div>
);

export const Raised = () => (
  <div>
    <Button onClick={action("clicked")} raised>
      {text("Button text", "Action")}
    </Button>
  </div>
);
