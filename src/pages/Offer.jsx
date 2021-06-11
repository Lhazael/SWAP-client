import React, { Component } from "react";
import axios from 'axios';
import LinkOffer from "../components/LinkOffer";
// import { withUser } from "../components/Auth/withUser";


class Offers extends React.Component {

    state = {
        offer: [],
      };
    
      componentDidMount() {
        axios
          .get(process.env.REACT_APP_BACKEND_URL + "/api/offers")
          .then((response) => {
            this.setState({
              beers: response.data.reverse(),
            });
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
      render() {
        return (
          <div className="Offers">
            <div className="list-grid">
            {this.state.offer.map((userOffers) => {
              return <LinkOffer key={userOffers._id} offer={userOffers} />;
            })}
            </div>
          </div>
        );
      }
}
export default Offers;