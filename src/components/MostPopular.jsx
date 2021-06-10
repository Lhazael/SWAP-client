import React, { Component } from 'react';
import sneaksApi from "../api/apiHandlerSneaks";
import CardSneaker from "../components/Base/CardSneaker";

class MostPopular extends Component {


  state= {
    sneakers: [],
  }

    componentDidMount(){
    sneaksApi.getMostPopular().then(data => {
      console.log(data)
      this.setState({
        sneakers: data
      })
    })
  }

    render() {
        return (
          <div>
            <h1>Most popular sneakers on the market</h1>
            <ul>
            {this.state.sneakers.map(sneaker => <li><CardSneaker sneaker={sneaker} /></li>)}
            </ul>

          </div>
        );
      }
}


export default MostPopular;