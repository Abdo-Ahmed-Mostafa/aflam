import React, { useEffect, useState } from "react";
import Nave from "./Component/Nave/Nave";
import Foter from "./Component/Fotear/Foter";
import ContactUs from "./Bages/ContactUs/ContactUs";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Bages/Home/Home";
import Movies from "./Bages/Moveis/Movies";
import Series from "./Bages/Series/Series";
import ErorrBage from "./Bages/Lod_errors/ErorrBage";
import SearchMovies from "./Bages/Moveis/SearchMovies";
import { useDispatch, useSelector } from "react-redux";
import { getdataSearch } from "./redux_system/Slices/searchMoviesSlice";
import SearchSeries from "./Bages/Series/SearchSeries";
import { getSeiresSearch } from "./redux_system/Slices/searchSeiresSlice";
import { getBtnSearch } from "./redux_system/Slices/searchMoviesBtnSlice";
import { getBtnSearchseries } from "./redux_system/Slices/searchSeiresBtnSlice";
import FinshDetialsMovies from "./Bages/Moveis/FinshDetialsMovies";
import AllCastAndCrew from "./Bages/Moveis/AllCastAndCrew";
import ReviewsMovies from "./Bages/Moveis/ReviewsMovies";
import BackDropsMovies from "./Bages/Moveis/BackDropsMovies";
import PostersMoveis from "./Bages/Moveis/PostersMoveis";
import DetialsePersonMoveis from "./Bages/Moveis/DetialsePersonMoveis";
import FinshDetailsSeires from "./Bages/Series/FinshDetailsSeires";
import AllCastAndCrewSeires from "./Bages/Series/AllCastAndCrewSeires";
import ThisSeassone from "./Bages/Series/ThisSeassone";
import AllSeasonSeires from "./Bages/Series/AllSeasonSeires";
import ReviewsSeries from "./Bages/Series/ReviewsSeires";
import PostersSeries from "./Bages/Series/PostersSeires";
import BackDropsSeires from "./Bages/Series/BackDropsSeires";
import CollectionPage from "./Bages/Moveis/CollectionPage";

const App = () => {
  const [search, setSearch] = useState("");
  const [ceheck, setCechek] = useState(true);
  const { searchMovies } = useSelector((state) => state.searchMov);
  const { searchSeriesBage } = useSelector((state) => state.searchSeires);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handelSearch = () => {
    if (searchMovies.length == 0 && searchSeriesBage.length == 0) {
      alert("Sorry, there is no a Result");
    } else if (!ceheck) {
      navigate("/searchseries");
      dispatch(getBtnSearchseries(search));
    } else {
      navigate("/searchmovie");
      dispatch(getBtnSearch(search));
    }
  };
  useEffect(() => {
    dispatch(getdataSearch(search));
    dispatch(getSeiresSearch(search));
  }, [search]);
  return (
    <div className="bg-black">
      <Nave
        search={search}
        setSearch={setSearch}
        ceheck={ceheck}
        setCechek={setCechek}
        searchMovies={searchMovies}
        navigate={navigate}
        dispatch={dispatch}
        handelSearch={handelSearch}
        searchSeriesBage={searchSeriesBage}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/moveis" element={<Movies />} />
        <Route path="/searchmovie" element={<SearchMovies />} />
        <Route path="/series" element={<Series />} />
        <Route path="/searchseries" element={<SearchSeries />} />
        <Route path="/series/:seriesid" element={<FinshDetailsSeires />} />
        <Route
          path="/series/:seriesid/posterseires"
          element={<PostersSeries />}
        />
        <Route
          path="/series/:seriesid/backdrops"
          element={<BackDropsSeires />}
        />
        <Route
          path="/series/:seriesid/thisseassone"
          element={<ThisSeassone />}
        />
        <Route
          path="/series/:seriesid/allseairesseassone"
          element={<AllSeasonSeires />}
        />
        <Route
          path="/series/:seriesid/reviwesSeires"
          element={<ReviewsSeries />}
        />
        <Route
          path="/series/:seriesid/credits"
          element={<AllCastAndCrewSeires />}
        />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/detilseMov/:movieid" element={<FinshDetialsMovies />} />
        <Route
          path="/detilseMov/:personid/person"
          element={<DetialsePersonMoveis />}
        />
        <Route
          path="/detilseMov/:movieid/titel/:coloiction"
          element={<CollectionPage />}
        />
        <Route path="/detilseMov/:movieid/cast" element={<AllCastAndCrew />} />
        <Route
          path="/detilseMov/:movieid/reviwes"
          element={<ReviewsMovies />}
        />
        <Route
          path="/detilseMov/:movieid/backDrops"
          element={<BackDropsMovies />}
        />
        <Route
          path="/detilseMov/:movieid/postars"
          element={<PostersMoveis />}
        />
        <Route path="*" element={<ErorrBage />} />
      </Routes>
      <Foter />
    </div>
  );
};

export default App;
