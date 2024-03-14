import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const data = {
  reviewsMovies: [],
  reviewsSerires: [],
  loding: false,
  erorr: false,
};

export const getReviewsMovies = createAsyncThunk(
  "reviewsMovies",
  async (moviesId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${moviesId}/reviews`,
        params: { language: "en-US", page: "1" },
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
export const getReviewsSeries = createAsyncThunk(
  "reviewsSeries",
  async (seriesId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${seriesId}/reviews`,
        params: { language: "en-US", page: "1" },
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

const reviewsSlice = createSlice({
  name: "reviewsMovies",
  initialState: data,
  extraReducers: (builender) => {
    // Moveis Reviews //
    builender.addCase(getReviewsMovies.pending, (state, action) => {
      state.loding = true;
    });
    builender.addCase(getReviewsMovies.fulfilled, (state, action) => {
      state.loding = false;
      state.reviewsMovies = action.payload.results;
    });
    builender.addCase(getReviewsMovies.rejected, (state, action) => {
      state.loding = false;
      state.erorr = true;
    });
    // Series Reviews //
    builender.addCase(getReviewsSeries.pending, (state, action) => {
      state.loding = true;
    });
    builender.addCase(getReviewsSeries.fulfilled, (state, action) => {
      state.loding = false;
      state.reviewsSerires = action.payload.results;
    });
    builender.addCase(getReviewsSeries.rejected, (state, action) => {
      state.loding = false;
      state.erorr = true;
    });
  },
});

export const reviews = reviewsSlice.reducer;
