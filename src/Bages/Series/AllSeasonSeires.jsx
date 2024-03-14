import React, { useEffect } from "react";
import { getDetailsSeires } from "../../redux_system/Slices/detailsSeires";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "react-bootstrap/Button";
import { IoStarSharp } from "react-icons/io5";

const AllSeasonSeires = () => {
  const { detailsSer, loding } = useSelector(
    (state) => state.detailsSeriesData
  );
  const { seriesid } = useParams();
  const dispatch = useDispatch();
  const navigete = useNavigate();
  const newAvreage = `${
    detailsSer &&
    detailsSer.seasons &&
    detailsSer.seasons[detailsSer.seasons.length - 1] &&
    detailsSer.seasons[detailsSer.seasons.length - 1].vote_average
  }`;
  console.log(detailsSer);
  useEffect(() => {
    dispatch(getDetailsSeires(seriesid));
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
                <p onClick={() => navigete(-1)}>
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
      <div className="d-flex flex-column align-items-center align-items-lg-start gap-5 pt-5 p-lg-5">
        {detailsSer.seasons?.map((data, index) => (
          <div
            key={index}
            className="d-flex flex-column align-items-center align-items-lg-start col-12 col-sm-7 col-md-5 col-lg-12 bg-dark"
          >
            {/* {console.log()} */}
            <div className="col-10 col-lg-12 bg-dark rounded card">
              <div className="col-12 d-flex flex-column flex-lg-row align-items-center gap-0 gap-lg-2 p-0 card-body">
                <img
                  src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.poster_path}`}
                  alt="Not Fouud"
                  className="col-12 col-lg-2 rounded-start point"
                />
                <div className="d-flex flex-column text-center text-lg-start p-4 p-lg-4 ps-lg-2  gap-2 gap-lg-4">
                  <div className="d-flex flex-column flex-lg-row flex-wrap align-items-center gap-3 gap-lg-2 fw-bold text-light">
                    {" "}
                    <h5 className="point">Season ({index + 1}) </h5>
                    {data.vote_average != 0 && (
                      <Button
                        disabled="true"
                        variant="light"
                        className=" fw-bold border-0 pt-0 pb-0  "
                      >
                        <IoStarSharp />
                        {data.vote_average.toString().slice(0, 3)}
                      </Button>
                    )}
                    <h5>
                      {data.air_date.slice(0, 4)} | {data.episode_count}{" "}
                      Episodes
                    </h5>
                  </div>
                  <div className="d-flex flex-column flex-lg-row gap-2 align-items-center text-light fw-bold">
                    <p>
                      <span>
                        Season{" "}
                        <span class="text-info fw-bold">{index + 1}</span> of{" "}
                        <span className=" border-bottom ">
                          {detailsSer?.name}
                        </span>
                        <span> premiered on </span>
                        <span className="text-info">
                          {detailsSer?.first_air_date}
                        </span>
                      </span>
                    </p>
                  </div>
                  <div className="text-light">
                    {data.overview != "" ? (
                      <p>{data.overview}</p>
                    ) : (
                      <p>There is no Overview for this Season</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllSeasonSeires;
