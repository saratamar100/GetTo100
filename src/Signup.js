import React, { Component } from "react";
import "./SignUp.css";
import CartIcon from '../src/media/kubiya.jpg';

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
      <div className="class_SignUp"> 
        <h1 className="Header">Sign Up</h1>
        <img className="kubiyaR" src={CartIcon}/>
        <img className="kubiyaL" src={CartIcon}/>
        <form onSubmit={this.handleSignup}>
          <div className="flex">
          <div className="class_username">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="class_password">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="class_confirmPassword">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={this.handleInputChange}
            />
          </div >
          </div >
          <button className="submit" type="submit">Sign Up</button>
          <div>{error}</div>
        </form>
      </div>
    );
  }
}

export default Signup;
