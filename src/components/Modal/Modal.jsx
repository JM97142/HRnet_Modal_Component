import './modal.css'

function Modal(props) {
    return (
        <div className='modal'>
            <button className='close-modal' onClick={props.close}>X</button>
            <h3 className='modal-message'>{props.message}</h3>
        </div>
    )
}

export default Modal