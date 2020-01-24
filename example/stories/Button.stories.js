import React from "react";
import { action } from "@storybook/addon-actions";
import { Button } from "react-zeit-components";

export default {
  title: "Button",
  component: Button
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
    <Button onClick={action("clicked")}>Action</Button>
    <br />
    <Button size="sm" onClick={action("clicked")}>
      Action
    </Button>
  </div>
);

export const Secondary = () => (
  <div>
    <Button color="secondary" onClick={action("clicked")}>
      Action
    </Button>
    <br />
    <Button color="secondary" size="sm" onClick={action("clicked")}>
      Action
    </Button>
  </div>
);

export const Disabled = () => (
  <div>
    <Button onClick={action("clicked")} disabled>
      Action
    </Button>
    <br />
    <Button size="sm" onClick={action("clicked")} disabled>
      Action
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
      Action
    </Button>
    <br />
    <Button color="abort" size="sm" onClick={action("clicked")}>
      Action
    </Button>
  </div>
);

export const Danger = () => (
  <div>
    <Button color="danger" onClick={action("clicked")}>
      Action
    </Button>
    <br />
    <Button color="danger" size="sm" onClick={action("clicked")}>
      Action
    </Button>
  </div>
);

export const Highlight = () => (
  <div>
    <Button color="highlight" onClick={action("clicked")}>
      Action
    </Button>
    <br />
    <Button color="highlight" size="sm" onClick={action("clicked")}>
      Action
    </Button>
  </div>
);

export const Raised = () => (
  <div>
    <Button onClick={action("clicked")} raised>
      Action
    </Button>
  </div>
);
