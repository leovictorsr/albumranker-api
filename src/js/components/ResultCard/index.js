import React from "react";

const ResultCard = ({item, selectAlbum}) => {

    return (
        <div className="card">
            <img className="card-img-top" src={item.image_url} alt={item.name} />
            <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">{item.artist}</p>
                <button onClick={(e) => selectAlbum(item, e)} className="stretched-link" />
            </div>
        </div>
    )
}

export default ResultCard
