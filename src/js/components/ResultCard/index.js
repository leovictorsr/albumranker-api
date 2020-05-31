import React from "react";

const ResultCard = ({item, selectAlbum}) => {

    return (
        <div className="card">
            <img className="card-img-top" src={item.image.url} alt={item.name} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.artist}</p>
                <p className="card-text "><small>{item.total_tracks} songs</small></p>
                <button onClick={(e) => selectAlbum(item, e)} classNameName="stretched-link" />
            </div>
        </div>
    )
}

export default ResultCard
