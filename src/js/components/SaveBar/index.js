import React from "react";

const SaveBar = ({saveRanking}) => {
    return(
        <div className="input-group w-100">
            <div className="input-group-prepend">
                <span className="input-group-text">@</span>
            </div>
            <input type="text"
                   className="form-control handle-input"
                   placeholder="handle you want to save your ranking"
                   aria-label="handle"
                   aria-describedby="save-button" />
            <div className="input-group-append">
                <button type="button"
                        className="btn bg-danger font-weight-bold text-uppercase handle-button"
                        onClick={saveRanking}>
                    Save ranking
                </button>
            </div>
        </div>
    )
}

export default SaveBar
