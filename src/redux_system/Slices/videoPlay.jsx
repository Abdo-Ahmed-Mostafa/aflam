import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  videoPaying: [],
  lodingVideo: false,
  erorr : false

};
export const videoDetails = createAsyncThunk("video", async (movie) => {
  try {
    const data = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movie}/videos`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjBhN2IxNGFiYzNmOGNmOTY2YmRiYmI2MGU3Yjk2MiIsInN1YiI6IjY1YzAwYzk2NTE5YmJiMDE4NGJlZjA2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PVsjQWcevl83yJmFE1J9KeUTCvLhQkUZ2XoAG_T3icU",
      },
    });
    return data.data;
  } catch (er) {
    console.log("data not found");
  }
});

const videoSlice = createSlice({
  name: "video",
  initialState: data,
  extraReducers: (bulinder) => {
    bulinder.addCase(videoDetails.pending, (state, action) => {
      state.lodingVideo = true;
    });
    bulinder.addCase(videoDetails.fulfilled, (state, action) => {
      state.lodingVideo = false;

      state.videoPaying = action.payload;
    });
    bulinder.addCase(videoDetails.rejected, (state, action) => {
      state.lodingVideo = false;
      state.erorr = true

    });
  },
});

export const videoDetalisMovie = videoSlice.reducer;
