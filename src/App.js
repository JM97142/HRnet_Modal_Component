import { useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const [activeModal, setActiveModal] = useState(false)

  const openModal = (e) => {
    e.preventDefault()
    setActiveModal(true)
  }

  const closeModal = () => {
    setActiveModal(false)
  }

  return (
    <div className='App'>
      <button onClick={openModal}>Click here</button>
      {activeModal && (
        <Modal message={'Modal open !'} close={closeModal} />
      )}
    </div>
  )
}

export default App