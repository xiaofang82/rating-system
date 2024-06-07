import React, { useState } from 'react';
import Rating from './components/Rating';
import Dialog from './components/Dialog';
import './css/style.css';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
    console.log(isDialogOpen);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <main>
      <Rating />
      <button onClick={openDialog} className="open-dialog-button">Open Dialog</button>
      {isDialogOpen && <Dialog onClose={closeDialog} />}
    </main>
  );
};

export default App;
