import React from "react";
import { Note, RaisedContainer } from "react-zeit-components";

export default {
  title: "Note",
  component: Note
};

export const Regular = () => (
  <RaisedContainer>
    <div>
      <Note>
        This is a note that details something important.
        <br />
        <a href="#">A link to helpful information.</a>
      </Note>
    </div>
  </RaisedContainer>
);

export const Hint = () => (
  <RaisedContainer>
    <div>
      <Note type="hint">This is a hint for something that is possible.</Note>
    </div>
  </RaisedContainer>
);

export const Alert = () => (
  <RaisedContainer>
    <div>
      <Note type="alert">
        This is an alert for something to take action for.
      </Note>
    </div>
  </RaisedContainer>
);

export const Warning = () => (
  <RaisedContainer>
    <div>
      <Note type="warning">
        This is a warning for something very important.
      </Note>
    </div>
  </RaisedContainer>
);

export const HiddenLabel = () => (
  <RaisedContainer>
    <div>
      <Note label={false}>Just a quick note!</Note>
    </div>
  </RaisedContainer>
);

export const CustomLabel = () => (
  <RaisedContainer>
    <div>
      <Note label="CUSTOM LABEL">
        This is a note that details something important.
      </Note>
      <br />
      <Note label="ANOTHER CUSTOM LABEL" type="warning">
        This is a note that details something important.
      </Note>
    </div>
  </RaisedContainer>
);
