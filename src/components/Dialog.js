import React from 'react';
import { FaReact } from 'react-icons/fa';

function Dialog({ onClose }) {
  return (
    <div className="dialog">
      <div className="dialog-content">
        <FaReact size={100} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default Dialog;
