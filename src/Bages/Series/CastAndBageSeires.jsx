import React, { useEffect } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import { FaArrowRight } from "react-icons/fa6";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { IoStarSharp } from "react-icons/io5";
import { getDeatilsSesson } from "../../redux_system/Slices/detailsSeasonSlice";
import { useDispatch } from "react-redux";
import ShowMoreText from "react-show-more-text";
import Loding from "../Lod_errors/Loding";

const CastAndBageSeires = ({
  cast,
  detailsSer,
  reviewsSerires,
  seiresVideo,
  lodingSeriesViedeo,
  postersSeires,
  backDropsSeires,
  recommendationsSeires,
}) => {
  const newCast = cast.filter((casts, index) => {
    return index < 10;
  });
  const { seriesid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newAvreage = `${
    detailsSer &&
    detailsSer.seasons &&
    detailsSer.seasons[detailsSer.seasons.length - 1] &&
    detailsSer.seasons[detailsSer.seasons.length - 1].vote_average
  }`;
  const newBackDrops = backDropsSeires.filter((imge, index) => {
    return index < 6;
  });
  const newPosters = postersSeires.filter((poster, index) => {
    return index < 6;
  });
  const handelAllSeasons = () => {
    navigate(`/series/${seriesid}/allseairesseassone`);
  };
  const handelSeassone = () => {
    navigate(`/series/${seriesid}/thisseassone`);
    dispatch(
      getDeatilsSesson({
        seriesid,
        sesson: detailsSer.seasons && detailsSer.seasons.length,
      })
    );
  };

  return (
    <div>
      <aside className="row flex-column flex-lg-row align-items-center align-items-lg-start gap-5 gap-lg-0">
        {/* {!lodingCredits ? ( */}
        <div className="col-12 col-sm-11 col-md-11 col-lg-9 d-flex flex-column gap-5">
          <section className="d-flex flex-column flex-wrap gap-2 p-2 p-lg-5 pt-0 pt-lg-0 pb-0 pb-lg-0">
            <div className="text-info mt-5">
              <h4>Series Cast</h4>
            </div>

            {cast && cast.length != 0 ? (
              <div className="ms-auto col-12 d-flex flex-nowrap  overflow-auto position-relative gap-3 rounded ">
                {newCast.map((casts, indexs) => (
                  <Card
                    key={indexs}
                    className="bg-dark text-light col-lg-2 col-md-3 col-sm-4 col-7  rounded card"
                    style={{ width: "9rem" }}
                  >
                    <Card.Img
                      variant="top"
                      onClick={() => navigate(`/series/${seriesid}/credits`)}
                      src={
                        casts.profile_path
                          ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${casts?.profile_path}`
                          : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                      }
                    />
                    <Card.Body className="">
                      <Card.Title>{casts.original_name}</Card.Title>
                      <p>{casts.character}</p>
                    </Card.Body>
                  </Card>
                ))}
                {newCast && newCast.length > 5 && (
                  <Card
                    className="bg-dark text-light col-lg-2 col-md-3 col-sm-4 col-7 shadow bg-dark-tertiary rounded card"
                    style={{ width: "9rem" }}
                  >
                    <Card.Body
                      onClick={() => navigate(`/series/${seriesid}/credits`)}
                    >
                      <Card.Title
                        as={Link}
                        style={{ height: "20rem" }}
                        className=" text-decoration-none d-flex justify-content-center align-items-center"
                      >
                        ShowMore{" "}
                        <span>
                          {" "}
                          <FaArrowRight />
                        </span>
                      </Card.Title>
                    </Card.Body>
                  </Card>
                )}
              </div>
            ) : (
              <div>
                <h6 className="text-light">
                  We don't have any Cast for{" "}
                  <span className="text-info">{detailsSer.name}</span>
                </h6>
              </div>
            )}
            <div>
              {" "}
              <h5
                className="text-info point"
                onClick={() => navigate(`/series/${seriesid}/credits`)}
              >
                Full Cast & Crew
              </h5>
            </div>
          </section>
          <section className="d-flex flex-column flex-wrap m-2 p-2 p-lg-5 pt-0 pt-lg-0 pb-0 pb-lg-0 text-light">
            <h4 className="text-info mb-5">Last Season</h4>

            <div className="">
              {detailsSer.length != 0 ? (
                <div className=" bcol-10 col-sm-7 col-md-12 col-lg-12 bg-dark rounded card ">
                  <div>
                    <div className="d-flex flex-column flex-md-row gap-md-2 p-0  ">
                      <img
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${
                          detailsSer.poster_path && detailsSer.poster_path
                        }`}
                        alt="Not"
                        className="col-12 col-md-3 col-md-2 rounded-start cursor-pointer"
                      />
                      <div className="d-flex flex-column align-items-center align-items-md-start text-light  p-3 p-md-4 ps-md-2 gap-2 gap-md-4">
                        <div className="fw-bold d-flex flex-column flex-md-row align-items-center align-items-md-start gap-3">
                          {" "}
                          <h5 onClick={handelSeassone} className="point">
                            Season (
                            {detailsSer.seasons && detailsSer.seasons.length}){" "}
                          </h5>
                          <Button
                            disabled="true"
                            variant="light"
                            className=" fw-bold border-0 pt-0 pb-0  "
                          >
                            <IoStarSharp />

                            {newAvreage.slice(0, 3)}
                          </Button>
                          <h5>
                            {detailsSer &&
                              detailsSer.seasons &&
                              detailsSer.seasons[
                                detailsSer.seasons.length - 1
                              ] &&
                              detailsSer.seasons[
                                detailsSer.seasons.length - 1
                              ].air_date.slice(0, 4)}{" "}
                            |{" "}
                            {detailsSer &&
                              detailsSer.seasons &&
                              detailsSer.seasons[
                                detailsSer.seasons.length - 1
                              ] &&
                              detailsSer.seasons[detailsSer.seasons.length - 1]
                                .episode_count}{" "}
                            Episodes
                          </h5>
                        </div>
                        <span className="text-center text-lg-start">
                          {detailsSer &&
                          detailsSer.seasons &&
                          detailsSer.seasons[detailsSer.seasons.length - 1] &&
                          detailsSer.seasons[detailsSer.seasons.length - 1]
                            .overview
                            ? detailsSer.seasons[detailsSer.seasons.length - 1]
                                .overview
                            : `There is no Overview for this Season`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="bg-dark p-2 rounded-2 ">
                    <p>
                      We don't have any reviews for{" "}
                      <span className="text-info fw-bold ">
                        {detailsSer.name}.
                      </span>
                    </p>
                  </div>
                </div>
              )}
              <div>
                <p className="text-info mt-3 point" onClick={handelAllSeasons}>
                  View All Seasons
                </p>
              </div>
            </div>
          </section>
          <section className="d-flex flex-column flex-wrap m-2 p-2 p-lg-5 pt-0 pt-lg-0 pb-0 pb-lg-0 text-light">
            <h4 className="text-info mb-5">Social</h4>
            <div className=" border-bottom ">
              <Button
                style={{ color: "#761f9e", borderBottom: "#761f9e" }}
                className=" bg-transparent  "
              >
                REVIEWS {reviewsSerires.length}
              </Button>
            </div>
            <div className="">
              {reviewsSerires.length != 0 ? (
                <div className=" bg-dark d-flex flex-column flex-sm-row  gap-3 gap-sm-5 ">
                  <div>
                    <div className=" mt-3 ms-3 text-center d-flex flex-column align-items-center align-items-sm-start  ">
                      <h3
                        className="bg-secondary pt-3"
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
                  <div>
                    <div>
                      <h3 className="text-light ps-5 mt-3">
                        A review by{" "}
                        <span className="text-info">
                          {reviewsSerires.length != 0 &&
                            reviewsSerires[0].author_details.name}
                        </span>
                      </h3>
                    </div>
                    <div>
                      <h6 className="ps-5">
                        Written by{" "}
                        <span className="text-info">
                          {reviewsSerires.length != 0 &&
                            reviewsSerires[0].author_details.name}
                        </span>{" "}
                        on
                        <span className="text-info">
                          {" "}
                          {reviewsSerires.length != 0 &&
                            reviewsSerires[0].created_at
                              .slice(0, 10)
                              .split("-")[1]}
                          {","}
                          {reviewsSerires.length != 0 &&
                            reviewsSerires[0].created_at
                              .slice(0, 10)
                              .split("-")[2]}
                          {","}
                          {reviewsSerires.length != 0 &&
                            reviewsSerires[0].created_at
                              .slice(0, 10)
                              .split("-")[0]}
                        </span>
                      </h6>
                    </div>
                    <div>
                      <div className="ms-5 mb-5 ">
                        <h4 className=" mt-4 text-primary">Content :-</h4>
                        <ShowMoreText
                          lines={4}
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
                          <span className="d-block">
                            {reviewsSerires.length != 0 &&
                              reviewsSerires[0].content}
                          </span>
                        </ShowMoreText>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="bg-dark p-2 rounded-2 ">
                    <p>
                      We don't have any reviews for{" "}
                      <span className="text-info fw-bold ">
                        {detailsSer.name}.
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
            {reviewsSerires.length != 0 && (
              <h5
                className="mt-4 text-info point"
                onClick={() => navigate(`/series/${seriesid}/reviwesSeires`)}
              >
                Read All Reviews
              </h5>
            )}
          </section>
          <section className="d-flex flex-column flex-wrap gap-2 p-2 p-lg-5 pt-0 pt-lg-0 pb-0 pb-lg-0">
            {" "}
            <h4 className="text-info">Media</h4>
            <div>
              {" "}
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                {!lodingSeriesViedeo ? (
                  <Tab
                    eventKey="home"
                    title={`Videos (${
                      seiresVideo.results && seiresVideo.results.length
                    })`}
                    className=""
                  >
                    <div className="bg-dark p-3 ms-auto col-12 d-flex flex-nowrap bg-dark gap-3 rounded-3 ">
                      {seiresVideo.results != 0 ? (
                        <div className="ms-auto col-12 d-flex flex-nowrap bg-dark  overflow-auto position-relative gap-3">
                          {seiresVideo.results &&
                            seiresVideo.results.map((videos, index) => (
                              <div
                                key={index}
                                className="col-lg-6 col-md-5 col-sm-8 col-12 d-flex flex-nowrap overflow-auto gap-3"
                              >
                                <iframe
                                  className="col-12   rounded mb-3"
                                  height="300"
                                  src={`https://www.youtube.com/embed/${videos.key}`}
                                  title="YouTube video player"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                ></iframe>{" "}
                              </div>
                            ))}
                        </div>
                      ) : (
                        <div className="d-flex flex-column flex-sm-row align-items-center text-light align-items-sm-start gap-4 gap-sm-5">
                          {" "}
                          <p>No video have been added.</p>
                        </div>
                      )}
                    </div>
                  </Tab>
                ) : (
                  <Loding />
                )}
                <Tab
                  eventKey="BACKDROPS"
                  title={`BACKDROPS (${
                    backDropsSeires && backDropsSeires.length
                  })`}
                >
                  <div className="bg-dark p-3 ms-auto col-12 d-flex flex-nowrap bg-dark gap-3 rounded  ">
                    <div className="ms-auto col-12 d-flex flex-nowrap bg-dark  overflow-auto position-relative gap-3">
                      {newBackDrops &&
                        newBackDrops.map((backDrops, index) => (
                          <div
                            key={index}
                            className="col-lg-4 col-md-5 col-sm-8 col-12 d-flex flex-nowrap overflow-auto gap-3"
                          >
                            <img
                              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${backDrops.file_path}`}
                              alt="Not Found Image"
                              width="60%"
                              className="col-lg-12 col-md-5 col-sm-8 col-12"
                            />
                          </div>
                        ))}
                      <div className="ps-3 pe-3 text-light d-flex justify-content-center align-items-center ">
                        <p
                          style={{ width: "7em" }}
                          className="ms-2 point"
                          onClick={() =>
                            navigate(`/series/${seriesid}/backdrops`)
                          }
                        >
                          Show More <FaArrowRight />
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                </Tab>
                <Tab
                  eventKey="POSTERS"
                  title={`POSTERS (${postersSeires && postersSeires.length})`}
                >
                  <div className="bg-dark p-3 ms-auto col-12 d-flex flex-nowrap bg-dark gap-3 rounded  ">
                    <div className="ms-auto col-12 d-flex flex-nowrap bg-dark  overflow-auto position-relative gap-3">
                      {newPosters &&
                        newPosters.map((poster, index) => (
                          <div
                            key={index}
                            className="col-lg-4 col-md-5 col-sm-8 col-12 d-flex flex-nowrap overflow-auto gap-3"
                          >
                            <img
                              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster.file_path}`}
                              alt="Not Found Image"
                              width="60%"
                              className="col-lg-12 col-md-5 col-sm-8 col-12"
                            />
                          </div>
                        ))}
                      <div className="ps-3 pe-3 text-light d-flex justify-content-center align-items-center ">
                        <p
                          style={{ width: "7em" }}
                          className="ms-2 point"
                          onClick={() =>
                            navigate(`/series/${seriesid}/posterseires`)
                          }
                        >
                          Show More <FaArrowRight />
                        </p>
                      </div>
                    </div>
                  </div>{" "}
                </Tab>
              </Tabs>
            </div>
          </section>
          <section className="d-flex flex-column flex-wrap gap-2 p-2 p-lg-5 pt-0 pt-lg-0 pb-0 pb-lg-0">
            {" "}
            <h4 className="text-info">Recommendations</h4>
            <div className="col-12 d-flex flex-nowrap overflow-auto style-cards-acting position-relative rounded gap-3 ">
              {" "}
              {recommendationsSeires &&
                recommendationsSeires.map((recomm, inedx) => (
                  <div
                    key={inedx}
                    className="bg-dark text-light col-lg-4 col-md-5 col-sm-6 col-11 shadow bg-dark-tertiary rounded card "
                  >
                    <div className="d-flex flex-column gap-3 p-2 col-12 card-body">
                      <img
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${recomm.poster_path}`}
                        alt=""
                        className="col-12 point"
                        onClick={() => navigate(`/series/${recomm.id}`)}
                      />
                      <div className="d-flex justify-content-between cursor-pointer">
                        <span>{recomm.name}</span>
                        <span className="text-info">
                          {Math.round((recomm.vote_average / 10) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </section>
        </div>
        {/* ) : (
          <Loding />
        )} */}
        {/* {!lodingCredits ? (
        <div className="col-12 col-sm-11 col-md-11 col-lg-3">
          <div className="col-12 d-flex flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-start gap-4 text-light fs-6 ">
            <div className="text-info d-flex gap-5 fs-3 mt-lg-5">
              <FaFacebook />
              <FaTwitter />
              <FaInstagram />
              <TiHomeOutline />
            </div>
            <div className="mt-3">
              <h4>Status</h4>
              <h5 className="mt-2 text-info">
                {details.status && details.status}
              </h5>
            </div>
            <div className="mt-3">
              <h4>Original Language</h4>
              <h5 className="mt-2 text-info">
                {details.original_language &&
                  details.original_language.toUpperCase()}
              </h5>
            </div>
            <div className="mt-3">
              <h4>Budget</h4>
              {details.budget && details.budget != 0 ? (
                <h5 className="mt-2 text-info">
                  {details.budget &&
                    details.budget
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </h5>
              ) : (
                <h5 className="text-info">-</h5>
              )}
            </div>
            <div className="mt-3 ">
              <h4>Original Language</h4>
              {details.revenue && details.revenue != 0 ? (
                <h5 className="mt-2 text-info">
                  $
                  {details.revenue &&
                    details.revenue
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </h5>
              ) : (
                <h5 className=" text-info">-</h5>
              )}
            </div>
          </div>
          <div className="col-12 d-flex flex-column justify-content-center justify-content-lg-start align-items-center align-items-lg-start gap-4 text-light fs-6 ">
            <div className="text-info d-flex flex-column  gap-5  mt-lg-5">
              <h3>Key Words</h3>
              <div>
                {keyWordsMovies &&
                  keyWordsMovies.map((keyWordsMovies, index) => (
                    <Button
                      key={index}
                      variant="light"
                      className="me-3 p-0 pe-1 ps-1 mb-2"
                    >
                      {keyWordsMovies.name}
                    </Button>
                  ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loding />
      )} */}
      </aside>
    </div>
  );
};

export default CastAndBageSeires;
