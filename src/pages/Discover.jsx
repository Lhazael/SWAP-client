import React from "react";
import LatestOffers from "../components/LatestOffers";
import MostPopular from "../components/MostPopular";
import "../styles/Discover.css";

class Discover extends React.Component {

  // componentDidMount(){
  //   sneaksApi.getMostPopular().then(data => {
  //     console.log(data)
  //   })
  // }

    render() {
      return (
        <section className="discover-page">
          <div className="latest-offers">
            <LatestOffers />
          </div>
          <div className="most-popular">
          <MostPopular />
        </div>
        </section>

      );
    }
  }

export default Discover;