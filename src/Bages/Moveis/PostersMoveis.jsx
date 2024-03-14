import React, { useEffect } from "react";
import { detailsMovie } from "../../redux_system/Slices/detailsMovies";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Loding from "../Lod_errors/Loding";

import { FaLock, FaCheckCircle } from "react-icons/fa";
import { AiFillCloseSquare } from "react-icons/ai";

const PostersMoveis = () => {
  const { details } = useSelector((state) => state.detailsMov);
  const {
    loding,
    postersNoLang,
    postersEn,
    postersKo,
    postersPt,
    postersHe,
    postersTh,
    postersUk,
    postersFr,
    postersDe,
    postersRo,
    postersHu,
    postersTr,
    postersEs,
    postersZh,
    postersCs,
    postersRu,
    postersFa,
    postersKk,
  } = useSelector((state) => state.allImage);
  const navegate = useNavigate();
  const { movieid } = useParams();
  const dispatch = useDispatch();
  console.log(postersFa);
  useEffect(() => {
    dispatch(detailsMovie(movieid));
  }, [movieid]);
  return (
    <div>
      <div className="col-12 bg-dark mb-5 pt-5 ">
        <div className="col-12 border border-0 bg-dark text-light container p-3">
          <div className="text-light bg-dark d-flex flex-column flex-sm-row align-items-center gap-3 card-body">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
                details && details.poster_path
              }`}
              width="11%"
              alt="Not Found"
              className="col-6 col-sm-4 col-md-3 rounded col-lg-1 "
            />
            <div className="d-flex justify-content-center  ms-3 flex-column point ">
              <h3>
                {details && details.title}(
                {details.release_date && details.release_date.slice(0, 4)}){" "}
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
              <Tab
                eventKey="home"
                title={`NO LANGUAGE (${postersNoLang.length}) `}
                className="bg-dark rounded"
              >
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersNoLang &&
                    postersNoLang.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>

              <Tab
                eventKey="ENGLISH"
                title={`ENGLISH (${postersEn.length})`}
                className="d-felx justify-content-center align-items-center flex-wrap  "
              >
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersEn &&
                    postersEn.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>

              <Tab eventKey="GERMAN" title={`GERMAN (${postersDe.length})`}>
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersDe &&
                    postersDe.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>
              <Tab eventKey="FRENCH" title={`FRENCH (${postersFr.length})`}>
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersFr &&
                    postersFr.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>
              <Tab eventKey="CHINESE" title={`CHINESE (${postersZh.length})`}>
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersZh &&
                    postersZh.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>
              <Tab eventKey="CZECH" title={`CZECH (${postersCs.length})`}>
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersCs &&
                    postersCs.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>
              <Tab eventKey="HEBREW" title={`HEBREW (${postersHe.length})`}>
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersHe &&
                    postersHe.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>
              <Tab
                eventKey="HUNGARIAN"
                title={`HUNGARIAN (${postersHu.length})`}
              >
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersHu &&
                    postersHu.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>
              <Tab eventKey="KOREAN" title={`KOREAN (${postersKo.length})`}>
                <div className="col-12 d-flex justify-content-center flex-wrap gap-4 bg-dark">
                  {postersKo &&
                    postersKo.map((nolang, index) => (
                      <img
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
                          nolang && nolang.file_path
                        }`}
                        alt="Not Found"
                        className="col-12 col-sm-5 col-md-3 col-lg-3 col-xl-2 shadow bg-dark-tertiary rounded mt-3 p-2  "
                      />
                    ))}
                </div>{" "}
              </Tab>
              <Tab
                eventKey="PORTUGUESE"
                title={`PORTUGUESE (${postersPt.length})`}
              >
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersPt &&
                    postersPt.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>
              <Tab eventKey="ROMANIAN" title={`ROMANIAN (${postersRo.length})`}>
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersRo &&
                    postersRo.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>
              <Tab eventKey="RUSSIAN" title={`RUSSIAN (${postersRu.length})`}>
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersRu &&
                    postersRu.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>
              <Tab eventKey="SPANISH" title={`SPANISH (${postersEs.length})`}>
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersEs &&
                    postersEs.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>
              <Tab eventKey="THAI" title={`THAI (${postersTh.length})`}>
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersTh &&
                    postersTh.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>
              <Tab eventKey="TURKISH" title={`TURKISH (${postersTr.length})`}>
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersTr &&
                    postersTr.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>
              <Tab
                eventKey="UKRAINIAN"
                title={`UKRAINIAN (${postersUk.length})`}
              >
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersUk &&
                    postersUk.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>
              <Tab eventKey="IRAN" title={`IRAN (${postersFa.length})`}>
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersFa &&
                    postersFa.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>
              <Tab eventKey="Kazakh" title={`KAZAKH (${postersKk.length})`}>
                <div className="bg-dark col-12 d-flex justify-content-center flex-wrap gap-5 pt-5">
                  {postersKk &&
                    postersKk.map((card, index) => (
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
                              <option>en</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </Tab>
            </Tabs>
          </div>
        ) : (
          <Loding />
        )}
      </div>
    </div>
  );
};

export default PostersMoveis;
