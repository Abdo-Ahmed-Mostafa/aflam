import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  homeMove: [],
  loding: false,
  erorr: false,
};
export const getMoveis = createAsyncThunk("Movies", async () => {
  try {
    const data = await axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/movie/now_playing",
      params: { language: "en-US", page: "1" },
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

const movieSlice = createSlice({
  name: "Movie",
  initialState: data,
  extraReducers: (bulilder) => {
    bulilder.addCase(getMoveis.pending, (state, action) => {
      state.loding = true;
    });
    bulilder.addCase(getMoveis.fulfilled, (state, action) => {
      state.loding = false;

      state.homeMove = action.payload;
    });
    bulilder.addCase(getMoveis.rejected, (state, action) => {
      state.loding = false;
      state.erorr = true;
    });
  },
});

export const movie = movieSlice.reducer;
