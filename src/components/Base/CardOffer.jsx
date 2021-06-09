import React from "react";
import Button from "./Button";
import "../../styles/CardOffer.css";

const CardOffer = (props) => {
  const { image, title, _id, size, description, handleEdit, handleDelete } =
    props;

  return (
    <div className="CardOffer">
      <div className="round-image">
        <img src={image} alt={title} />
      </div>
      <div className="description">
        <h2>{title}</h2>
        <h4>Size: {size}</h4>
        <p>{description}</p>
        <div className="buttons">
          <Button handleClick={(event) => handleDelete(_id)} secondary>
            Delete
          </Button>
          <Button handleClick={(event) => handleEdit(_id)} primary>
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardOffer;