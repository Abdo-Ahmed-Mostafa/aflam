import React, { useEffect } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { detailsMovie } from "../../redux_system/Slices/detailsMovies";
import {
  getReviewsMovies,
  getReviewsSeries,
} from "../../redux_system/Slices/reviewsSlices";
import ShowMoreText from "react-show-more-text";
import { getDetailsSeires } from "../../redux_system/Slices/detailsSeires";
const ReviewsSeries = () => {
  const { detailsSer } = useSelector((state) => state.detailsSeriesData);
  const navegate = useNavigate();
  const { seriesid } = useParams();
  const dispatch = useDispatch();
  const { reviewsSerires } = useSelector((state) => state.reviews);
  console.log(detailsSer);

  useEffect(() => {
    dispatch(getDetailsSeires(seriesid));
    dispatch(getReviewsSeries(seriesid));
  }, []);

  return (
    <div>
      <div className="col-12 bg-dark mb-5 pt-5 ">
        <div className="col-12 border border-0 bg-dark text-light container p-3">
          <div className="text-light bg-dark d-flex flex-column flex-sm-row align-items-center gap-3 card-body">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${detailsSer.poster_path}`}
              width="11%"
              alt="Not Found"
              className="col-6 col-sm-4 col-md-3 rounded col-lg-1 "
            />
            <div className="d-flex justify-content-center  ms-3 flex-column point ">
              <h3>
                {detailsSer.name}(
                {detailsSer.first_air_date &&
                  detailsSer.first_air_date.slice(0, 4)}
                ){" "}
              </h3>
              <div className="">
                <p onClick={() => navegate(-1)}>
                  {" "}
                  <span>
                    <FaArrowLeftLong />
                  </span>{" "}
                  Back to main
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {reviewsSerires.length != 0 &&
        reviewsSerires.map((reviewsMovie, index) => (
          <div
            key={index}
            className=" bg-dark d-flex flex-column flex-sm-row  gap-3 gap-sm-4  container  rounded w-100 mb-5 "
          >
            <div className="">
              <div className=" mt-3 ms-3 text-center d-flex flex-column align-items-center align-items-sm-start   ">
                <h3
                  className="bg-secondary pt-3 text-light"
                  style={{
                    width: "3em",
                    height: "10vh",
                    borderRadius: "50%",
                  }}
                >
                  R
                </h3>
              </div>
            </div>
            <div className="">
              <div className="text-light">
                <div>
                  <h3 className="text-light ps-5 mt-3">
                    A review by{" "}
                    <span className="text-info">{reviewsMovie.author}</span>
                  </h3>
                </div>
                <div>
                  <h6 className="ps-5">
                    Written by{" "}
                    <span className="text-info">{reviewsMovie.author}</span> on
                    <span className="text-info">
                      {" "}
                      {reviewsMovie.created_at.slice(0, 10).split("-")[1]}
                      {","}
                      {reviewsMovie.created_at.slice(0, 10).split("-")[2]}
                      {","}
                      {reviewsMovie.created_at.slice(0, 10).split("-")[0]}
                    </span>
                  </h6>
                </div>
                <div>
                  <div className="ms-5 mb-5 ">
                    <h4 className="  mt-4 text-primary">Content :-</h4>
                    <ShowMoreText
                      lines={3}
                      more={
                        <span className="text-info text-decoration-underline  ">
                          Show more
                        </span>
                      }
                      less={
                        <span className="text-info text-decoration-underline ">
                          Show less
                        </span>
                      }
                      anchorClass="fs-6"
                      onClick={() => {}}
                    >
                      <span className="d-block">{reviewsMovie.content}</span>
                    </ShowMoreText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReviewsSeries;
