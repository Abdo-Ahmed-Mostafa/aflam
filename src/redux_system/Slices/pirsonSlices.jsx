import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  detialsPirsonMoveis: [],
  detialsPirsonKnownForMoveis: [],
  detialsPirsonKnownForSeires: [],
  detialsPirsonSeires: [],
  loding: false,
  erorr: false,
};

export const getPirsonMovies = createAsyncThunk(
  "get Pirson Movie",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/person/${id}`,
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
export const getPirsonMoviesKnown = createAsyncThunk(
  "get Pirson Known Movie",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/person/${id}/movie_credits`,
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
export const getPirsonSeiresKnown = createAsyncThunk(
  "get Pirson Sereies known",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/person/${id}/tv_credits`,
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
const pirsonDetailsSlice = createSlice({
  name: "get Pirson",
  initialState: data,
  extraReducers: (builnder) => {
    //For Deatilse Pearson Moveis//
    builnder.addCase(getPirsonMovies.pending, (state, action) => {
      state.loding = true;
    });
    builnder.addCase(getPirsonMovies.fulfilled, (state, action) => {
      state.loding = false;
      state.detialsPirsonMoveis = action.payload;
    });

    builnder.addCase(getPirsonMovies.rejected, (state, action) => {
      state.loding = false;
      state.erorr = true;
    });
    // For Deatels Pearson Series//

    //For Deatiels Pearson Known For Movies//
    builnder.addCase(getPirsonMoviesKnown.pending, (state, action) => {
      state.loding = true;
    });
    builnder.addCase(getPirsonMoviesKnown.fulfilled, (state, action) => {
      state.loding = false;
      state.detialsPirsonKnownForMoveis = action.payload;
    });

    builnder.addCase(getPirsonMoviesKnown.rejected, (state, action) => {
      state.loding = false;
      state.erorr = true;
    });
  },
});

export const pirsonDetails = pirsonDetailsSlice.reducer;
