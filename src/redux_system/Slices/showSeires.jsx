import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const seires = {
  seriesBage: [],
  conter: 1,
  checkSeries: true,
  loding: false,
  erorr: false,
};
const changeBage = {
  bage: 1,
};
export const getSeiresBage = createAsyncThunk("show", async () => {
  try {
    const data = await axios({
      method: "GET",
      url: "https://api.themoviedb.org/3/tv/popular",
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

const showSlice = createSlice({
  name: "Seires",
  initialState: seires,
  reducers: {
    increment: (state) => {
      state.conter < 500 && state.conter++;
      changeBage.bage = state.conter;
      state.checkSeries = !state.checkSeries;
    },
    decrement: (state) => {
      state.conter > 1 && state.conter--;
      changeBage.bage = state.conter;
      state.checkSeries = !state.checkSeries;
    },
    to1: (state) => {
      state.conter = 1;
      changeBage.bage = state.conter;
      state.checkSeries = !state.checkSeries;
    },
    to500: (state) => {
      state.conter = 500;
      changeBage.bage = state.conter;
      state.checkSeries = !state.checkSeries;
    },
  },
  extraReducers: (bulilder) => {
    bulilder.addCase(getSeiresBage.pending, (state, action) => {
      state.loding = true;
    });
    bulilder.addCase(getSeiresBage.fulfilled, (state, action) => {
      state.seriesBage = action.payload;
      state.loding = false;
    });
    bulilder.addCase(getSeiresBage.rejected, (state, action) => {
      state.loding = false;
      state.erorr = true

    });
  },
});

export const showSeries = showSlice.reducer;

export const { increment, decrement, to1, to500 } = showSlice.actions;
