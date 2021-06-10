import React, { Component } from 'react';
import CardOffer from './Base/CardOffer';
import apiHandler from "../api/apiHandler"
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
          <div>
            <h1>Latest Offers</h1>

            <ul>

            {this.state.offers.map(offer => <li><CardOffer offer={offer} /></li>)}
            </ul>
          </div>
        );
      }
}


export default LatestOffers;