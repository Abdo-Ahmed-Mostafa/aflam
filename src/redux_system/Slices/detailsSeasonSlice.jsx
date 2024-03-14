import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  lodingSesson: false,
  detailsSeassonBage: [],
  erorr: false,
};

export const getDeatilsSesson = createAsyncThunk(
  "getdata",
  async (details, ThunkAPI) => {
    const { rejectWithValue } = ThunkAPI;
    const { seriesid, sesson } = details;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${seriesid}/season/${sesson}`,
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

const deatilseSessonSliceSes = createSlice({
  name: "sesson",
  initialState: data,
  extraReducers: (builendr) => {
    builendr.addCase(getDeatilsSesson.pending, (state, action) => {
      state.lodingSesson = true;
    });
    builendr.addCase(getDeatilsSesson.fulfilled, (state, action) => {
      state.lodingSesson = false;
      state.detailsSeassonBage = action.payload;
    });
    builendr.addCase(getDeatilsSesson.rejected, (state, action) => {
      state.lodingSesson = false;
      state.erorr = true;
    });
  },
});

export const deatilsSesson = deatilseSessonSliceSes.reducer;
