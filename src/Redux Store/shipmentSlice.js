import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchDetails = createAsyncThunk("movies/fetchMovies", async (trackingNum) => {
  const response = await fetch(
    `https://tracking.bosta.co/shipments/track/${trackingNum}`
  );
  const details = await response.json();
  return details;
});

const shipmentSlice = createSlice({
  initialState: null,
  name: "shipmentDetailSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.fulfilled, (state, action)=>{
        return action.payload;
    })
  },
});

export const {} = shipmentSlice.actions;

export default shipmentSlice.reducer;
