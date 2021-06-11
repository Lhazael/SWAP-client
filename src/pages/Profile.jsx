import React, { Component } from "react";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import CardOffer from "../components/Base/CardOffer";
import Favorites from "../components/Favorites";


class Profile extends Component {
  state = {
    userOffers: [],
    httpResponse: null,
  };


  componentDidMount() {
    const promises = Promise.all([
      apiHandler.getUserInfos(),
      apiHandler.getUserOffers(),
    ]);

  promises.then((allPromises) => {
    const userInfos = allPromises[0];
    const userOffers = allPromises[1]; 

    this.setState({
      user: userInfos,
      userOffers: userOffers,
    });
  });
}

deleteOffer = (offerId) => {
  apiHandler.deleteOffer(offerId).then(() => {
    const userOffers = [...this.state.userOffers].filter(
      (offer) => offer._id !== offerId
    );
    this.setState({ userOffers });
  });
};

onOfferSelect = (offerId) => {
  const selectedOffer = this.state.userOffers.find(
    (offer) => offer._id === offerId
  );
  this.setState({ selectedOffer: selectedOffer });
};

handleOfferUpdate = (updatedOffer) => {
  const userOffers = [...this.state.userOffers].map((offer) => 
    offer._id === updatedOffer._id ? updatedOffer : offer
  );
  this.setState({ userOffers });
};

addOffer = (offer) => {
  this.setState({ userOffers: [...this.state.userOffers, offer] });
};

componentWillUnmount() {
  this.timeoutId && clearTimeout(this.timeoutId);
}

render() {
  const { httpResponse, userOffers, user } = this.state;
  if (!user) return null;

  return (

    <section className="Profile">
      <div className="wishlist">
        <h2>Your wishlist</h2>
        <Favorites />
      </div>

    {!userOffers.length && (
      <React.Fragment>
        <div>
          <h1>Your offers</h1>
        </div>
        <p>You don't have any offer yet :(</p>
      </React.Fragment>
    )}

    {!!userOffers.length && (
          <div className="CardOffers">
            <h1>Your offers</h1>
            {userOffers.map((offer, index) => (
              <CardOffer
                key={index}
                {...offer}
                handleDelete={this.deleteOffer}
                handleEdit={this.onOfferSelect}
              />
            ))}
          </div>
        )}

    </section>  
    
  )}

}

export default withUser(Profile);
