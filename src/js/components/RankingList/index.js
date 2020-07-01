import React from "react";
import RankingCard from "../RankingCard"

const RankingList = ({ rankings, previous }) => {
  const rankingsList = rankings.map(
    (item) => <RankingCard item={item} />
  );
  return (
    <div>
      <button type="button"
        className="btn bg-danger font-weight-bold text-uppercase"
        onClick={previous}>
          Return
      </button>
      <div className="card-group">
        {rankingsList}
      </div>
    </div>
  );
}

export default RankingList
