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
            <Modal show={showModal} onClose={handleCloseModal}>
                <h3 className="">Modal Content</h3>
                <p className="modal">This is the content of the modal.</p>
            </Modal>
            
        </div>
    )
}

export default Parent;