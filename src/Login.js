import React, { Component } from "react";
import "./Login.css";
import CartIcon from "../src/media/kubiya.jpg";

class Login extends Component {
  constructor(props) {
    super(props);
    let users = [];
    let usersJson = localStorage.getItem("users100");
    if (usersJson) {
      users = JSON.parse(usersJson);
    } else {
      localStorage.setItem("users100", JSON.stringify([]));
    }
    this.state = {
      username: "",
      password: "",
      //loggedInUsers: [],
      users,
      error: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
      error: "",
    });
  };

  handleLogin = (event) => {
    event.preventDefault();

    const { password, users } = this.state;
    let username = this.state.username.trim();
    const { loggedInUsers } = this.props;
    const user = users.find((user) => user.username === username);

    if (user && user.password === password) {
      if (loggedInUsers.indexOf(username) === -1) {
        this.props.changeUsers([...loggedInUsers, username]);
      }

      this.setState({
        username: "",
        password: "",
      });
    } else {
      this.setState({
        error: "Invalid username or password",
      });
    }
  };

  handleLogout = (username) => {
    const { loggedInUsers } = this.props;
    const index = loggedInUsers.indexOf(username);

    if (index !== -1) {
      loggedInUsers.splice(index, 1);
      this.props.changeUsers([...loggedInUsers]);
    }
  };

  handleLoginAll = () => {
    const num = this.props.loggedInUsers.length;
    if (num < 2 || num > 4) {
      alert("Please enter between 2 and 4 players");
    } else {
      this.props.login();
    }
  };

  render() {
    const { username, password, error } = this.state;
    const { loggedInUsers } = this.props;

    return (
      <div className="class_login">
        <h1 className="Header">Login</h1>
        <img className="kubiyaR" src={CartIcon} />
        <img className="kubiyaL" src={CartIcon} />
        <div className="flex_continer">
          <form className="form_login" onSubmit={this.handleLogin}>
            <h5>Please enter the username and password of each player: </h5>
            <div>
              <label className="lable_username" htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label className="lable_password" htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
              />
            </div>
            <button className="button_login" type="submit">Login</button>
            <div>{error}</div>
          </form>
          <div className="Logged_in_users">
            <h4>Logged in users:</h4>
            <ul>
              {loggedInUsers.map((username) => (
                <li key={username}>
                  {username} {" "}
                  <button onClick={() => this.handleLogout(username)}>
                    Logout
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="buttons_flex_contiener">
          <button className="button_enter" onClick={this.handleLoginAll}>Enter</button>
          <button className="button_sign_up" onClick={this.props.signup}>Sign Up</button>
        </div>
      </div>
    );
  }
}

export default Login;
