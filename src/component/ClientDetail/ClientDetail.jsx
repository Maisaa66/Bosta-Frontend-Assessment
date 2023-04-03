import React from "react";
import { Typography } from "@mui/material";
import Complain from "../Complain/Complain";

const ClientDetail = () => {
  return (
    <div className="d-flex flex-column">
      <div id="addressDetail" className="mb-3">
        <Typography
          sx={{ flex: "1 1 100%", mb: 2, ml: 1, fontWeight: 700 }}
          id="tableTitle"
          component="div"
        >
          Delivery address
        </Typography>
        <Typography
          sx={{ backgroundColor: "rgba(0, 0, 0, 0.04)", p: 3, borderRadius: 4 }}
          color="#002B5B"
        >
          Address Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </div>

      <Complain></Complain>
    </div>
  );
};

export default ClientDetail;
