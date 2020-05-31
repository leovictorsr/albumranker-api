import React from "react";

const SearchBar = ({searchBy, text}) => {
    return(
        <div className="input-group w-100">
            <input type="text"
                   className="form-control search-input"
                   aria-describedby="search-button" />
            <div className="input-group-append">
                <button type="button"
                        className="btn bg-danger font-weight-bold text-uppercase"
                        onClick={searchBy}>
                    Search {text}
                </button>
            </div>
        </div>
    )
}

export default SearchBar
