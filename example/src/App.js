import React, { Component } from "react";

import { Button, RaisedContainer, GlobalStyles } from "react-zeit-components";

export default class App extends Component {
  render() {
    return (
      <div>
        <GlobalStyles />
        <RaisedContainer style={{ margin: 250, padding: 40 }}>
          <div>
            <div>
              <Button>Action</Button>
            </div>
            <br />
            <div>
              <Button size="sm">Action</Button>
            </div>
          </div>
        </RaisedContainer>
      </div>
    );
  }
}
