import { useState } from 'react';
import Modal from './components/Modal/Modal';

function App() {
  const [activeModal, setActiveModal] = useState(false)

  const save = (e) => {
    e.preventDefault()
    setActiveModal(true)
  }

  const close = () => {
    setActiveModal(false)
  }

  return (
    <div className='App'>
      <button onClick={save}>Click here</button>
      {activeModal && (
        <Modal message={'Employee created !'} close={close} />
      )}
    </div>
  )
}

export default App
