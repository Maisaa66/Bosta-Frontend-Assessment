import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';

const LoadingScreen = () => {
    const [open, setOpen] = React.useState(true);
    return (
        
        <div>
        <Backdrop
          sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={open}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>

       
    );
};

export default LoadingScreen;