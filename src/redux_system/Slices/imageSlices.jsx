import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  backDropsMovies: [],
  backDropsMovieslang: [],
  backDropsMoviesNolang: [],
  logosMovies: [],
  postersMovies: [],
  postersNoLang: [],
  postersEn: [],
  postersKo: [],
  postersPt: [],
  postersHe: [],
  postersTh: [],
  postersUk: [],
  postersFr: [],
  postersDe: [],
  postersRo: [],
  postersHu: [],
  postersTr: [],
  postersEs: [],
  postersZh: [],
  postersCs: [],
  postersRu: [],
  postersFa: [],
  postersKk: [],
  //For Series Image//
  backDropsSeires: [],
  backDropsSeiresNoLAng: [],
  backDropsSeiresEn: [],
  backDropsSeiresFr: [],
  logosSeries: [],
  postersSeires: [],
  postersSeiresNoLAng: [],
  postersSeiresEn: [],
  postersSeiresFr: [],
  postersSeiresHu: [],
  postersSeiresZh: [],
  postersSeiresRu: [],
  postersSeiresUk: [],
  postersSeiresPt: [],
  postersSeiresEs: [],
  postersSeiresHe: [],
  postersSeiresVi: [],
  postersSeiresSk: [],
  postersSeiresRo: [],
  postersSeiresAr: [],
  postersSeiresJa: [],
  loding: false,
  erorr: false,
};
export const getImageMovies = createAsyncThunk(
  "imgeMovies",
  async (moviesId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/movie/${moviesId}/images`,
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
export const getImageseries = createAsyncThunk(
  "imgeSeries",
  async (seriesId, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const data = await axios({
        method: "GET",
        url: `https://api.themoviedb.org/3/tv/${seriesId}/images`,
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

const imageSlice = createSlice({
  name: "imgeMovies",
  initialState: data,
  extraReducers: (builender) => {
    // For Movies//
    builender.addCase(getImageMovies.pending, (state, action) => {
      state.loding = true;
    });
    builender.addCase(getImageMovies.fulfilled, (state, action) => {
      state.loding = false;
      state.backDropsMovies = action.payload.backdrops;
      state.logosMovies = action.payload.logos;
      state.postersMovies = action.payload.posters;
      // this is for filetr Contrue For backdrops

      state.backDropsMovieslang = action.payload.backdrops.filter((lang) => {
        return lang.iso_639_1 === "en" && lang;
      });
      state.backDropsMoviesNolang = action.payload.backdrops.filter((lang) => {
        return lang.iso_639_1 === null && lang;
      });
      // this is for filetr Contrue For Posters

      state.postersNoLang = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === null && lang;
      });
      state.postersEn = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "en" && lang;
      });
      state.postersKo = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "ko" && lang;
      });
      state.postersPt = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "pt" && lang;
      });
      state.postersHe = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "he" && lang;
      });
      state.postersTh = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "th" && lang;
      });
      state.postersUk = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "uk" && lang;
      });
      state.postersFr = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "fr" && lang;
      });
      state.postersDe = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "de" && lang;
      });
      state.postersRo = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "ro" && lang;
      });
      state.postersRu = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "ru" && lang;
      });
      state.postersHu = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "hu" && lang;
      });
      state.postersTr = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "tr" && lang;
      });
      state.postersEs = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "es" && lang;
      });
      state.postersZh = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "zh" && lang;
      });
      state.postersCs = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "cs" && lang;
      });
      state.postersFa = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "fa" && lang;
      });
      state.postersKk = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "kk" && lang;
      });
    });
    builender.addCase(getImageMovies.rejected, (state, action) => {
      state.loding = false;
      state.erorr = true;
    });
    //for Seires //
    builender.addCase(getImageseries.pending, (state, action) => {
      state.loding = true;
    });
    builender.addCase(getImageseries.fulfilled, (state, action) => {
      state.loding = false;
      state.backDropsSeires = action.payload.backdrops;
      state.logosSeries = action.payload.logos;
      state.postersSeires = action.payload.posters;
      state.postersSeiresNoLAng = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === null && lang;
      });
      state.postersSeiresEn = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "en" && lang;
      });
      state.postersSeiresFr = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "fr" && lang;
      });
      state.postersSeiresHu = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "hu" && lang;
      });
      state.postersSeiresZh = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "zh" && lang;
      });
      state.postersSeiresRu = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "ru" && lang;
      });
      state.postersSeiresUk = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "uk" && lang;
      });
      state.postersSeiresPt = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "pt" && lang;
      });
      state.postersSeiresEs = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "es" && lang;
      });
      state.postersSeiresHe = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "he" && lang;
      });
      state.postersSeiresSk = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "sk" && lang;
      });
      state.postersSeiresJa = action.payload.posters.filter((lang) => {
        return lang.iso_639_1 === "ja" && lang;
      });
      state.backDropsSeiresNoLAng = action.payload.backdrops.filter((lang) => {
        return lang.iso_639_1 === null && lang;
      });
      state.backDropsSeiresEn = action.payload.backdrops.filter((lang) => {
        return lang.iso_639_1 === "en" && lang;
      });
      state.backDropsSeiresFr = action.payload.backdrops.filter((lang) => {
        return lang.iso_639_1 === "fr" && lang;
      });
      state.backDropsSeiresEn = action.payload.backdrops.filter((lang) => {
        return lang.iso_639_1 === "en" && lang;
      });
    });
    builender.addCase(getImageseries.rejected, (state, action) => {
      state.loding = false;
      state.erorr = true;
    });
  },
});

export const allImage = imageSlice.reducer;
