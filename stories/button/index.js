import React from "react";

import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Button, RaisedContainer } from "../../src";

storiesOf("Button", module)
  .add("Primary", () => (
    <RaisedContainer>
      <div>
        <Button onClick={action("clicked")}>Action</Button>
      </div>
      <br />
      <div>
        <Button size="sm" onClick={action("clicked")}>
          Action
        </Button>
      </div>
    </RaisedContainer>
  ))
  .add("Secondary", () => (
    <RaisedContainer>
      <div>
        <Button color="secondary" onClick={action("clicked")}>
          Action
        </Button>
      </div>
      <br />
      <div>
        <Button color="secondary" size="sm" onClick={action("clicked")}>
          Action
        </Button>
      </div>
    </RaisedContainer>
  ))
  .add("Disabled", () => (
    <RaisedContainer>
      <div>
        <Button onClick={action("clicked")} disabled>
          Action
        </Button>
      </div>
      <br />
      <div>
        <Button size="sm" onClick={action("clicked")} disabled>
          Action
        </Button>
      </div>
    </RaisedContainer>
  ))
  .add("Loading", () => (
    <RaisedContainer>
      <div>
        <Button onClick={action("clicked")} loading>
          Action
        </Button>
      </div>
      <br />
      <div>
        <Button size="sm" onClick={action("clicked")} loading>
          Action
        </Button>
      </div>
    </RaisedContainer>
  ))
  .add("Abort", () => (
    <RaisedContainer>
      <div>
        <Button color="abort" onClick={action("clicked")}>
          Action
        </Button>
      </div>
      <br />
      <div>
        <Button color="abort" size="sm" onClick={action("clicked")}>
          Action
        </Button>
      </div>
    </RaisedContainer>
  ))
  .add("Danger", () => (
    <RaisedContainer>
      <div>
        <Button color="danger" onClick={action("clicked")}>
          Action
        </Button>
      </div>
      <br />
      <div>
        <Button color="danger" size="sm" onClick={action("clicked")}>
          Action
        </Button>
      </div>
    </RaisedContainer>
  ))
  .add("Highlight", () => (
    <RaisedContainer>
      <div>
        <Button color="highlight" onClick={action("clicked")}>
          Action
        </Button>
      </div>
      <br />
      <div>
        <Button color="highlight" size="sm" onClick={action("clicked")}>
          Action
        </Button>
      </div>
    </RaisedContainer>
  ))
  .add("Raised", () => (
    <RaisedContainer>
      <div>
        <Button onClick={action("clicked")} raised>
          Action
        </Button>
      </div>
    </RaisedContainer>
  ));
