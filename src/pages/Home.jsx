import React from "react";
import HomeBackground from "../components/Base/HomeBackground";
import sneaksApi from "../api/apiHandlerSneaks"

class Home extends React.Component {

  componentDidMount(){
    sneaksApi.getMostPopular().then(data => {
      console.log(data)
    })
  }

  render() {
    return (
      <section className="home">
      <div>
        <HomeBackground />
      </div>
      </section>
    );
  }
}

export default Home;
