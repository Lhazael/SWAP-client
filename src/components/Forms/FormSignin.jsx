import React, { Component } from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import { withUser } from "../Auth/withUser";
import Button from "../Base/Button";
import "../../styles/Form.css"

class FormSignin extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    const key = event.target.name;
    const value = event.target.value;

    this.setState({ [key]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    apiHandler
      .signin(this.state)
      .then((data) => {
        this.props.context.setUser(data);
      })
      .catch((error) => {
        console.log(error);
        // Display error message here, if you set the state
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
      <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
      <h4>Ready to <span>SWAP</span> again?</h4>
      <div className="floating-label">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />
      </div>
      <div className="floating-label">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <div className="form-section-1 link">
       <p>Don't have an account yet? <br/>
        <Link to="/signup"><b>Register</b></Link></p>
       </div>
        <Button>Submit</Button>
      </form>
    </section>
    );
  }
}

export default withRouter(withUser(FormSignin));
