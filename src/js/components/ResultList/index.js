import React from "react";
import ResultCard from "../ResultCard"

const ResultList = ({albums, selectAlbum}) => {
    const albumsList = albums.map(
        (item) => <ResultCard item={item} selectAlbum={selectAlbum}/>
    );
    return (
        <div className="card-group">
            {albumsList}
        </div>
    );
}

export default ResultList
