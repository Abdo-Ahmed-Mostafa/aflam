import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const data = {
  seiresHome: [],
  loding: false,
  erorr: false,
};
export const getSeires = createAsyncThunk("HomeSeires", async () => {
  try {
    const data = await axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/airing_today",
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

const seiresSlice = createSlice({
  name: "Seires",
  initialState: data,
  extraReducers: (bulilder) => {
    bulilder.addCase(getSeires.pending, (state, action) => {
      state.loding = true;
    });
    bulilder.addCase(getSeires.fulfilled, (state, action) => {
      state.seiresHome = action.payload;
      state.loding = false;
    });
    bulilder.addCase(getSeires.rejected, (state, action) => {
      state.loding = false;
      state.erorr = true;
    });
  },
});

export const seires = seiresSlice.reducer;
