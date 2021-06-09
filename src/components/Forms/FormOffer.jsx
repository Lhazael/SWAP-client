import React, { Component } from "react";
// import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import apiHandler from "../../api/apiHandler";
import Button from "../Base/Button";
import { buildFormData } from "../../utils";
import FeedBack from "../FeedBack";
import UploadWidget from "../UploadWidget";
// import Message from "../Message";
// import axios from "axios";

const initialState = {
    title: "",
    sku: "",
    description: "",
    condition: "",
    size: "",
    lookingFor: "",
    picture: [],
    price: "",
}

class FormOffer extends Component {
    state = initialState;

    imageRef = React.createRef();

    handleChange = (event) => {
        const value = event.target.value;
        const key = event.target.name;
        this.setState({ [key]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        if (!this.state.title) {
            this.setState({ error: "All categories are required !" }, () => {
              this.timeoutId = setTimeout(() => {
                this.setState({ error: null });
              }, 1000);
            });
            return;
            
          }

    const fd = new FormData();
    const { httpResponse, ...data } = this.state;
    buildFormData(fd, data);

    fd.append("image", this.imageRef.current.files[0]);

    apiHandler
        .addOffer(fd)
        .then((data) => {
            this.props.addOffer(data);

            this.setState({
                ...initialState,
                httpResponse: {
                  status: "success",
                  message: "Item successfully added.",
                },
              });
      
              this.timeoutId = setTimeout(() => {
                this.setState({ httpResponse: null });
              }, 1000);
            })
            .catch((error) => {
              this.setState({
                httpResponse: {
                  status: "failure",
                  message: "An error occured, try again later.",
                },
              });
      
              this.timeoutId = setTimeout(() => {
                this.setState({ httpResponse: null });
              }, 1000);
            });
          };
  
    render(){
        const { httpResponse, error } = this.state;

      return (
        <div className="FormOffer-container">
        <form className="FormOffer" onSubmit={this.handleSubmit}>
          <h2>Create your offer</h2>
          {httpResponse && (
            <FeedBack
              message={httpResponse.message}
              status={httpResponse.status}
            />
          )}
          <div className="form-group">
            <label className="label" htmlFor="title">
              Title
            </label>
            <input
              className="input"
              type="text"
              onChange={this.handleChange}
              value={this.state.title}
              placeholder="e.g.: Air Jordan 1 Union Blue Storm"
              name="title"
            />
          </div>
          <div className="form-group">
          <label className="label" htmlFor="description">
              Description
            </label>
            <textarea
              value={this.state.description}
              onChange={this.handleChange}
              name="description"
              id="description"
              className="text-area"
              placeholder="e.g.: Worn a few times, great condition"
            ></textarea>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="condition">
              Condition
            </label>
            <select
              name="condition"
              id="condition"
              onChange={this.handleChange}
              value={this.state.condition}
            >
              <option value="" disabled>
                Condition:
              </option>
              <option value="new-with-tags">New with tags</option>
              <option value="new-without-tags">New without tags</option>
              <option value="very-good">Very good</option>
              <option value="good">Good</option>
              <option value="very-used">Very used</option>
              </select>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="size">
              Size (EU)
            </label>
            <select
              name="size"
              id="size"
              onChange={this.handleChange}
              value={this.state.size}
            >
              <option value="" disabled>
                Select a size:
              </option>
              <option value="36">36</option>
              <option value="36.5">36.5</option>
              <option value="37">37</option>
              <option value="37.5">37.5</option>
              <option value="38">38</option>
              <option value="38.5">38.5</option>
              <option value="39">39</option>
              <option value="40">40</option>
              <option value="40.5">40.5</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="42.5">42.5</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="44.5">44.5</option>
              <option value="45">45</option>
              <option value="46">46</option>
            </select>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="lookingFor">
              Looking for:
            </label>
            <textarea
              value={this.state.lookingFor}
              onChange={this.handleChange}
              name="lookingFor"
              id="lookingFor"
              className="text-area"
              placeholder="What are you looking for?"
            ></textarea>
          </div>
          {/* <div className="form-group">
          <label className="label" htmlFor="picture">Pictures</label>
        <input
          id="picture"
          name="picture"
          type="file"
          className="input"
        /> 
          </div> */}
          <div className="form-group">
            <UploadWidget ref={this.imageRef} name="picture">
              Upload picture
            </UploadWidget>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="price">
              Price
            </label>
            <input
              value={this.state.price}
              onChange={this.handleChange}
              className="input"
              type="number"
              name="price"
            />
          </div>

          {error && <FeedBack message={error} status="failure" />}
          <Button primary>Add</Button>
        </form>
      </div>
      );
      }
    };


export default (withUser(FormOffer));