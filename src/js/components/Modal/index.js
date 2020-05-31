import React from "react";

const Modal = ({text, toLanding}) => {
    return (
        <div className="modal" tabindex="-1" role="dialog" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-body">
                        {text}
                    </div>
                    <div className="modal-footer">
                        <button type="button"
                                className="btn btn-danger"
                                data-dismiss="modal"
                                onClick={toLanding}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal
