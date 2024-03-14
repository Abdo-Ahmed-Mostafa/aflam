import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  getShowMovies,
  increment,
  to1,
  to500,
} from "../../redux_system/Slices/showMoveis";
import Pagination from "react-bootstrap/Pagination";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";
import Loding from "../Lod_errors/Loding";
import { useNavigate } from "react-router-dom";
import ErorrBage from "../Lod_errors/ErorrBage";

const Movies = () => {
  const { showMovies } = useSelector((state) => state.moviesBage);
  const { check } = useSelector((state) => state.moviesBage);
  const { conter } = useSelector((state) => state.moviesBage);
  const { loding } = useSelector((state) => state.moviesBage);
  const { erorr } = useSelector((state) => state.moviesBage);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const functionDispatch = useDispatch();
  useEffect(() => {
    dispatch(getShowMovies());
  }, [check]);
  return (
    <div className="pt-5">
      {!erorr ? (
        !loding ? (
          showMovies && (
            <div>
              <div className="d-flex align-items-center   pt-5 flex-column text-light">
                <h2>MOVIES</h2>
                <h2>
                  PAGE NUMBER <span className="text-info">{conter}</span> FROM
                  <span className="text-info">500</span>
                </h2>
              </div>
              <div className="text-light  container mt-5 ">
                <div className="d-flex justify-content-center gap-4  align-items-center  flex-wrap  ">
                  {showMovies.results
                    ? showMovies.results.map((movie, index) => (
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
                                <span>
                                  <ReactStars
                                    count={5}
                                    value={movie.vote_average / 2}
                                    edit={false}
                                    size={24}
                                    color={"#ffd700"}
                                  />
                                </span>
                              </Card.Text>
                            </div>
                            <div className="text-center">
                              <Button
                                variant="outline-info"
                                onClick={() =>
                                  navigate(`/detilseMov/${movie.id}`)
                                }
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
              <div className="d-flex  justify-content-center mt-5 ">
                <Pagination>
                  <Pagination.First onClick={() => functionDispatch(to1())} />
                  <Pagination.Prev
                    onClick={() => functionDispatch(decrement())}
                  />
                  <Pagination.Item>{conter}</Pagination.Item>

                  <Pagination.Next
                    onClick={() => functionDispatch(increment())}
                  />
                  <Pagination.Last onClick={() => functionDispatch(to500())} />
                </Pagination>
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

export default Movies;
