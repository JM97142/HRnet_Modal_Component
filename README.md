# React Modal
## Description
> React Modal component

## Installation

`npm i @jmtaret/react-modal`

## Exemple

import { useState } from "react";
import Modal from "@jmtaret/hrnet-modal-component";

const ModalExample = () => {
    const [activeModal, setActiveModal] = useState(false);
    
    const openModal = (e) => {
        e.preventDefault()
        setActiveModal(true)
    }

    const closeModal = () => {
        setActiveModal(false)
    }

    return (
        <div>
            <button onClick={openModal}>Click here</button>
            {displayModal &&
                <Modal message={Message exemple for modal} close={closeModal} />
            }
        </div>
    )
}

export default ModalExample