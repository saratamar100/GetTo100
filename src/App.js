import "./App.css";
import React, { Component } from "react";
import GetTo100 from "./GetTo100";
import Login from "./Login";
import Signup from "./Signup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "login", history: [], users:[] };
  }

  handleLogin = () => {
    this.setState({
      page: "game",
    });
  };
  handleChangeUsers = (users) => {
    this.setState({users});
  };
  render() {
    if (this.state.page === "login") {
      return <Login login={this.handleLogin} changeUsers={this.handleChangeUsers} />;
    } else if (this.state.page === "signup") {
      return <Signup />;
    } else if (this.state.page === "game") {
      return <GetTo100 users={this.state.users}/>;
    }
    return null;
  }
}

export default App;
