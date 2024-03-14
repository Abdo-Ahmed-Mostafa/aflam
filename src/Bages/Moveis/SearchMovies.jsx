import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loding from "../Lod_errors/Loding";
import ErorrBage from "../Lod_errors/ErorrBage";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import ReactStars from "react-stars";

const SearchMovies = ({ searchBtn }) => {
  const { searchBtnMovies, erorr, loding } = useSelector(
    (state) => state.searchBtn
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="pt-5">
      {!erorr ? (
        !loding ? (
          searchBtnMovies && (
            <div>
              <div className="d-flex align-items-center   pt-5 flex-column text-info">
                <h2>Search in Movies</h2>
              </div>
              <div className="text-light  container mt-5 ">
                <div className="d-flex justify-content-center gap-4  align-items-center  flex-wrap  ">
                  {searchBtnMovies
                    ? searchBtnMovies.map((movie, index) => (
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
                                  color={"#ffd700"}
                                />
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

export default SearchMovies;
