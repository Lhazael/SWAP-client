import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import apiHandler from "../../api/apiHandler";
import Button from "../Base/Button";
import "../../styles/Form.css";

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
      
      <section className="form-section">
      <div class="left">   
      </div>
      <form onSubmit={this.handleSubmit}>
        <h4>Start to <span>SWAP</span> your sneakers</h4>
        <div className="floating-label">
        <label htmlFor="firstName">First Name</label>
        <input
          onChange={this.handleChange}
          value={this.state.firstName}
          type="firstName"
          id="firstName"
          name="firstName"
        />
        </div>
        <div className="floating-label">
        <label htmlFor="lastName">Last Name</label>
        <input
          onChange={this.handleChange}
          value={this.state.lastName}
          type="lastName"
          id="lastName"
          name="lastName"
        />
        </div>
        <div className="floating-label">
        <label htmlFor="username">Username</label>
        <input
          onChange={this.handleChange}
          value={this.state.username}
          type="username"
          id="username"
          name="username"
        />
        </div>
        <div className="floating-label">
        <label htmlFor="email">Email</label>
        <input
          onChange={this.handleChange}
          value={this.state.email}
          type="email"
          id="email"
          name="email"
        />
        </div>
        <div className="floating-label">
        <label htmlFor="password">Password</label>
        <input
          onChange={this.handleChange}
          value={this.state.password}
          type="password"
          id="password"
          name="password"
        />
        </div>
        <div className="form-section-1 link">
        <p>Already have an account? <br/>
         <Link to="/signin"><b>Sign in!</b></Link></p>
        </div>
        <Button>Submit</Button>

      </form>
      </section>
    );
  }
}

export default withRouter(withUser(FormSignup));
