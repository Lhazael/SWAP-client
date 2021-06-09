import React from "react";
import { Redirect } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import "../styles/Search.css";

const Search = () => {
    return (
    <div className="search-main">
    <form action="/" method="get">
    <label htmlFor="search">
    <span className="visually-hidden"></span>
    </label>
    <input
        type="text"
        id="search"
        placeholder="Search a sneaker"
        name="search" 
    />
    <button type="submit">Find</button>
</form>
</div>
    );
}


export default Search;