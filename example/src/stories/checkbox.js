import React, { Component, Fragment } from "react";
import { storiesOf } from "@storybook/react";
import { Checkbox, RaisedContainer } from "react-zeit-components";

class CheckboxStory extends Component {
  state = {
    checkbox1: false,
    checkbox2: true,
    checkbox3: false,
    checkbox4: true
  };

  handleChange = e => {
    const { name } = e.target;
    this.setState(state => ({
      [name]: !state[name]
    }));
  };

  render() {
    const { checkbox1, checkbox2, checkbox3, checkbox4 } = this.state;
    return (
      <Fragment>
        <RaisedContainer>
          <div>
            <Checkbox
              name="checkbox1"
              onChange={this.handleChange}
              checked={checkbox1}
            />
          </div>
          <div>
            <Checkbox
              name="checkbox2"
              onChange={this.handleChange}
              checked={checkbox2}
            />
          </div>
        </RaisedContainer>

        <RaisedContainer>
          <div>
            <Checkbox name="checkbox3" checked={checkbox3} disabled />
          </div>
          <div>
            <Checkbox name="checkbox4" checked={checkbox4} disabled />
          </div>
        </RaisedContainer>
      </Fragment>
    );
  }
}

storiesOf("Checkbox", module).add("Checkbox", () => <CheckboxStory />);
