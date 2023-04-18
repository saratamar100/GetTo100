import "./App.css";
import React, { Component } from "react";
import GetTo100 from "./GetTo100";
import Login from "./Login";
import Signup from "./Signup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { page: "signup", history: [], loggedInUsers: [] };
  }

  handleChangePage = (page) => {
    this.setState({
      page,
    });
  };
  handleChangeUsers = (loggedInUsers) => {
    this.setState({ loggedInUsers });
  };
  render() {
    if (this.state.page === "login") {
      return (
        <Login
          login={() => this.handleChangePage("game")}
          changeUsers={this.handleChangeUsers}
          loggedInUsers={this.state.loggedInUsers}
          signup={() => this.handleChangePage("signup")}
        />
      );
    } else if (this.state.page === "signup") {
      return <Signup login={() => this.handleChangePage("login")} />;
    } else if (this.state.page === "game") {
      return <GetTo100 users={this.state.loggedInUsers} />;
    }
    return null;
  }
}

export default App;
