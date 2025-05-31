import { useState } from 'react';
import './App.css';
import { University } from './example/components/university';
import Modal from 'react-modal';

// Modal.setAppElement('#App');

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <University />
    </>
  );
}

export default App;
