import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSeires } from "../../../redux_system/Slices/seiresSlice";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ReactStars from "react-stars";
import { useNavigate } from "react-router-dom";
import Loding from "../../Lod_errors/Loding";
import ErorrBage from "../../Lod_errors/ErorrBage";

const TopSeires = () => {
  const { seiresHome } = useSelector((state) => state.seires);
  const { loding } = useSelector((state) => state.seires);
  const { erorr } = useSelector((state) => state.seires);
  const topSeiresHome =
    seiresHome.results &&
    seiresHome.results.filter((series) => {
      return series.vote_average >= 6;
    });
  const navgate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSeires());
  }, []);

  return (
    <div>
      {!erorr ? (
        !loding ? (
          seiresHome && (
            <div className="text-light  container mt-5 ">
              <h2 className="mt-5 mb-5  text-info text-center text-lg-start">
                TOP SERIES
              </h2>
              <div className="d-flex justify-content-center gap-5  align-items-center  flex-wrap  ">
                {topSeiresHome
                  ? topSeiresHome.map((series, index) => (
                      <Card
                        key={index}
                        style={{ width: "18rem" }}
                        className="bg-dark text-light"
                      >
                        <Card.Img
                          variant="top"
                          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${series.poster_path}`}
                        />
                        <Card.Body>
                          <Card.Title>TAITLE : {series.title}</Card.Title>
                          <div className="d-flex  justify-content-between mt-3">
                            <Card.Text className="text-info mb-4 mt-2">
                              RATE : {series.vote_average}
                            </Card.Text>
                            <Card.Text>
                              {" "}
                              <ReactStars
                                count={5}
                                value={series.vote_average / 2}
                                edit={false}
                                size={24}
                                color2={"#ffd700"}
                              />
                            </Card.Text>
                          </div>
                          <div className="text-center">
                            <Button
                              variant="outline-info"
                              onClick={() => navgate(`/series/${series.id}`)}
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

export default TopSeires;
