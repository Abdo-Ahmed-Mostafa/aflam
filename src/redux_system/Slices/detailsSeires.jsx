import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const data = {
  detailsSer: [],
  loding: false,
  erorr: false,
};
export const getDetailsSeires = createAsyncThunk("seires", async (seiresId) => {
  try {
    const data = await axios({
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${seiresId}`,
      params: { language: "en-US" },
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

const detailsSeiresSlice = createSlice({
  name: "seires",
  initialState: data,
  extraReducers: (bulinder) => {
    bulinder.addCase(getDetailsSeires.pending, (state, action) => {
      state.loding = true;
    });
    bulinder.addCase(getDetailsSeires.fulfilled, (state, action) => {
      state.detailsSer = action.payload;
      state.loding = false;
    });
    bulinder.addCase(getDetailsSeires.rejected, (state, action) => {
      console.log(action.payload);
      state.loding = false;
      state.erorr = true

    });
  },
});
export const detailsSeriesData = detailsSeiresSlice.reducer;
