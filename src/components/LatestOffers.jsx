import React, { Component } from 'react';
import CardOffer from './Base/CardOffer';
import apiHandler from "../api/apiHandler"
import "../styles/LatestOffers.css";

class LatestOffers extends Component {


  state = {
    offers: [],
  }


    componentDidMount(){
      apiHandler.getOffers().then(data => {
        console.log(data)
        this.setState({
          offers: data
        })
      })
    }


    render() {
        return (
          <section className="container-latest-offers">
          <div className="container-lastest-offers">
            <h1>Latest offers</h1>
          </div>
          <div className="wrapper">
            <ul>
            {this.state.offers.map(offer => <li className="box"><CardOffer offer={offer} /></li>)}
            </ul>
          </div>
          </section>
        );
      }
}


export default LatestOffers;