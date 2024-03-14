import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  seiresVideo: {},
  lodingSeriesViedeo: false,
  erorr: false,
};

export const getVieowSires = createAsyncThunk(
  "videoSeires",
  async (seriesId, ThunkApi) => {
    const { rejectWithValue } = ThunkApi;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${seriesId}/videos`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjBhN2IxNGFiYzNmOGNmOTY2YmRiYmI2MGU3Yjk2MiIsInN1YiI6IjY1YzAwYzk2NTE5YmJiMDE4NGJlZjA2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PVsjQWcevl83yJmFE1J9KeUTCvLhQkUZ2XoAG_T3icU",
        },
      });
      return data.data;
    } catch (er) {
      rejectWithValue(er);
    }
  }
);

const seiresVideoSlice = createSlice({
  name: "videoSeires",
  initialState: data,
  extraReducers: (bulinder) => {
    bulinder.addCase(getVieowSires.pending, (state, action) => {
      state.loding = true;
    });
    bulinder.addCase(getVieowSires.fulfilled, (state, action) => {
      state.seiresVideo = action.payload;
      state.loding = false;
    });
    bulinder.addCase(getVieowSires.rejected, (state, action) => {
      state.loding = false;
      state.erorr = true;
    });
  },
});

export const seiresVideos = seiresVideoSlice.reducer;
