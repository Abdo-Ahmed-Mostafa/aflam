import React, { useEffect } from "react";
import { Pagination } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  getSeiresBage,
  increment,
  to1,
  to500,
} from "../../redux_system/Slices/showSeires";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";
import Loding from "../Lod_errors/Loding";
import ShowMoreText from "react-show-more-text";
import { useNavigate } from "react-router-dom";
import ErorrBage from "../Lod_errors/ErorrBage";

const Series = () => {
  const { seriesBage } = useSelector((state) => state.showSeries);
  const { checkSeries } = useSelector((state) => state.showSeries);
  const { conter } = useSelector((state) => state.showSeries);
  const { loding } = useSelector((state) => state.showSeries);
  const { erorr } = useSelector((state) => state.showSeries);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getSeiresBage());
  }, [checkSeries]);
  return (
    <div className="pt-5">
      {!erorr ? (
        !loding ? (
          seriesBage && (
            <div>
              <div className="text-light  container mt-5 ">
                <div className="d-flex align-items-center   pt-5 mb-5 flex-column text-light">
                  <h2>Seires</h2>
                  <h2>
                    PAGE NUMBER <span className="text-info">{conter}</span> FROM{" "}
                    <span className="text-info">500</span>
                  </h2>
                </div>
                <div className="d-flex justify-content-center gap-4  align-items-center  flex-wrap  ">
                  {seriesBage.results
                    ? seriesBage.results.map((movie, index) => (
                        <div key={index}>
                          <Card
                            style={{ width: "18rem" }}
                            className="bg-dark text-light"
                          >
                            <Card.Img
                              variant="top"
                              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}`}
                            />
                            <Card.Body>
                              <Card.Title>
                                TAITLE : {movie.original_name}
                              </Card.Title>
                              <Card.Title>
                                {movie.overview == "" ? (
                                  <span
                                    style={{ fontSize: "0.8em" }}
                                    className="fw-6"
                                  >
                                    OVERVIEW : There is no Overview
                                  </span>
                                ) : (
                                  <ShowMoreText
                                    lines={1}
                                    more={
                                      <span className="text-info text-decoration-underline ">
                                        Show more
                                      </span>
                                    }
                                    less={
                                      <span className="text-info text-decoration-underline ">
                                        Show less
                                      </span>
                                    }
                                    anchorClass="fs-6"
                                  >
                                    <span
                                      style={{ fontSize: "0.8em" }}
                                      className="d-none"
                                    >
                                      OVERVIEW : {movie.overview}
                                    </span>
                                    <span className="d-block">
                                      <span className="text-info ">
                                        OVERVIEW :{" "}
                                      </span>
                                      {movie.overview}
                                    </span>
                                  </ShowMoreText>
                                )}
                              </Card.Title>
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
                                  onClick={() =>
                                    navigate(`/series/${movie.id}`)
                                  }
                                >
                                  DETAILS
                                </Button>
                              </div>
                            </Card.Body>
                          </Card>
                        </div>
                      ))
                    : ""}
                </div>
              </div>
              <div className="d-flex  justify-content-center mt-5 ">
                <Pagination>
                  <Pagination.First onClick={() => dispatch(to1())} />
                  <Pagination.Prev onClick={() => dispatch(decrement())} />
                  <Pagination.Item>{conter}</Pagination.Item>

                  <Pagination.Next onClick={() => dispatch(increment())} />
                  <Pagination.Last onClick={() => dispatch(to500())} />
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

export default Series;
