import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  searchBtnMovies: [],
  loding: false,
  erorr: false,
};

export const getBtnSearch = createAsyncThunk(
  "get Data",
  async (idMovies, AsyncThunk) => {
    const { rejectWithValue } = AsyncThunk;
    try {
      const data = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
        params: {
          query: idMovies,
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
      rejectWithValue(er);
    }
  }
);

const searchBtnSlice = createSlice({
  name: "getDataSearch",
  initialState: data,
  extraReducers: (bulilder) => {
    bulilder.addCase(getBtnSearch.pending, (state, action) => {
      state.loding = true;
    });
    bulilder.addCase(getBtnSearch.fulfilled, (state, action) => {
      state.loding = false;
      state.searchBtnMovies = action.payload.results;
    });
    bulilder.addCase(getBtnSearch.rejected, (state, action) => {
      state.loding = false;
      state.erorr = true;
    });
  },
});

export const searchBtn = searchBtnSlice.reducer;
