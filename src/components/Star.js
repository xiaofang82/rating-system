import React from 'react';
import { FaStar } from 'react-icons/fa';

function Star({ selected = false, onClick }) {
    return (
      <FaStar color={selected ? 'gold' : 'grey'} onClick={onClick} />
    );
  }
export default Star;
