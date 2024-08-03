import React from 'react';
import './CustomAlert.css'; // Import custom styles

const CustomAlert = ({ message, type, onClose }) => {
  return (
    <div className={`custom-alert custom-alert-${type}`}>
      <span>{message}</span>
      <button onClick={onClose}>&times;</button>
    </div>
  );
};

export default CustomAlert;
