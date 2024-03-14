import React from "react";
import MovieHome from "./dowenTopHome/MovieHome";
import SeriseHome from "./dowenTopHome/SeriseHome";
import TopHome from "./headrHome/HeadrHome";
import TopMovies from "./topMovies/TopMovies";
import TopSeires from "./topSeires/TopSeires";

const Home = () => {
  return (
    <div>
      <TopHome />
      <MovieHome />
      <SeriseHome />
      <TopMovies />
      <TopSeires />
    </div>
  );
};

export default Home;
