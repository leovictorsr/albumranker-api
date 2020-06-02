import React from "react";

const RankingCard = ({ item }) => {
  let date = new Date();
  date.setTime(item.date);

  const trackList = item.tracks.map(
    (item, index) => {
      return (
        <li className="list-group-item text-center ">
          <span className="badge badge-danger float-left">{index + 1}</span>
          <span>{item.name}</span>
          <span className="badge badge-warning float-right">{item.track_number}</span>
        </li>
      )
    }
  );

  return (
    <div className="card">
      <img className="card-img-top" src={item.image_url} alt={item.name} />
      <div className="card-body">
        <h5 className="card-title">{item.album}</h5>
        <p className="card-text">{item.artists[0]}</p>
        <p className="card-text">{item.user}</p>
        <p className="card-text">{date.toDateString()}</p>
        <ul className="list-group">{trackList}</ul>
      </div>
    </div>
  )
}

export default RankingCard
