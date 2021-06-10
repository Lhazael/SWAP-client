import React, { Component } from 'react';
import sneaksApi from "../api/apiHandlerSneaks";
import CardSneaker from "../components/Base/CardSneaker";
import "../styles/MostPopular.css";

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
          <section className="container-most-popular">
          <div className="container-most-popular">
            <h1>Most popular sneakers on the market</h1>
          </div>
          <div className="wrapper">
            <ul>
            {this.state.sneakers.map(sneaker => <li className="box"><CardSneaker sneaker={sneaker} /></li>)}
            </ul>
          </div>
          </section>
        );
      }
}


export default MostPopular;