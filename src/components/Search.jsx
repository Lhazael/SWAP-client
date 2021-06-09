import React from "react";
import { Redirect } from "react-router-dom";
import apiHandler from "../api/apiHandler";
import "../styles/Search.css";

const Search = () => {
    return (
        
    <div className="search-main">
    <form className="form-search-bar" action="/" method="get">
    <label className="label-search-bar" htmlFor="search">
    <span className="visually-hidden"></span>
    </label>
    <input className="input-search-bar"
        type="text"
        id="search"
        placeholder="Find your grail"
        name="search" 
    />
    <i class="fa fa-search"></i>
    {/* <button className="button-search-bar" type="submit">Find</button> */}
</form>
</div>
    );
}


export default Search;