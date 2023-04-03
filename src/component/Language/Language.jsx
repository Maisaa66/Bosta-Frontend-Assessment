import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';

export default function Language(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let element=""
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

if(props.mdScreen){
    element =               <Button
    color="error"
    sx={{ borderRadius: "20px" , display:{md:"inline-block", xs:"none"}}}
    className="mx-5"
    onClick={handleClick}
  >
    ENG
    <svg
      width="0.8rem"
      height="0.8rem"
      viewBox="0 0 10 6"
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="mx-2"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 0L5 3.6L8.75 0L10 1.2L5 6L0 1.2L1.25 0Z"
        fill="#e30613"
      ></path>
    </svg>
  </Button>
}
else{
  element=  <Button
    color="error"
    sx={{ borderRadius: "20px"}}
    className="mx-5"
    onClick={handleClick}
  >
    ENG
    <svg
      width="0.8rem"
      height="0.8rem"
      viewBox="0 0 10 6"
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className="mx-2"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.25 0L5 3.6L8.75 0L10 1.2L5 6L0 1.2L1.25 0Z"
        fill="#e30613"
      ></path>
    </svg>
  </Button>
}
  return (
    <div>
        
        {element}

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>English</MenuItem>
        <MenuItem onClick={handleClose}>Arabic</MenuItem>
      </Menu>
    </div>
  );
}