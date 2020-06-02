import React from "react";
import {SortableElement} from "react-sortable-hoc";

const TrackItem = SortableElement(({item, sortIndex}) => {
    return (
        <li className="list-group-item text-center ">
            <span className="badge badge-danger float-left">{sortIndex + 1}</span>
            <span className="badge badge-light float-center">{item.name}</span>
            <span className="badge badge-warning float-right">{item.duration}</span>
        </li>
    );
});

export default TrackItem
