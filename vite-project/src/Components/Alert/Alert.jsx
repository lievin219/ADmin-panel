import React from 'react';
import { Snackbar, Alert as MuiAlert } from '@mui/material';

const Alert = ({ open, handleClose, severity, message }) => {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <MuiAlert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
        {message} 
      </MuiAlert>   
    </Snackbar>
  );
};

export default Alert;