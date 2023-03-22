import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      loggedInUsers: [],
      users: [
        { username: "user1", password: "password1" },
        { username: "user2", password: "password2" },
        { username: "user3", password: "password3" },
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

    const { username, password, users, loggedInUsers } = this.state;
    const user = users.find((user) => user.username === username);

    if (user && user.password === password) {
      if (loggedInUsers.indexOf(username) === -1) {
        this.setState({
          loggedInUsers: [...loggedInUsers, username],
        });
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
    const { loggedInUsers } = this.state;
    const index = loggedInUsers.indexOf(username);

    if (index !== -1) {
      loggedInUsers.splice(index, 1);

      this.setState({
        loggedInUsers: [...loggedInUsers],
      });
    }
  };

  render() {
    const { username, password, loggedInUsers, error } = this.state;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleLogin}>
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
        <div>
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
        </div>
        <button onClick={()=>alert("clicked")}>hi</button>
      </div>
    );
  }
}

export default Login;
