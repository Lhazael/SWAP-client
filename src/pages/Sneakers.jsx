import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useParams } from 'react-router-dom';

function Sneaker(){
    // const { id } = useParams();
    const url = `http://localhost:5000/home`;
    const [sneaker, setSneaker] = useState(null);

    let content = null;

   useEffect(() => (
        axios.get(url)
            .then(response => {
                setSneaker(response.data)
    })
   ), [url])

    if(sneaker){
        return(
            content =
            <div className="description-sneaker">
            <div>
                <h1>{sneaker.shoeName}</h1>
            </div>
            <div className="square-image">
            <img src={sneaker.thumbnail} alt={sneaker.shoeName} />
            </div>
            <div className="characteristics-sneaker">
            <p>{sneaker.styleID}</p>
            <p>{sneaker.retailPrice} €</p>
            <p>{sneaker.releaseDate}</p>
        </div>
            </div>
        )
    }

    return(
        <div>
            {content}
        </div>
    )
    
}

export default Sneaker;