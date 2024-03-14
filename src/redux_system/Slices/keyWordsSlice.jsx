import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const data = {
  keyWordsMovies: [],
  keyWordsSeires: [],
  loding: false,
  erorr: false,
};

export const getKeyWordsMovie = createAsyncThunk(
  "keywordsMovie",
  async (idMoevie, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${idMoevie}/keywords`,
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
export const getKeyWordSeries = createAsyncThunk(
  "keywordsSeries",
  async (idSeries, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${idSeries}/keywords`,
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

const keyWordsSlice = createSlice({
  name: "keyWords",
  initialState: data,
  extraReducers: (builnder) => {
    // For Movies Key Words //
    builnder.addCase(getKeyWordsMovie.pending, (state, action) => {
      state.loding = true;
    });
    builnder.addCase(getKeyWordsMovie.fulfilled, (state, action) => {
      state.loding = false;
      state.keyWordsMovies = action.payload.keywords;
    });
    builnder.addCase(getKeyWordsMovie.rejected, (state, action) => {
      state.erorr = true;
    });
    // For Series Key Words //
    builnder.addCase(getKeyWordSeries.pending, (state, action) => {
      state.loding = true;
    });
    builnder.addCase(getKeyWordSeries.fulfilled, (state, action) => {
      state.loding = false;
      state.keyWordsSeires = action.payload.results;
    });
    builnder.addCase(getKeyWordSeries.rejected, (state, action) => {
      state.erorr = true;
    });
  },
});

export const keyWords = keyWordsSlice.reducer;
