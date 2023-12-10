import { useState } from "react";
import { Modal } from "./components";

function App() {
  const [activeModal, setActiveModal] = useState(false)

  const save = (e) => {
    e.preventDefault();
    setActiveModal(true)
  }

  const close = (e) => {
    setActiveModal(false)
  }

  return (
    <div className="App">
      <button onClick={save}>Click here</button>
      {activeModal && (
        <Modal message={'Employee saved !'} onClick={close} />
      )}
    </div>
  );
}

export default App;
