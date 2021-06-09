import React, { Component } from "react";
// import { withRouter, Redirect } from "react-router-dom";
import { withUser } from "../Auth/withUser";
import apiHandler from "../../api/apiHandler";
import Button from "../Base/Button";
import { buildFormData } from "../../utils";
import FeedBack from "../FeedBack";
import UploadWidget from "../UploadWidget";
import { shoeSizes} from "../../config"





class FormEditOffer extends Component {
    state = {
        httpResponse: null,
    };

    formRef = React.createRef();

    handleChange = (event) => {
        const value =
        event.target.type === "file" ? event.target.files[0] : event.target.value;
        const key = event.target.name;
        this.setState({ [key]: value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const fd = new FormData();
        const { httpResponse, ...data } = this.state;
        buildFormData(fd, data);

    apiHandler
        .updateOffer(this.props.offer._id, fd)
        .then((data) => {
            this.props.updateOffer(data);
            this.setState({
                httpResponse: {
                    status: "success",
                    message: "Offer successfully added.",
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

    handleFileSelect = ({ tmpUrl, file }) => {
        this.setState({ image: file });
    };

    render() {
        const { httpResponse } = this.state;

        const { title, description, condition, size, lookingFor, picture, price } = this.props.offer;


        return (
            <div className="FormOffer-container">
        <form 
            ref={this.formRef}
            className="FormOffer"
            onSubmit={this.handleSubmit}
        >
          {/* <p onClick={this.props.handleClose} className="close-link">
            X
          </p> */}
          <h2>Edit your offer</h2>
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
              value={title || ""}
              placeholder="e.g.: Air Jordan 1 Union Blue Storm"
              name="title"
            />
          </div>
          <div className="form-group">
          <label className="label" htmlFor="description">
              Description
            </label>
            <textarea
              value={description || ""}
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
              value={condition[0] || ""}
            >
              <option value="" disabled selected>
                {this.props.condition}
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
              value={this.props.size || size[0] || ""}
            >
          
                {shoeSizes.map(size => {
                    return <option value={size}>{size}</option>
                })}
            </select>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="lookingFor">
              Looking for:
            </label>
            <textarea
              value={lookingFor || ""}
              onChange={this.handleChange}
              name="lookingFor"
              id="lookingFor"
              className="text-area"
              placeholder="What are you looking for?"
            ></textarea>
          </div>
          <div className="form-group">
            <UploadWidget onFileSelect={this.handleFileSelect} name="picture">
              Upload picture
            </UploadWidget>
          </div>
          <div className="form-group">
            <label className="label" htmlFor="price">
              Price
            </label>
            <input
              value={price || ""}
              onChange={this.handleChange}
              className="input"
              type="number"
              name="price"
            />
          </div>

          {error && <FeedBack message={error} status="failure" />}
          <Button primary>Edit</Button>
        </form>
      </div>
        )
    }
}

export default (withUser(FormEditOffer));