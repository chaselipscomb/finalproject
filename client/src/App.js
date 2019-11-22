/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Login from "./components/pages/Login"

class App extends Component {
  render() {
    return (
      <React.Fragment>
          <Login />
      </React.Fragment>
    );
  }
}

export default App;
