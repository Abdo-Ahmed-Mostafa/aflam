import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  details: [],
  loding: false,
  erorr: false,
  collection: [],
};

export const collectionsMovei = createAsyncThunk(
  "Details collections",
  async (moviesId) => {
    console.log(moviesId);

    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/collection/${moviesId}`,
        params: { language: "en-US" },
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjBhN2IxNGFiYzNmOGNmOTY2YmRiYmI2MGU3Yjk2MiIsInN1YiI6IjY1YzAwYzk2NTE5YmJiMDE4NGJlZjA2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PVsjQWcevl83yJmFE1J9KeUTCvLhQkUZ2XoAG_T3icU",
        },
      });
      return data.data;
    } catch (er) {
      // console.log(er.massege);
    }
  }
);

export const detailsMovie = createAsyncThunk("Details", async (moviesId) => {
  try {
    const data = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${moviesId}`,
      params: { language: "en-US" },
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjBhN2IxNGFiYzNmOGNmOTY2YmRiYmI2MGU3Yjk2MiIsInN1YiI6IjY1YzAwYzk2NTE5YmJiMDE4NGJlZjA2YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PVsjQWcevl83yJmFE1J9KeUTCvLhQkUZ2XoAG_T3icU",
      },
    });
    return data.data;
  } catch (er) {
    // console.log(er.massege);
  }
});

const detilseSlice = createSlice({
  name: "details",
  initialState: data,
  extraReducers: (bulinder) => {
    bulinder.addCase(detailsMovie.pending, (state, action) => {
      state.loding = true;
    });
    bulinder.addCase(detailsMovie.fulfilled, (state, action) => {
      state.details = action.payload;
      state.loding = false;
    });

    bulinder.addCase(detailsMovie.rejected, (state, action) => {
      state.loding = false;
      state.erorr = true;
    });
    // For collections //
    bulinder.addCase(collectionsMovei.fulfilled, (state, action) => {
      state.collection = action.payload;
      state.loding = false;
    });
  },
});

export const detailsMov = detilseSlice.reducer;
