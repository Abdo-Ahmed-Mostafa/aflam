import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Loding from "../Lod_errors/Loding";
import { getDetailsSeires } from "../../redux_system/Slices/detailsSeires";

const BackDropsSeires = () => {
  const { detailsSer } = useSelector((state) => state.detailsSeriesData);
  const {
    backDropsSeiresEn,
    backDropsSeiresNoLAng,
    backDropsSeiresFr,
    loding,
  } = useSelector((state) => state.allImage);
  const navegate = useNavigate();
  const { seriesid } = useParams();
  console.log(detailsSer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailsSeires(seriesid));
  }, [seriesid]);
  return (
    <div>
      <div className="col-12 bg-dark mb-5 pt-5 ">
        <div className="col-12 border border-0 bg-dark text-light container p-3">
          <div className="text-light bg-dark d-flex flex-column flex-sm-row align-items-center gap-3 card-body">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
                detailsSer && detailsSer.poster_path
              }`}
              width="11%"
              alt="Not Found"
              className="col-6 col-sm-4 col-md-3 rounded col-lg-1 "
            />
            <div className="d-flex justify-content-center  ms-3 flex-column point ">
              <h3>
                {detailsSer && detailsSer.name}(
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
      <div className="ms-5">
        <h2 className="text-info">Social</h2>
        {!loding ? (
          <div className=" me-5">
            <Tabs
              defaultActiveKey="home"
              id="uncontrolled-tab-example"
              className="d-flex justify-content-center "
            >
              {backDropsSeiresNoLAng.length > 0 && (
                <Tab
                  eventKey="home"
                  title={`NO LANGUAGE (${backDropsSeiresNoLAng.length}) `}
                  className="bg-dark rounded"
                >
                  <div className="col-12 d-flex justify-content-center flex-wrap gap-4 ">
                    {backDropsSeiresNoLAng &&
                      backDropsSeiresNoLAng.map((nolang, index) => (
                        <img
                          key={index}
                          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
                            nolang && nolang.file_path
                          }`}
                          alt="Not Found"
                          className="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 shadow bg-dark-tertiary rounded mt-3 p-2  "
                        />
                      ))}
                  </div>
                </Tab>
              )}

              {backDropsSeiresEn.length > 0 && (
                <Tab
                  eventKey="ENGLISH"
                  title={`ENGLISH (${backDropsSeiresEn.length})`}
                >
                  <div className="col-12 d-flex justify-content-center flex-wrap gap-4 bg-dark">
                    {backDropsSeiresEn &&
                      backDropsSeiresEn.map((nolang, index) => (
                        <img
                          key={index}
                          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
                            nolang && nolang.file_path
                          }`}
                          alt="Not Found"
                          className="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 shadow bg-dark-tertiary rounded mt-3 p-2  "
                        />
                      ))}
                  </div>{" "}
                </Tab>
              )}
              {backDropsSeiresFr.length > 0 && (
                <Tab
                  eventKey="FRENCH"
                  title={`FRENCH (${backDropsSeiresFr.length})`}
                >
                  <div className="col-12 d-flex justify-content-center flex-wrap gap-4 bg-dark">
                    {backDropsSeiresFr &&
                      backDropsSeiresFr.map((nolang, index) => (
                        <img
                          key={index}
                          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
                            nolang && nolang.file_path
                          }`}
                          alt="Not Found"
                          className="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 shadow bg-dark-tertiary rounded mt-3 p-2  "
                        />
                      ))}
                  </div>{" "}
                </Tab>
              )}
            </Tabs>
          </div>
        ) : (
          <Loding />
        )}
      </div>
    </div>
  );
};

export default BackDropsSeires;
