import React from "react";

const Create = ({byAlbum, byArtist}) => {
    return(
        <div className="landing container-fluid">
            <button type="button"
                    className="btn btn-outline-danger font-weight-bold text-uppercase"
                    onClick={byAlbum}>
                Search by album
            </button>
            <button type="button"
                    className="btn btn-outline-danger font-weight-bold text-uppercase"
                    onClick={byArtist}>
                Search by artist
            </button>
        </div>
    )
}

export default Create
