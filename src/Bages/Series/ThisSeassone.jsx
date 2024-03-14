import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetailsSeires } from "../../redux_system/Slices/detailsSeires";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const ThisSeassone = () => {
  const { detailsSer, loding } = useSelector(
    (state) => state.detailsSeriesData
  );
  const { detailsSeassonBage } = useSelector((state) => state.deatilsSesson);

  const { seriesid } = useParams();
  const dispatch = useDispatch();
  const navegate = useNavigate();
  console.log(detailsSeassonBage);
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
      {detailsSeassonBage?.episodes?.map((data, index) => (
        <div
          key={index}
          className="d-flex flex-column align-items-center align-items-lg-start gap-5 pt-5 p-lg-5"
        >
          <div className="d-flex flex-column align-items-center align-items-lg-start col-12 col-sm-7 col-md-5 p-2 bg-dark col-lg-12">
            <div className="col-12 d-flex flex-column flex-lg-row align-items-start gap-0 gap-lg-2 p-0 card-body   ">
              {" "}
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${data.still_path}`}
                className="col-12 col-lg-1"
                alt=""
              />
              <div className="w-100 d-flex flex-column text-light  align-items-center align-items-lg-start p-4 p-lg-4 ps-lg-2  gap-2 gap-lg-4">
                <div className="col-12 d-flex flex-column flex-lg-row flex-wrap align-items-center justify-content-lg-between gap-3 gap-lg-2 fw-bold">
                  <div className="d-flex flex-column flex-lg-row fs-3 text-center text-lg-start gap-2 gap-lg-3">
                    <h4 className="text-info">{index + 1}</h4>
                    <h4> {data.name}</h4>
                  </div>
                  <div>
                    <h4 className="text-info">
                      {data.air_date} || <span>{data.runtime} min</span>
                    </h4>
                  </div>
                </div>
                <div>
                  <h6>{data.overview}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThisSeassone;
