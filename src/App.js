import "./App.css";
import React, { Component } from "react";
import GetTo100 from "./GetTo100";
import Login from "./Login";
import Signup from "./Signup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "signup", history: [] };
  }
  render() {
    if (this.state.page === "login") {
      return <Login />;
    } else if (this.state.page === "signup") {
      return <Signup />;
    } else if (this.state.page === "game") {
      return <GetTo100 />;
    }
    return null;
  }
}

export default App;
