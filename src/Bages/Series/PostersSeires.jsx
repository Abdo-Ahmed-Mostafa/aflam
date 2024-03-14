import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Loding from "../Lod_errors/Loding";

import { FaLock, FaCheckCircle } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";
import { getDetailsSeires } from "../../redux_system/Slices/detailsSeires";
import { getImageseries } from "../../redux_system/Slices/imageSlices";

const PostersSeries = () => {
  const { detailsSer } = useSelector((state) => state.detailsSeriesData);
  const {
    loding,
    postersSeiresNoLAng,
    postersSeiresEn,
    postersSeiresFr,
    postersSeiresHu,
    postersSeiresZh,
    postersSeiresRu,
    postersSeiresUk,
    postersSeiresPt,
    postersSeiresEs,
    postersSeiresHe,
    postersSeiresVi,
    postersSeiresSk,
    postersSeiresRo,
    postersSeiresAr,
    postersSeiresJa,
  } = useSelector((state) => state.allImage);
  const navegate = useNavigate();
  const { seriesid } = useParams();
  console.log(postersSeiresEn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDetailsSeires(seriesid));
    dispatch(getImageseries(seriesid));
  }, [seriesid]);
  return (
    <div>
      <div className="col-12 bg-dark mb-5 pt-5 ">
        <div className="col-12 border border-0 bg-dark text-light container p-3">
          <div className="text-light bg-dark d-flex flex-column flex-sm-row align-items-center gap-3 card-body">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${detailsSer?.poster_path}`}
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
              {postersSeiresNoLAng.length > 0 && (
                <Tab
                  eventKey={postersSeiresNoLAng.length > 0 ? "home" : "noLang"}
                  title={`NO LANGUAGE (${postersSeiresNoLAng.length}) `}
                  className="bg-dark rounded"
                >
                  <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                    {postersSeiresNoLAng &&
                      postersSeiresNoLAng.map((card, index) => (
                        <div
                          key={index}
                          class="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 bg-dark text-light border mb-5 card"
                        >
                          <img
                            class="col-12"
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${card.file_path}`}
                            alt="Poster"
                          />
                          <div class="border d-flex justify-content-between card-header">
                            <span>info</span>
                            <span>
                              <FaLock />
                            </span>
                          </div>
                          <div class="d-flex flex-column gap-3 card-body">
                            <div class="d-flex ">
                              <span>Primary? </span>
                              <span>
                                <AiFillCloseSquare />
                              </span>
                            </div>
                            <div class="d-flex flex-column">
                              <span>Size</span>
                              <span class="text-info">
                                <span>{card.width}</span> x{" "}
                                <span>{card.height}</span>
                                <span class="text-light ms-2">
                                  <FaCheckCircle />
                                </span>
                              </span>
                            </div>
                            <div class="d-flex flex-column gap-1">
                              <span class="mb-2">Language</span>
                              <select
                                disabled="true"
                                class="form-select form-select-sm"
                              >
                                <option>No Language</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Tab>
              )}

              {postersSeiresNoLAng.length > 0 && (
                <Tab
                  eventKey={postersSeiresEn.length > 0 ? "noLang" : "home"}
                  title={`ENGLISH (${postersSeiresEn.length})`}
                  className="d-felx justify-content-center align-items-center flex-wrap  "
                >
                  <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                    {postersSeiresEn &&
                      postersSeiresEn.map((card, index) => (
                        <div
                          key={index}
                          class="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 bg-dark text-light border card mb-5"
                        >
                          <img
                            class="col-12"
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${card.file_path}`}
                            alt="Poster"
                          />
                          <div class="border d-flex justify-content-between card-header">
                            <span>info</span>
                            <span>
                              <FaLock />
                            </span>
                          </div>
                          <div class="d-flex flex-column gap-3 card-body">
                            <div class="d-flex ">
                              <span>Primary? </span>
                              <span>
                                <AiFillCloseSquare />
                              </span>
                            </div>
                            <div class="d-flex flex-column">
                              <span>Size</span>
                              <span class="text-info">
                                <span>{card.width}</span> x{" "}
                                <span>{card.height}</span>
                                <span class="text-light ms-2">
                                  <FaCheckCircle />
                                </span>
                              </span>
                            </div>
                            <div class="d-flex flex-column gap-1">
                              <span class="mb-2">Language</span>
                              <select
                                disabled="true"
                                class="form-select form-select-sm"
                              >
                                <option>{card.iso_639_1}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Tab>
              )}

              {postersSeiresVi.length > 0 && (
                <Tab
                  eventKey="VIETNAMESE"
                  title={`VIETNAMESE (${postersSeiresVi.length})`}
                >
                  <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                    {postersSeiresVi &&
                      postersSeiresVi.map((card, index) => (
                        <div
                          key={index}
                          class="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 bg-dark text-light border card"
                        >
                          <img
                            class="col-12"
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${card.file_path}`}
                            alt="Poster"
                          />
                          <div class="border d-flex justify-content-between card-header">
                            <span>info</span>
                            <span>
                              <FaLock />
                            </span>
                          </div>
                          <div class="d-flex flex-column gap-3 card-body">
                            <div class="d-flex ">
                              <span>Primary? </span>
                              <span>
                                <AiFillCloseSquare />
                              </span>
                            </div>
                            <div class="d-flex flex-column">
                              <span>Size</span>
                              <span class="text-info">
                                <span>{card.width}</span> x{" "}
                                <span>{card.height}</span>
                                <span class="text-light ms-2">
                                  <FaCheckCircle />
                                </span>
                              </span>
                            </div>
                            <div class="d-flex flex-column gap-1">
                              <span class="mb-2">Language</span>
                              <select
                                disabled="true"
                                class="form-select form-select-sm"
                              >
                                <option>{card.iso_639_1}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Tab>
              )}
              {postersSeiresFr.length > 0 && (
                <Tab
                  eventKey="FRENCH"
                  title={`FRENCH (${postersSeiresFr.length})`}
                >
                  <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                    {postersSeiresFr &&
                      postersSeiresFr.map((card, index) => (
                        <div
                          key={index}
                          class="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 bg-dark text-light border card mb-5"
                        >
                          <img
                            class="col-12"
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${card.file_path}`}
                            alt="Poster"
                          />
                          <div class="border d-flex justify-content-between card-header">
                            <span>info</span>
                            <span>
                              <FaLock />
                            </span>
                          </div>
                          <div class="d-flex flex-column gap-3 card-body">
                            <div class="d-flex ">
                              <span>Primary? </span>
                              <span>
                                <AiFillCloseSquare />
                              </span>
                            </div>
                            <div class="d-flex flex-column">
                              <span>Size</span>
                              <span class="text-info">
                                <span>{card.width}</span> x{" "}
                                <span>{card.height}</span>
                                <span class="text-light ms-2">
                                  <FaCheckCircle />
                                </span>
                              </span>
                            </div>
                            <div class="d-flex flex-column gap-1">
                              <span class="mb-2">Language</span>
                              <select
                                disabled="true"
                                class="form-select form-select-sm"
                              >
                                <option>{card.iso_639_1}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Tab>
              )}
              {postersSeiresZh.length > 0 && (
                <Tab
                  eventKey="CHINESE"
                  title={`CHINESE (${postersSeiresZh.length})`}
                >
                  <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                    {postersSeiresZh &&
                      postersSeiresZh.map((card, index) => (
                        <div
                          key={index}
                          class="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 bg-dark text-light border card mb-5"
                        >
                          <img
                            class="col-12"
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${card.file_path}`}
                            alt="Poster"
                          />
                          <div class="border d-flex justify-content-between card-header">
                            <span>info</span>
                            <span>
                              <FaLock />
                            </span>
                          </div>
                          <div class="d-flex flex-column gap-3 card-body">
                            <div class="d-flex ">
                              <span>Primary? </span>
                              <span>
                                <AiFillCloseSquare />
                              </span>
                            </div>
                            <div class="d-flex flex-column">
                              <span>Size</span>
                              <span class="text-info">
                                <span>{card.width}</span> x{" "}
                                <span>{card.height}</span>
                                <span class="text-light ms-2">
                                  <FaCheckCircle />
                                </span>
                              </span>
                            </div>
                            <div class="d-flex flex-column gap-1">
                              <span class="mb-2">Language</span>
                              <select
                                disabled="true"
                                class="form-select form-select-sm"
                              >
                                <option>{card.iso_639_1}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Tab>
              )}
              {postersSeiresSk.length > 0 && (
                <Tab
                  eventKey="SOLVAK"
                  title={`SOLVAK (${postersSeiresSk.length})`}
                >
                  <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                    {postersSeiresSk &&
                      postersSeiresSk.map((card, index) => (
                        <div
                          key={index}
                          class="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 bg-dark text-light border card mb-5"
                        >
                          <img
                            class="col-12"
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${card.file_path}`}
                            alt="Poster"
                          />
                          <div class="border d-flex justify-content-between card-header">
                            <span>info</span>
                            <span>
                              <FaLock />
                            </span>
                          </div>
                          <div class="d-flex flex-column gap-3 card-body">
                            <div class="d-flex ">
                              <span>Primary? </span>
                              <span>
                                <AiFillCloseSquare />
                              </span>
                            </div>
                            <div class="d-flex flex-column">
                              <span>Size</span>
                              <span class="text-info">
                                <span>{card.width}</span> x{" "}
                                <span>{card.height}</span>
                                <span class="text-light ms-2">
                                  <FaCheckCircle />
                                </span>
                              </span>
                            </div>
                            <div class="d-flex flex-column gap-1">
                              <span class="mb-2">Language</span>
                              <select
                                disabled="true"
                                class="form-select form-select-sm"
                              >
                                <option>{card.iso_639_1}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Tab>
              )}
              {postersSeiresHe.length > 0 && (
                <Tab
                  eventKey="HEBREW"
                  title={`HEBREW (${postersSeiresHe.length})`}
                >
                  <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                    {postersSeiresHe &&
                      postersSeiresHe.map((card, index) => (
                        <div
                          key={index}
                          class="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 bg-dark text-light border card mb-5"
                        >
                          <img
                            class="col-12"
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${card.file_path}`}
                            alt="Poster"
                          />
                          <div class="border d-flex justify-content-between card-header">
                            <span>info</span>
                            <span>
                              <FaLock />
                            </span>
                          </div>
                          <div class="d-flex flex-column gap-3 card-body">
                            <div class="d-flex ">
                              <span>Primary? </span>
                              <span>
                                <AiFillCloseSquare />
                              </span>
                            </div>
                            <div class="d-flex flex-column">
                              <span>Size</span>
                              <span class="text-info">
                                <span>{card.width}</span> x{" "}
                                <span>{card.height}</span>
                                <span class="text-light ms-2">
                                  <FaCheckCircle />
                                </span>
                              </span>
                            </div>
                            <div class="d-flex flex-column gap-1">
                              <span class="mb-2">Language</span>
                              <select
                                disabled="true"
                                class="form-select form-select-sm"
                              >
                                <option>{card.iso_639_1}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Tab>
              )}
              {postersSeiresHu.length > 0 && (
                <Tab
                  eventKey="HUNGARIAN"
                  title={`HUNGARIAN (${postersSeiresHu.length})`}
                >
                  <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                    {postersSeiresHu &&
                      postersSeiresHu.map((card, index) => (
                        <div
                          key={index}
                          class="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 bg-dark text-light border card mb-5"
                        >
                          <img
                            class="col-12"
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${card.file_path}`}
                            alt="Poster"
                          />
                          <div class="border d-flex justify-content-between card-header">
                            <span>info</span>
                            <span>
                              <FaLock />
                            </span>
                          </div>
                          <div class="d-flex flex-column gap-3 card-body">
                            <div class="d-flex ">
                              <span>Primary? </span>
                              <span>
                                <AiFillCloseSquare />
                              </span>
                            </div>
                            <div class="d-flex flex-column">
                              <span>Size</span>
                              <span class="text-info">
                                <span>{card.width}</span> x{" "}
                                <span>{card.height}</span>
                                <span class="text-light ms-2">
                                  <FaCheckCircle />
                                </span>
                              </span>
                            </div>
                            <div class="d-flex flex-column gap-1">
                              <span class="mb-2">Language</span>
                              <select
                                disabled="true"
                                class="form-select form-select-sm"
                              >
                                <option>{card.iso_639_1}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Tab>
              )}
              {postersSeiresJa.length > 0 && (
                <Tab
                  eventKey="JAPANESE"
                  title={`JAPANESE (${postersSeiresJa.length})`}
                >
                  <div className="col-12 d-flex justify-content-center flex-wrap gap-4 bg-dark">
                    {postersSeiresJa &&
                      postersSeiresJa.map((card, index) => (
                        <div
                          key={index}
                          class="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 bg-dark text-light border card mb-5"
                        >
                          <img
                            class="col-12"
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${card.file_path}`}
                            alt="Poster"
                          />
                          <div class="border d-flex justify-content-between card-header">
                            <span>info</span>
                            <span>
                              <FaLock />
                            </span>
                          </div>
                          <div class="d-flex flex-column gap-3 card-body">
                            <div class="d-flex ">
                              <span>Primary? </span>
                              <span>
                                <AiFillCloseSquare />
                              </span>
                            </div>
                            <div class="d-flex flex-column">
                              <span>Size</span>
                              <span class="text-info">
                                <span>{card.width}</span> x{" "}
                                <span>{card.height}</span>
                                <span class="text-light ms-2">
                                  <FaCheckCircle />
                                </span>
                              </span>
                            </div>
                            <div class="d-flex flex-column gap-1">
                              <span class="mb-2">Language</span>
                              <select
                                disabled="true"
                                class="form-select form-select-sm"
                              >
                                <option>{card.iso_639_1}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>{" "}
                </Tab>
              )}
              {postersSeiresPt.length > 0 && (
                <Tab
                  eventKey="PORTUGUESE"
                  title={`PORTUGUESE (${postersSeiresPt.length})`}
                >
                  <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                    {postersSeiresPt &&
                      postersSeiresPt.map((card, index) => (
                        <div
                          key={index}
                          class="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 bg-dark text-light border card mb-5"
                        >
                          <img
                            class="col-12"
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${card.file_path}`}
                            alt="Poster"
                          />
                          <div class="border d-flex justify-content-between card-header">
                            <span>info</span>
                            <span>
                              <FaLock />
                            </span>
                          </div>
                          <div class="d-flex flex-column gap-3 card-body">
                            <div class="d-flex ">
                              <span>Primary? </span>
                              <span>
                                <AiFillCloseSquare />
                              </span>
                            </div>
                            <div class="d-flex flex-column">
                              <span>Size</span>
                              <span class="text-info">
                                <span>{card.width}</span> x{" "}
                                <span>{card.height}</span>
                                <span class="text-light ms-2">
                                  <FaCheckCircle />
                                </span>
                              </span>
                            </div>
                            <div class="d-flex flex-column gap-1">
                              <span class="mb-2">Language</span>
                              <select
                                disabled="true"
                                class="form-select form-select-sm"
                              >
                                <option>{card.iso_639_1}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Tab>
              )}
              {postersSeiresRo.length > 0 && (
                <Tab
                  eventKey="ROMANIAN"
                  title={`ROMANIAN (${postersSeiresRo.length})`}
                >
                  <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                    {postersSeiresRo &&
                      postersSeiresRo.map((card, index) => (
                        <div
                          key={index}
                          class="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 bg-dark text-light border card mb-5"
                        >
                          <img
                            class="col-12"
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${card.file_path}`}
                            alt="Poster"
                          />
                          <div class="border d-flex justify-content-between card-header">
                            <span>info</span>
                            <span>
                              <FaLock />
                            </span>
                          </div>
                          <div class="d-flex flex-column gap-3 card-body">
                            <div class="d-flex ">
                              <span>Primary? </span>
                              <span>
                                <AiFillCloseSquare />
                              </span>
                            </div>
                            <div class="d-flex flex-column">
                              <span>Size</span>
                              <span class="text-info">
                                <span>{card.width}</span> x{" "}
                                <span>{card.height}</span>
                                <span class="text-light ms-2">
                                  <FaCheckCircle />
                                </span>
                              </span>
                            </div>
                            <div class="d-flex flex-column gap-1">
                              <span class="mb-2">Language</span>
                              <select
                                disabled="true"
                                class="form-select form-select-sm"
                              >
                                <option>{card.iso_639_1}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Tab>
              )}
              {postersSeiresRu.length > 0 && (
                <Tab
                  eventKey="RUSSIAN"
                  title={`RUSSIAN (${postersSeiresRu.length})`}
                >
                  <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                    {postersSeiresRu &&
                      postersSeiresRu.map((card, index) => (
                        <div
                          key={index}
                          class="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 bg-dark text-light border card mb-5"
                        >
                          <img
                            class="col-12"
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${card.file_path}`}
                            alt="Poster"
                          />
                          <div class="border d-flex justify-content-between card-header">
                            <span>info</span>
                            <span>
                              <FaLock />
                            </span>
                          </div>
                          <div class="d-flex flex-column gap-3 card-body">
                            <div class="d-flex ">
                              <span>Primary? </span>
                              <span>
                                <AiFillCloseSquare />
                              </span>
                            </div>
                            <div class="d-flex flex-column">
                              <span>Size</span>
                              <span class="text-info">
                                <span>{card.width}</span> x{" "}
                                <span>{card.height}</span>
                                <span class="text-light ms-2">
                                  <FaCheckCircle />
                                </span>
                              </span>
                            </div>
                            <div class="d-flex flex-column gap-1">
                              <span class="mb-2">Language</span>
                              <select
                                disabled="true"
                                class="form-select form-select-sm"
                              >
                                <option>{postersSeiresRu.iso_639_1}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Tab>
              )}
              {postersSeiresEs.length > 0 && (
                <Tab
                  eventKey="SPANISH"
                  title={`SPANISH (${postersSeiresEs.length})`}
                >
                  <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                    {postersSeiresEs &&
                      postersSeiresEs.map((card, index) => (
                        <div
                          key={index}
                          class="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 bg-dark text-light border card mb-5"
                        >
                          <img
                            class="col-12"
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${card.file_path}`}
                            alt="Poster"
                          />
                          <div class="border d-flex justify-content-between card-header">
                            <span>info</span>
                            <span>
                              <FaLock />
                            </span>
                          </div>
                          <div class="d-flex flex-column gap-3 card-body">
                            <div class="d-flex ">
                              <span>Primary? </span>
                              <span>
                                <AiFillCloseSquare />
                              </span>
                            </div>
                            <div class="d-flex flex-column">
                              <span>Size</span>
                              <span class="text-info">
                                <span>{card.width}</span> x{" "}
                                <span>{card.height}</span>
                                <span class="text-light ms-2">
                                  <FaCheckCircle />
                                </span>
                              </span>
                            </div>
                            <div class="d-flex flex-column gap-1">
                              <span class="mb-2">Language</span>
                              <select
                                disabled="true"
                                class="form-select form-select-sm"
                              >
                                <option>{card.iso_639_1}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Tab>
              )}
              {postersSeiresAr.length > 0 && (
                <Tab
                  eventKey="ARABIC"
                  title={`ARABIC (${postersSeiresAr.length})`}
                >
                  <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                    {postersSeiresAr &&
                      postersSeiresAr.map((card, index) => (
                        <div
                          key={index}
                          class="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 bg-dark text-light border card mb-5"
                        >
                          <img
                            class="col-12"
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${card.file_path}`}
                            alt="Poster"
                          />
                          <div class="border d-flex justify-content-between card-header">
                            <span>info</span>
                            <span>
                              <FaLock />
                            </span>
                          </div>
                          <div class="d-flex flex-column gap-3 card-body">
                            <div class="d-flex ">
                              <span>Primary? </span>
                              <span>
                                <AiFillCloseSquare />
                              </span>
                            </div>
                            <div class="d-flex flex-column">
                              <span>Size</span>
                              <span class="text-info">
                                <span>{card.width}</span> x{" "}
                                <span>{card.height}</span>
                                <span class="text-light ms-2">
                                  <FaCheckCircle />
                                </span>
                              </span>
                            </div>
                            <div class="d-flex flex-column gap-1">
                              <span class="mb-2">Language</span>
                              <select
                                disabled="true"
                                class="form-select form-select-sm"
                              >
                                <option>{card.iso_639_1}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </Tab>
              )}
              {postersSeiresUk.length > 0 && (
                <Tab
                  eventKey="UKRAINIAN"
                  title={`UKRAINIAN (${postersSeiresUk.length})`}
                >
                  <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                    {postersSeiresUk &&
                      postersSeiresUk.map((card, index) => (
                        <div
                          key={index}
                          class="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 bg-dark text-light border card mb-5"
                        >
                          <img
                            class="col-12"
                            src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${card.file_path}`}
                            alt="Poster"
                          />
                          <div class="border d-flex justify-content-between card-header">
                            <span>info</span>
                            <span>
                              <FaLock />
                            </span>
                          </div>
                          <div class="d-flex flex-column gap-3 card-body">
                            <div class="d-flex ">
                              <span>Primary? </span>
                              <span>
                                <AiFillCloseSquare />
                              </span>
                            </div>
                            <div class="d-flex flex-column">
                              <span>Size</span>
                              <span class="text-info">
                                <span>{card.width}</span> x{" "}
                                <span>{card.height}</span>
                                <span class="text-light ms-2">
                                  <FaCheckCircle />
                                </span>
                              </span>
                            </div>
                            <div class="d-flex flex-column gap-1">
                              <span class="mb-2">Language</span>
                              <select
                                disabled="true"
                                class="form-select form-select-sm"
                              >
                                <option>{card.iso_639_1}</option>
                              </select>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
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

export default PostersSeries;
