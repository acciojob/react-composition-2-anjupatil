import React, { useState } from "react";
import Modal from "./Modal";
const Parent=()=>{
    const [showModal,setShowModal]=useState(false);

    const handleButtonClick=()=>{
        setShowModal(true);
    }

    const handleCloseModal=()=>{
        setShowModal(false);
    }



    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <button onClick={handleButtonClick}>Show Modal</button>
            <Modal className="modal" show={showModal} onClose={handleCloseModal}>
                <h2 className="modal">Modal Content</h2>
                <p className="modal">This is the content of the modal.</p>
            </Modal>
            
        </div>
    )
}

export default Parent;