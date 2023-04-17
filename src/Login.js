import React, { Component } from "react";
import "./Login.css"

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      //loggedInUsers: [],
      users: [
        { username: "user1", password: "1" },
        { username: "user2", password: "2" },
        { username: "user3", password: "3" },
        { username: "user4", password: "4" },
      ],
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

    const { username, password, users } = this.state;
    const {loggedInUsers} = this.props;
    const user = users.find((user) => user.username === username);

    if (user && user.password === password) {
      if (loggedInUsers.indexOf(username) === -1) {
        this.props.changeUsers([...loggedInUsers,username]);
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

  render() {
    const { username, password, error } = this.state;
    const {loggedInUsers} = this.props;

    return (
      <div className="class_login">
        <h1>Login</h1>
        <div className="flex_continer">
          <form className="form_login" onSubmit={this.handleLogin}>
            <div>
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={this.handleInputChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
              />
            </div>
            <button type="submit">Login</button>
            <div>{error}</div>
          </form>
          <div className="Logged_in_users">
            <h2>Logged in users:</h2>
            <ul>
              {loggedInUsers.map((username) => (
                <li key={username}>
                  {username}
                  <button onClick={() => this.handleLogout(username)}>
                    Logout
                  </button>
                </li>
              ))}
            </ul>
            <div>
              <button onClick={this.props.login}>enter</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;