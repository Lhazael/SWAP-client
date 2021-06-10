import React from "react";


const CardSneaker = (props) => {
    // const { shoeName, styleID, retailPrice, releaseDate, thumbnail, resellPrices } =
    // props;
    
return (
    <div className="CardSneaker">
      <div>Adidas</div>
      <div><h3>{props.sneaker.shoeName}</h3></div>
    </div>
)
};

export default CardSneaker;