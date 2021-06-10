import React from "react";
import sneaksApi from "../../api/apiHandlerSneaks";



const CardSneaker = (props) => {
    const { shoeName, styleID, retailPrice, releaseDate, thumbnail, resellPrices } =
    props;

    function displaySneakers() {
        sneaksApi
        .getMostPopular()
        .then(() => {
            props.getMostPopular();
        })
        .catch((error) => {
            console.log(error);
        });
    }

    
return (
    <div className="CardSneaker">
        <p onLoad={displaySneakers}></p>
        <div className="description-sneaker">
        <h2>{this.props.shoeName}</h2>
        </div>
        <div className="square-image">
        <img src={this.props.thumbnail} alt={this.props.shoeName} />
        </div>
        <div className="characteristics-sneaker">
            <p>{this.props.styleID}</p>
            <p>{this.props.retailPrice}</p>
            <p>{this.props.releaseDate}</p>
            <p>{this.props.resellPrices}</p>
        </div>
    </div>
)
};

export default CardSneaker;