import React from "react";
// import Button from "./Button";
import "../../styles/CardOffer.css";

const CardOffer = (props) => {

  console.log(props,"props in card offer")


  return (
    <div className="CardOffer">
      <div className="description">
        <h2>{props.offer.title}</h2>
      </div>
        <div className="sneaker-thumbnail">
        <img src={props.offer.picture[0]} alt={props.offer.title} />
      </div>
      <div className="description-offer">
        <p>Looking for:{props.offer.lookingFor}</p>
        <p>Size: {props.offer.size}</p>
      </div>
    </div>
  );
};

export default CardOffer;