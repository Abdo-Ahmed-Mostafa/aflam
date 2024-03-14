import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  searchMovies: [],
  loding: false,
  erorr: false,
};

export const getdataSearch = createAsyncThunk(
  "searchMovie",
  async (searchBtn) => {
    try {
      const data = await axios({
        method: "GET",
        url: "https://api.themoviedb.org/3/search/movie",
        params: {
          query: searchBtn,
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
      console.log(er.massege);
    }
  }
);

const searchMovies = createSlice({
  name: "searchMovie",
  initialState: data,
  extraReducers: (builendr) => {
    builendr.addCase(getdataSearch.pending, (state, action) => {
      state.loding = true;
    });
    builendr.addCase(getdataSearch.fulfilled, (state, action) => {
      state.loding = false;

      state.searchMovies = action.payload.results;
    });
    builendr.addCase(getdataSearch.rejected, (state, action) => {
      state.erorr = true;
      state.loding = false;
    });
  },
});

export const searchMov = searchMovies.reducer;
