import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const data = {
  externalMovie: [],
  externalSeires: [],
};

export const getExternalMovie = createAsyncThunk(
  "getExternal IDs Movie",
  async (idMovie, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/person/${idMovie}/external_ids`,
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
const externalIdeSlices = createSlice({
  name: "getExternal IDs",
  initialState: data,
  extraReducers: (builnder) => {
    builnder.addCase(getExternalMovie.fulfilled, (state, action) => {
      state.externalMovie = action.payload;
    });
  },
});

export const externalId = externalIdeSlices.reducer;
