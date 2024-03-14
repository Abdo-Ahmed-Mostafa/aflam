import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { getMoveis } from "../../../redux_system/Slices/moviesSlice";
import ReactStars from "react-stars";
import { useNavigate } from "react-router-dom";
import Loding from "./../../Lod_errors/Loding";
import ErorrBage from "../../Lod_errors/ErorrBage";

const TopMovies = () => {
  const { homeMove } = useSelector((state) => state.movie);
  const { loding } = useSelector((state) => state.movie);
  const { erorr } = useSelector((state) => state.movie);
  const topMoviesHome =
    homeMove.results &&
    homeMove.results.filter((movie) => {
      return movie.vote_average >= 7.1;
    });
  const navgate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMoveis());
  }, []);

  return (
    <div>
      {!erorr ? (
        !loding ? (
          homeMove && (
            <div className="text-light  container mt-5 ">
              <h2 className="mt-5 mb-5  text-info text-center text-lg-start">
                TOP MOVIES
              </h2>
              <div className="d-flex justify-content-center gap-5  align-items-center  flex-wrap  ">
                {topMoviesHome
                  ? topMoviesHome.map((movie, index) => (
                      <Card
                        key={index}
                        style={{ width: "18rem" }}
                        className="bg-dark text-light"
                      >
                        <Card.Img
                          variant="top"
                          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                        />
                        <Card.Body>
                          <Card.Title>TAITLE : {movie.title}</Card.Title>
                          <div className="d-flex  justify-content-between mt-3">
                            <Card.Text className="text-info mb-4 mt-2">
                              RATE : {movie.vote_average}
                            </Card.Text>
                            <Card.Text>
                              {" "}
                              <ReactStars
                                count={5}
                                value={movie.vote_average / 2}
                                edit={false}
                                size={24}
                                color2={"#ffd700"}
                              />
                            </Card.Text>
                          </div>
                          <div className="text-center">
                            <Button
                              variant="outline-info"
                              onClick={() => navgate(`/detilseMov/${movie.id}`)}
                            >
                              DETAILS
                            </Button>
                          </div>
                        </Card.Body>
                      </Card>
                    ))
                  : ""}
              </div>
            </div>
          )
        ) : (
          <Loding />
        )
      ) : (
        <ErorrBage />
      )}
    </div>
  );
};

export default TopMovies;
/*
 */
