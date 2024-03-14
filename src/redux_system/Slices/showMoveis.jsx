import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const movies = {
  showMovies: [],
  conter: 1,
  check: true,
  loding: false,
  erorr : false

};
const changeBage = {
  bage: 1,
};

export const getShowMovies = createAsyncThunk("ShowMovies", async () => {
  try {
    const data = await axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/popular",
      params: { language: "en-US", page: changeBage.bage },
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
});
const moviesSlice = createSlice({
  name: "ShowMovei",
  initialState: movies,
  reducers: {
    increment: (state) => {
      state.conter < 500 && state.conter++;
      changeBage.bage = state.conter;
      state.check = !state.check;
    },
    decrement: (state) => {
      state.conter > 1 && state.conter--;
      changeBage.bage = state.conter;
      state.check = !state.check;
    },
    to500: (state) => {
      state.conter = 500;
      changeBage.bage = state.conter;
      state.check = !state.check;
    },
    to1: (state) => {
      state.conter = 1;
      changeBage.bage = state.conter;
      state.check = !state.check;
    },
  },

  extraReducers: (bulilder) => {
    bulilder.addCase(getShowMovies.pending, (state, action) => {
      state.loding = true;
    });
    bulilder.addCase(getShowMovies.fulfilled, (state, action) => {
      state.showMovies = action.payload;
      state.loding = false;
    });
    bulilder.addCase(getShowMovies.rejected, (state, action) => {
      state.loding = false;
      state.erorr = true

    });
  },
});

export const moviesBage = moviesSlice.reducer;
export const { increment, decrement, to500, to1 } = moviesSlice.actions;
