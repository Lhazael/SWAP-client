import React, { Component } from 'react';
import sneaksApi from "../api/apiHandlerSneaks";

class MostPopular extends Component {

    // componentDidMount(){
  //   sneaksApi.getMostPopular().then(data => {
  //     console.log(data)
  //   })
  // }

    render() {
        return (
          <div>
            <h1>Most popular sneakers on the market</h1>
          </div>
        );
      }
}


export default MostPopular;