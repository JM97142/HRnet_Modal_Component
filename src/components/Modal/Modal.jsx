import './modal.css'

function Modal({ close, message }) {
    return (
        <div className='blocker'>
            <div className='modal'>
                <button className='close-modal' type='button' onClick={close}>X</button>
                <h3 className='modal-message'>{message}</h3>
            </div>
        </div>
    )
}

export default Modal