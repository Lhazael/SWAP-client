import React from "react";
// import Button from "./Button";
// import "../../styles/CardOffer.css";

const CardOffer = (props) => {
  // const { image, title, _id, size, description, handleEdit, handleDelete } =
  //   props;

  return (
    <div className="CardOffer">
      <div className="offer-image">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="description">
        <h2>{props.title}</h2>
        <h4>Size: {props.size}</h4>
        <p>{props.description}</p>
        {/* <div className="buttons">
          <Button handleClick={(event) => handleDelete(_id)} secondary>
            Delete
          </Button>
          <Button handleClick={(event) => handleEdit(_id)} primary>
            Edit
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default CardOffer;