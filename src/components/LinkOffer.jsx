import React from 'react';
import { Link } from 'react-router-dom';

const LinkOffer = (props) => {
    const { offer } = props;

    return(
        <Link className="card" to={`/users/${offer._id}`}>
        <img src={offer.image} alt={offer.title} />
        <div className="card-details">
          <h2>{offer.title}</h2>
        </div>
    </Link>
    );
};

export default LinkOffer;