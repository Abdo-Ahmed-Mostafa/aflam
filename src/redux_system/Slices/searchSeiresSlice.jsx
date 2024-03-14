import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const data = {
  searchSeriesBage: [],
  loding: false,
  erorr: false,
};
export const getSeiresSearch = createAsyncThunk(
  "seiresSearch",
  async (search, asyncThink) => {
    const { rejectWithValue } = asyncThink;

    try {
      const data = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/tv",
        params: {
          query: search,
          include_adult: "false",
          language: "en-US",
          page: "1",
        },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjBhN2IxNGFiYzNmOGNmOTY2YmRiYmI2MGU3Yjk2MiIsInN1YiI6IjY1YzAwYzk2NTE5YmJiMDE4NGJlZjA2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PVsjQWcevl83yJmFE1J9KeUTCvLhQkUZ2XoAG_T3icU",
        },
      });
      return data.data;
    } catch (er) {
      return rejectWithValue(er);
    }
  }
);

const seriesSearchSlice = createSlice({
  name: "seiresSearchSlice",
  initialState: data,
  extraReducers: (builendr) => {
    builendr.addCase(getSeiresSearch.pending, (state, action) => {
      state.loding = true;
    });
    builendr.addCase(getSeiresSearch.fulfilled, (state, action) => {
      state.searchSeriesBage = action.payload.results;
      state.loding = false;
    });
    builendr.addCase(getSeiresSearch.rejected, (state, action) => {
      state.loding = false;
      state.erorr = true;
    });
  },
});

export const searchSeires = seriesSearchSlice.reducer;
