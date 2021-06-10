import React from "react";
import "../../styles/CardSneaker.css";


const CardSneaker = (props) => {
    
return (
    <div className="CardSneaker">
      <div className="description">
      <div className="sneaker-thumbnail">
        <img src={props.sneaker.thumbnail} alt={props.sneaker.shoeName} />
      </div>
      <div className="description-sneaker">
        <h4>{props.sneaker.styleID}</h4>
        <h3>{props.sneaker.shoeName}</h3>
      </div>
      </div>
    </div>
)
};

export default CardSneaker;