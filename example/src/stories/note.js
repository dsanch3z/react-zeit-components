import React from "react";
import { storiesOf } from "@storybook/react";
import { Note, RaisedContainer } from "react-zeit-components";

storiesOf("Note", module)
  .add("Note", () => (
    <RaisedContainer>
      <div>
        <Note>
          This is a note that details something important.
          <br />
          <a href="#">A link to helpful information.</a>
        </Note>
      </div>
    </RaisedContainer>
  ))
  .add("Hint", () => (
    <RaisedContainer>
      <div>
        <Note type="hint">This is a hint for something that is possible.</Note>
      </div>
    </RaisedContainer>
  ))
  .add("Alert", () => (
    <RaisedContainer>
      <div>
        <Note type="alert">
          This is an alert for something to take action for.
        </Note>
      </div>
    </RaisedContainer>
  ))
  .add("Warning", () => (
    <RaisedContainer>
      <div>
        <Note type="warning">
          This is a warning for something very important.
        </Note>
      </div>
    </RaisedContainer>
  ))
  .add("Hidden label", () => (
    <RaisedContainer>
      <div>
        <Note label={false}>Just a quick note!</Note>
      </div>
    </RaisedContainer>
  ))
  .add("Custom label", () => (
    <RaisedContainer>
      <div>
        <Note label="LABEL">
          This is a note that details something important.
        </Note>
        <br />
        <Note label="LABEL" type="warning">
          This is a note that details something important.
        </Note>
      </div>
    </RaisedContainer>
  ));
