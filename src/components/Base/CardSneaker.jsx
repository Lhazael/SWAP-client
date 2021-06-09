import React from "react";
import sneaksApi from "../../api/apiHandlerSneaks";



const CardSneaker = (props) => {
    const { shoeName, brand, styleID, retailPrice, releaseDate, thumbnail, resellPrices } =
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
        <h2>{brand}{shoeName}</h2>
        </div>
        <div className="square-image">
        <img src={thumbnail} alt={shoeName} />
        </div>
        <div className="characteristics-sneaker">
            <p>{styleID}</p>
            <p>{retailPrice}</p>
            <p>{releaseDate}</p>
            <p>{resellPrices}</p>
        </div>
    </div>
)
};

export default CardSneaker;