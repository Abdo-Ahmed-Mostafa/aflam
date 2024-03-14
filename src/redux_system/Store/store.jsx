import { configureStore } from "@reduxjs/toolkit";
import { movie } from "./../Slices/moviesSlice";
import { seires } from "./../Slices/seiresSlice";
import { moviesBage } from "./../Slices/showMoveis";
import { showSeries } from "./../Slices/showSeires";
import { detailsMov } from "./../Slices/detailsMovies";
import { creditsMov } from "./../Slices/creditsMovies";
import { videoDetalisMovie } from "./../Slices/videoPlay";
import { detailsSeriesData } from "./../Slices/detailsSeires";
import { creditsSeries } from "./../Slices/creditsSeires";
import { seiresVideos } from "./../Slices/videoPlayeSeires";
import { searchMov } from "./../Slices/searchMoviesSlice";
import { searchBtn } from "./../Slices/searchMoviesBtnSlice";
import { searchSeires } from "./../Slices/searchSeiresSlice";
import { searchBtnSeries } from "./../Slices/searchSeiresBtnSlice";
import { keyWords } from "./../Slices/keyWordsSlice";
import { reviews } from "./../Slices/reviewsSlices";
import { allImage } from "./../Slices/imageSlices";
import { recommendations } from "./../Slices/recommendationsSlice";
import { pirsonDetails } from "./../Slices/pirsonSlices";
import { externalId } from "./../Slices/externalIDsSlice";
import { deatilsSesson } from "./../Slices/detailsSeasonSlice";
const store = configureStore({
  reducer: {
    movie,
    seires,
    moviesBage,
    showSeries,
    detailsMov,
    creditsMov,
    videoDetalisMovie,
    detailsSeriesData,
    creditsSeries,
    seiresVideos,
    searchMov,
    searchBtn,
    searchSeires,
    searchBtnSeries,
    keyWords,
    reviews,
    allImage,
    recommendations,
    pirsonDetails,
    externalId,
    deatilsSesson,
  },
});

export default store;
