import React from "react";
import CardSneaker from "../components/Base/CardSneaker";
import sneaksApi from "../api/apiHandlerSneaks";

class Discover extends React.Component {

  componentDidMount(){
    sneaksApi.getMostPopular().then(data => {
      console.log(data)
    })
  }

    render() {
      return (
        <div>
          <h1>Latest offers</h1>
          
          <h1>Most Popular</h1>
        </div>
      );
    }
  }

export default Discover;