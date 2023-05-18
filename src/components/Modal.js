import React, { useState } from "react";

const Modal=({show,onClose,children})=>{
    return(
        <div className={`modal-overlay ${show? "show":"hide"}`}>
            <div className="modal-dialog">
                <button className="modal-close" onClick={onClose}>
                    Close

                </button>
                {children}
            </div>
        </div>
    )
}
export default Modal;