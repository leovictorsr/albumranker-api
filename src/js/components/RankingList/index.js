import React from "react";
import RankingCard from "../RankingCard"

const RankingList = ({rankings}) => {
    const rankingsList = rankings.map(
        (item) => <RankingCard item={item}/>
    );
    return (
        <div className="card-group">
            {rankingsList}
        </div>
    );
}

export default RankingList
