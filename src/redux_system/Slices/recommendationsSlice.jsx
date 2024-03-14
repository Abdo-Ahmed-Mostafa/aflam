import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const data = {
  recommendationsMovies: [],
  recommendationsSeires: [],
  lodingRecommMovei: false,
  lodingRecommSeires: false,
};

export const getDataRecommMovies = createAsyncThunk(
  "get Data Recommendations",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${id}/recommendations`,
        params: { language: "en-US", page: "1" },
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
export const getDataRecommSeires = createAsyncThunk(
  "getseries Decommendations",
  async (id, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${id}/recommendations`,
        params: { language: "en-US", page: "1" },
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

const recommendSlice = createSlice({
  name: "get Data Recommendations",
  initialState: data,
  extraReducers: (builnder) => {
    //For Movies //
    builnder.addCase(getDataRecommMovies.pending, (state, action) => {
      state.lodingRecommMovei = true;
    });
    builnder.addCase(getDataRecommMovies.fulfilled, (state, action) => {
      state.lodingRecommMovei = false;
      state.recommendationsMovies = action.payload.results;
    });
    builnder.addCase(getDataRecommMovies.rejected, (state, action) => {
      state.lodingRecommMovei = false;
    });
    //For Seires //
    builnder.addCase(getDataRecommSeires.pending, (state, action) => {
      state.lodingRecommSeires = true;
    });
    builnder.addCase(getDataRecommSeires.fulfilled, (state, action) => {
      state.lodingRecommSeires = false;

      state.recommendationsSeires = action.payload.results;
    });
    builnder.addCase(getDataRecommSeires.rejected, (state, action) => {
      state.lodingRecommSeires = false;
    });
  },
});

export const recommendations = recommendSlice.reducer;
