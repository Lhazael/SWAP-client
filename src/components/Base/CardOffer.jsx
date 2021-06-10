import React from "react";
// import Button from "./Button";
// import "../../styles/CardOffer.css";

const CardOffer = (props) => {

  console.log(props,"props in card offer")


  return (
    <div className="CardOffer">
      <div>Nikes</div>
      <div><h2>{props.offer.title}</h2></div>
    </div>
  );
};

export default CardOffer;