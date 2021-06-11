import React, { Component } from "react";
import { withUser } from "../components/Auth/withUser";
import apiHandler from "../api/apiHandler";
import CardOffer from "../components/Base/CardOffer";
import Favorites from "../components/Favorites";
import LatestOffers from "../components/LatestOffers";
import "../styles/LatestOffers.css";


class Profile extends Component {
  // state = {
  //   user: null,
  //   userOffers: [],
  //   httpResponse: null,
  // };
  render() {
    return (
          <div className="latest-offers">
            <LatestOffers />
          </div>

    )

  };
}

//   componentDidMount() {
//     const promises = Promise.all([
//       apiHandler.getUserInfos(),
//       apiHandler.getUserOffers(),
//     ]);

//   promises.then((allPromises) => {
//     const userInfos = allPromises[0];
//     const userOffers = allPromises[1]; 

//     this.setState({
//       user: userInfos,
//       userOffers: userOffers,
//     });
//   });
// }

// deleteOffer = (offerId) => {
//   apiHandler.deleteOffer(offerId).then(() => {
//     const userOffers = [...this.state.user.userOffers].filter(
//       (offer) => offer._id !== offerId
//     );
//     this.setState({ userOffers });
//   });
// };

// onOfferSelect = (offerId) => {
//   const selectedOffer = this.state.user.userOffers.find(
//     (offer) => offer._id === offerId
//   );
//   this.setState({ selectedOffer: selectedOffer });
// };

// handleOfferUpdate = (updatedOffer) => {
//   const userOffers = [...this.state.user.userOffers].map((offer) => 
//     offer._id === updatedOffer._id ? updatedOffer : offer
//   );
//   this.setState({ userOffers });
// };

// addOffer = (offer) => {
//   this.setState({ userOffers: [...this.state.user.userOffers, offer] });
// };

// componentWillUnmount() {
//   this.timeoutId && clearTimeout(this.timeoutId);
// }

// render() {
//   // const { httpResponse, userOffers, user } = this.state;
//   if (!this.state.user) return null;

//   return (

//     <section className="Profile">
//       <div className="wishlist">
//         <h2>Your wishlist</h2>
//         <Favorites />
//       </div>
//       <React.Fragment>
//     {!this.state.user.userOffers.length && (
//         <div>
//           <h1>Your offers</h1>
//         <p>You don't have any offer yet :(</p>
//           </div>
//     )}
//     </React.Fragment>

//     {!!this.state.user.userOffers.length && (
//           <div className="CardOffers">
//             <h1>Your offers</h1>
//             {this.state.user.userOffers.map((offer, index) => (
//               <CardOffer
//                 key={index}
//                 {...offer}
//                 handleDelete={this.deleteOffer}
//                 handleEdit={this.onOfferSelect}
//               />
//             ))}
//           </div>
//         )}
//     </section>  
    
//   )}


export default withUser(Profile);
