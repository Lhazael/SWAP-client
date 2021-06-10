import React from "react";
import CardSneaker from "../components/Base/CardSneaker";
import sneaksApi from "../api/apiHandlerSneaks";
import LatestOffers from "../components/LatestOffers";
import MostPopular from "../components/MostPopular";

class Discover extends React.Component {

  // componentDidMount(){
  //   sneaksApi.getMostPopular().then(data => {
  //     console.log(data)
  //   })
  // }

    render() {
      return (
        <section className="discover-page">
          <div>
            <LatestOffers />
          </div>
          <div>
          <MostPopular />
        </div>
        </section>

      );
    }
  }

export default Discover;