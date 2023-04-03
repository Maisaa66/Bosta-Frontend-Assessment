import React, { useState, useEffect } from "react";
import {
  StyledInputBase,
  Search,
  SearchIconWrapper,
} from "./TrackShipmentStyle";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDetails } from "../../Redux Store/shipmentSlice";

const TrackShipment = () => {
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [trackNum, setTrackNum] = useState("");
  // use the redux store to get shipment detail
  const shipmentDetail = useSelector((state)=>state.shipmentDetail);
  console.log(shipmentDetail)
  const dispatch = useDispatch();

  const handleSearch =  ()=>{
    dispatch(fetchDetails(trackNum));
    console.log(trackNum);
    console.log(shipmentDetail);
    setTrackNum("");

  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };



  return (
    <div>
      <Button
        color="error"
        sx={{ borderRadius: "20px" }}
        className="mx-5"
        onClick={handleOpenUserMenu}
      >
        Track Shipment
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
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        <div className="d-flex flex-column p-3 ">
          <p className="text-secondary">Track your shipment</p>

          <Search>
            <Button
              color="error"
              sx={{
                backgroundColor: "#e30613",
                width: 50,
                height: 50,
                ":hover": {
                  bgcolor: "#e30613",
                  color: "white",
                },
              }}

              onClick={handleSearch}
            >
              <SearchIconWrapper>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 21L28 28"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                  ></path>
                  <circle
                    cx="13"
                    cy="13"
                    r="11"
                    stroke="white"
                    strokeWidth="3"
                  ></circle>
                </svg>
              </SearchIconWrapper>
            </Button>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={trackNum}
              onChange={(event)=>setTrackNum(event.target.value)}
              
            />
          </Search>
        </div>
      </Menu>
    </div>
  );
};

export default TrackShipment;
