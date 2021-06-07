import React, { Component } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import apiHandler from "../../api/apiHandler";

class FormSignup extends Component {
  state = {
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",

  };

  handleChange = (event) => {
    const value = event.target.value;
    const key = event.target.name;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signup(this.state)
      .then((data) => {
        this.props.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    if (this.props.context.user) {
      return <Redirect to="/" />;
    }

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={this.handleChange}
          value={this.state.firstName}
          type="firstName"
          id="firstName"
          name="firstName"
        /><label htmlFor="lastName">Last Name</label>
        <input
          onChange={this.handleChange}
          value={this.state.lastName}
          type="lastName"
          id="lastName"
          name="lastName"
        /><label htmlFor="username">Username</label>
        <input
          onChange={this.handleChange}
          value={this.state.username}
          type="username"
          id="username"
          name="username"
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={this.handleChange}
          value={this.state.password}
          type="password"
          id="password"
          name="password"
        />
        <button>Submit</button>
      </form>
    );
  }
}

export default withRouter(withUser(FormSignup));
