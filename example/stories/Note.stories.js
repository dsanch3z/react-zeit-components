import React from "react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { Note, RaisedContainer } from "react-zeit-components";

export default {
  title: "Note",
  component: Note,
  decorators: [withKnobs]
};

export const Regular = () => (
  <RaisedContainer>
    <div>
      <Note>
        {text("Note text", "This is a note that details something important.")}
        <br />
        <a href="#">
          {text("Note link text", "A link to helpful information.")}
        </a>
      </Note>
    </div>
  </RaisedContainer>
);

export const Hint = () => (
  <RaisedContainer>
    <div>
      <Note type="hint">
        {text("Note text", "This is a hint for something that is possible.")}
      </Note>
    </div>
  </RaisedContainer>
);

export const Alert = () => (
  <RaisedContainer>
    <div>
      <Note type="alert">
        {text(
          "Note text",
          "This is an alert for something to take action for."
        )}
      </Note>
    </div>
  </RaisedContainer>
);

export const Warning = () => (
  <RaisedContainer>
    <div>
      <Note type="warning">
        {text("Note text", "This is a warning for something very important.")}
      </Note>
    </div>
  </RaisedContainer>
);

export const HiddenLabel = () => (
  <RaisedContainer>
    <div>
      <Note label={false}>{text("Note text", "Just a quick note!")}</Note>
    </div>
  </RaisedContainer>
);

export const CustomLabel = () => (
  <RaisedContainer>
    <div>
      <Note label={text("Note label text", "CUSTOM LABEL")}>
        {text("Note text", "This is a note that details something important.")}
      </Note>
      <br />
      <Note label={text("Note label text", "CUSTOM LABEL")} type="warning">
        {text("Note text", "This is a note that details something important.")}
      </Note>
    </div>
  </RaisedContainer>
);
