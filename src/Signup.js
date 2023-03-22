import React, { Component } from "react";

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      confirmPassword: "",
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

  handleSignup = (event) => {
    event.preventDefault();

    const { username, password, confirmPassword, users } = this.state;

    if (password !== confirmPassword) {
      this.setState({
        error: "Passwords do not match",
      });
      return;
    }

    const userExists = users.find((user) => user.username === username);

    if (userExists) {
      this.setState({
        error: "Username already exists",
      });
      return;
    }

    const newUser = {
      username: username,
      password: password,
    };

    this.setState({
      users: [...users, newUser],
      username: "",
      password: "",
      confirmPassword: "",
    });
  };

  render() {
    const { username, password, confirmPassword, error } = this.state;

    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSignup}>
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
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit">Sign Up</button>
          <div>{error}</div>
        </form>
      </div>
    );
  }
}

export default Signup;
