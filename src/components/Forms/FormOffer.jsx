import React, { Component } from "react";
import { withUser } from "../Auth/withUser";
import apiHandler from "../../api/apiHandler";
import Button from "../Base/Button";
import { buildFormData } from "../../utils";
import UploadWidget from "../UploadWidget";
import AutoComplete from "../AutoComplete";
import { shoeSizes} from "../../config"
import "../../styles/Form.css";


const initialState = {
    title: "",
    description: "",
    condition: "",
    size: "",
    lookingFor: "",
    picture: [],
    price: "",
    selectedSneaker: null,
    httpResponse: null,
    error: null,
};

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
            this.setState({ error: "Title is required !" }, () => {
              this.timeoutId = setTimeout(() => {
                this.setState({ error: null });
              }, 1000);
            });
            return;
            
          }

    const fd = new FormData();
    const { httpResponse, ...data } = this.state;
    buildFormData(fd, data);

    // fd.append("picture", this.imageRef.current.files[0]);

    [...this.imageRef.current.files].forEach((file) => {
      return fd.append("picture", file)
    }) 

    apiHandler
        .addOffer(fd)
        .then((data) => {
            // this.props.addOffer(data);
            this.props.history.push("/profile")
        })
        .catch((error) => {
          console.log(error)
            this.setState({
                // ...initialState,
            //     httpResponse: {
            //       status: "success",
            //       message: "Item successfully added.",
            //     },
            //   });
      
            //   this.timeoutId = setTimeout(() => {
            //     this.setState({ httpResponse: null });
            //   }, 1000);
            // })
            // .catch((error) => {
            //   this.setState({
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


          handleSelectedSneaker = (sneaker) => {
            this.setState({
              selectedSneaker: sneaker,
              title: sneaker.shoeName
            })
          };

          handleFileSelect = ({ tmpUrl, file }) => {
            this.setState({ picture: file });
        };
  
    render(){
        // const { httpResponse, error } = this.state;
        // if (this.state) {
        //   return <Redirect to="/" />;
        // }

      return (
        
        <div className="FormOffer-container">
        <form className="FormOffer" onSubmit={this.handleSubmit}>
          <h4>Create your offer</h4>
          <div className="form-group">
            <label className="label" htmlFor="title">
              Title
            </label>
            <AutoComplete  onSelect={this.handleSelectedSneaker} />
          </div>
          <div className="form-group">
          <label className="label" htmlFor="description">
              Description:
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
              Condition:
            </label>
            <select
              name="condition"
              id="condition"
              onChange={this.handleChange}
              value={this.state.condition}
            >
              <option value="" disabled>
                What's the shoes condition?
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
              Size (EU):
            </label>
            <select
              name="size"
              id="size"
              onChange={this.handleChange}
              value={this.state.size}
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
              value={this.state.lookingFor}
              onChange={this.handleChange}
              name="lookingFor"
              id="lookingFor"
              className="text-area"
              placeholder="What are you looking for?"
            ></textarea>
          </div>
          <div className="form-group">
            <UploadWidget onFileSelect={this.handleFileSelect} ref={this.imageRef} name="picture" >
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
          <Button primary="true" >Add</Button>
        </form>
      </div>
      );
      }
    };


export default (withUser(FormOffer));