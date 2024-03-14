import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react-dom/test-utils";

const data = {
  cast: [],
  crew: [],
  crewCreator: [],
  actingCast: [],
  productionCast: [],
  directingCast: [],
  loding: false,
  erorr: false,
};

export const creditsSeire = createAsyncThunk("credits", async (moviesId) => {
  try {
    const data = await axios({
      method: "GET",
      url: `https:///api.themoviedb.org/3/tv/${moviesId}/credits`,
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

const detilsSeireseSlice = createSlice({
  name: "credits",
  initialState: data,
  extraReducers: (bulinder) => {
    bulinder.addCase(creditsSeire.pending, (state, action) => {
      state.loding = true;
    });
    bulinder.addCase(creditsSeire.fulfilled, (state, action) => {
      state.cast = action.payload.cast;
      state.crew = action.payload.crew;
      state.crewCreator = action.payload.crew.filter((Creator) => {
        return Creator.known_for_department === "Creator" && Creator;
      });
      state.directingCast = action.payload.crew.filter((directing) => {
        return directing.known_for_department === "Directing" && directing;
      });

      state.actingCast = action.payload.cast.filter((acting) => {
        return acting.known_for_department === "Acting" && acting;
      });

      state.productionCast = action.payload.crew.filter((production) => {
        return production.known_for_department === "Production" && production;
      });
      state.loding = false;
    });
    bulinder.addCase(creditsSeire.rejected, (state, action) => {
      state.loding = false;
      state.erorr = true;
    });
  },
});

export const creditsSeries = detilsSeireseSlice.reducer;
