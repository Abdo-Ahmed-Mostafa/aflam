import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const data = {
  actingCast: [],
  productionCast: [],
  directingCast: [],
  directingCrew: [],
  cast: [],
  crew: [],
  crewCrew: [],
  crewArt: [],
  crewSound: [],
  crewEditing: [],
  crewVisualEffects: [],
  crewLighting: [],
  crewCamera: [],
  crewWriting: [],
  crewCostumeMakeUp: [],
  lodingCredits: false,
  erorr: false,
};
export const creditsmove = createAsyncThunk("credits", async (moviesId) => {
  try {
    const data = await axios({
      method: "GET",
      url: `https:///api.themoviedb.org/3/movie/${moviesId}/credits`,
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

const detilseSlice = createSlice({
  name: "credits",
  initialState: data,
  extraReducers: (bulinder) => {
    bulinder.addCase(creditsmove.pending, (state, action) => {
      state.lodingCredits = true;
    });
    bulinder.addCase(creditsmove.fulfilled, (state, action) => {
      state.cast = action.payload.cast;
      state.crew = action.payload.crew;
      state.crewArt = action.payload.crew.filter((Art) => {
        return Art.known_for_department === "Art" && Art;
      });
      state.crewSound = action.payload.crew.filter((Sound) => {
        return Sound.known_for_department === "Sound" && Sound;
      });
      state.crewEditing = action.payload.crew.filter((Editing) => {
        return Editing.known_for_department === "Editing" && Editing;
      });
      state.crewCamera = action.payload.crew.filter((Camera) => {
        return Camera.known_for_department === "Camera" && Camera;
      });
      state.crewWriting = action.payload.crew.filter((Writing) => {
        return Writing.known_for_department === "Writing" && Writing;
      });
      state.directingCrew = action.payload.crew.filter((Directing) => {
        return Directing.known_for_department === "Directing" && Directing;
      });
      state.crewCrew = action.payload.crew.filter((Crew) => {
        return Crew.known_for_department === "Crew" && Crew;
      });
      state.crewCostumeMakeUp = action.payload.crew.filter((CostumeMakeUp) => {
        return (
          CostumeMakeUp.known_for_department === "Costume & Make-Up" &&
          CostumeMakeUp
        );
      });
      state.crewLighting = action.payload.crew.filter((Lighting) => {
        return Lighting.known_for_department === "Lighting" && Lighting;
      });
      state.crewVisualEffects = action.payload.crew.filter((VisualEffects) => {
        return (
          VisualEffects.known_for_department === "Visual Effects" &&
          VisualEffects
        );
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

      state.lodingCredits = false;
    });
    bulinder.addCase(creditsmove.rejected, (state, action) => {
      state.lodingCredits = false;
      state.erorr = true;
    });
  },
});

export const creditsMov = detilseSlice.reducer;
