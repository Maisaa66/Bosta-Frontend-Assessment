import React from "react";
import { Typography } from '@mui/material';

const ClientDetail = () => {
  return (
    <div className="d-flex flex-column">
        <Typography
          sx={{ flex: '1 1 100%' , mb:2, ml:1,fontWeight:700}}
          
          id="tableTitle"
          component="div"
          
        >
          Delivery address
        </Typography>
      <Typography sx={{backgroundColor:"rgba(0, 0, 0, 0.04)", p:3, borderRadius:4}} color="#002B5B">
        Address Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
        numquam harum quibusdam assumenda molestias natus in autem accusamus
        impedit, quas optio provident unde dolores, totam error expedita.
        Magnam, ut laudantium.
      </Typography>
    </div>
  );
};

export default ClientDetail;
