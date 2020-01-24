import React, { Component, useState } from "react";
import { action } from "@storybook/addon-actions";
import { Checkbox, RaisedContainer } from "react-zeit-components";

export default {
  title: "Checkbox",
  component: Checkbox
};

export const Regular = () => {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <RaisedContainer>
      <div>
        <Checkbox
          name="checkbox1"
          onChange={() => {
            setChecked1(!checked1);
            action("Toggled");
          }}
          checked={checked1}
        />
      </div>
      <div>
        <Checkbox
          name="checkbox2"
          onChange={() => {
            setChecked2(!checked2);
            action("Toggled");
          }}
          checked={checked2}
        />
      </div>
    </RaisedContainer>
  );
};

export const Disabled = () => (
  <RaisedContainer>
    <Checkbox name="checkbox3" checked={false} disabled />
    <br />
    <Checkbox name="checkbox4" checked={true} disabled />
  </RaisedContainer>
);
