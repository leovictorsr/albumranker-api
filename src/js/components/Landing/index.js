import React from "react";

const Landing = ({toCreate}) => {
    return(
        <div className="landing container-fluid">
            <button type="button"
                    className="btn btn-outline-danger font-weight-bold text-uppercase"
                    onClick={toCreate}>
                Create
            </button>
            <button type="button"
                    className="btn btn-outline-danger font-weight-bold text-uppercase">
                List
            </button>
        </div>
    )
}

export default Landing
