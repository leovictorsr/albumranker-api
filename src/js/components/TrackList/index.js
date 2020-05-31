import React from "react";
import {SortableContainer} from "react-sortable-hoc";
import TrackItem from "../../components/TrackItem";

const TrackList = SortableContainer(({tracks}) => {
    const trackList = tracks.map(
        (item, index) => <TrackItem key={item}
                                    index={index}
                                    sortIndex={index}
                                    item={item} />
    );

    return (
        <ul className="list-group">
            {trackList}
        </ul>
    );
});

export default TrackList
