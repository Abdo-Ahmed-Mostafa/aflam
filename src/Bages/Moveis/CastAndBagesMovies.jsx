import React, { useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa6";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { TiHomeOutline } from "react-icons/ti";
import Loding from "../Lod_errors/Loding";
import Button from "react-bootstrap/Button";
import ShowMoreText from "react-show-more-text";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useDispatch, useSelector } from "react-redux";
import { getPirsonMovies } from "../../redux_system/Slices/pirsonSlices";
import { collectionsMovei } from "../../redux_system/Slices/detailsMovies";

export const CastAndBagesMovies = ({
  cast,
  details,
  lodingCredits,
  keyWordsMovies,
  movieid,
  reviewsMovies,
  videoPaying,
  backDropsMovies,
  postersMovies,
  lodingVideo,
  recommendationsMovies,
}) => {
  const { collection } = useSelector((state) => state.detailsMov);
  console.log(details);
  const newCast = cast.filter((castes, index) => {
    return index < 10;
  });
  const naviget = useNavigate();
  const dispatch = useDispatch();
  const handelCastBtn = () => {
    naviget(`/detilseMov/${movieid}/cast`);
  };
  const newBackDrops = backDropsMovies.filter((imge, index) => {
    return index < 6;
  });
  const newPosters = postersMovies.filter((poster, index) => {
    return index < 6;
  });

  useEffect(() => {
    if (details && details.belongs_to_collection) {
      dispatch(collectionsMovei(details?.belongs_to_collection?.id));
    }
  }, [details.belongs_to_collection?.id, movieid]);
  const handelPirson = (castsId) => {
    naviget(`/detilseMov/${castsId}/person`);
    dispatch(getPirsonMovies(castsId));
  };
  return (
    <aside className="row flex-column flex-lg-row align-items-center align-items-lg-start gap-5 gap-lg-0">
      {!lodingCredits ? (
        <div className="col-12 col-sm-11 col-md-11 col-lg-9 d-flex flex-column gap-5">
          <section className="d-flex flex-column flex-wrap gap-2 p-2 p-lg-5 pt-0 pt-lg-0 pb-0 pb-lg-0">
            <div className="text-info mt-5">
              <h4>Top Billed Cast</h4>
            </div>

            <div className="ms-auto col-12 d-flex flex-nowrap style-cards-acting overflow-auto position-relative gap-3 rounded ">
              {newCast.map((casts, indexs) => (
                <Card
                  key={indexs}
                  className="bg-dark text-light col-lg-2 col-md-3 col-sm-4 col-7 shadow bg-dark-tertiary rounded card"
                  style={{ width: "9rem" }}
                >
                  <Card.Img
                    variant="top"
                    onClick={() => handelPirson(casts.id)}
                    src={
                      casts.profile_path
                        ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${casts.profile_path}`
                        : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                    }
                  />
                  <Card.Body className="mt-3">
                    <Card.Title>{casts.original_name}</Card.Title>
                    <Card.Title>{casts.character}</Card.Title>
                  </Card.Body>
                </Card>
              ))}
              <Card
                className="bg-dark text-light col-lg-2 col-md-3 col-sm-4 col-7 shadow bg-dark-tertiary rounded card"
                style={{ width: "9rem" }}
              >
                <Card.Body
                  onClick={() => naviget(`/detilseMov/${movieid}/cast`)}
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
            </div>
            <div>
              {" "}
              <h5 onClick={handelCastBtn} className="text-info point">
                Full Cast & Crew
              </h5>
            </div>
          </section>

          <section className="d-flex flex-column flex-wrap m-2 p-2 p-lg-5 pt-0 pt-lg-0 pb-0 pb-lg-0 text-light">
            <h4 className="text-info mb-5">Social</h4>
            <div className=" border-bottom ">
              <Button
                style={{ color: "#761f9e", borderBottom: "#761f9e" }}
                className=" bg-transparent  "
              >
                REVIEWS {reviewsMovies?.length}
              </Button>
            </div>
            <div className="">
              {reviewsMovies?.length != 0 ? (
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
                          {reviewsMovies?.length != 0 &&
                            reviewsMovies[0].author_details.name}
                        </span>
                      </h3>
                    </div>
                    <div>
                      <h6 className="ps-5">
                        Written by{" "}
                        <span className="text-info">
                          {reviewsMovies?.length != 0 &&
                            reviewsMovies[0].author_details.name}
                        </span>{" "}
                        on
                        <span className="text-info">
                          {" "}
                          {reviewsMovies?.length != 0 &&
                            reviewsMovies[0].created_at
                              .slice(0, 10)
                              .split("-")[1]}
                          {","}
                          {reviewsMovies?.length != 0 &&
                            reviewsMovies[0].created_at
                              .slice(0, 10)
                              .split("-")[2]}
                          {","}
                          {reviewsMovies?.length != 0 &&
                            reviewsMovies[0].created_at
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
                            {reviewsMovies?.length != 0 &&
                              reviewsMovies[0].content}
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
                        {details.title}.
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </div>
            {reviewsMovies?.length != 0 && (
              <h5
                className="mt-4 text-info point"
                onClick={() => naviget(`/detilseMov/${movieid}/reviwes`)}
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
                {!lodingVideo ? (
                  <Tab
                    eventKey="home"
                    title={`Videos (${
                      videoPaying?.results && videoPaying.results?.length
                    })`}
                    className=""
                  >
                    <div className="bg-dark p-3 ms-auto col-12 d-flex flex-nowrap bg-dark gap-3 ">
                      <div className="ms-auto col-12 d-flex flex-nowrap bg-dark  overflow-auto position-relative gap-3">
                        {videoPaying.results &&
                          videoPaying.results.map((videos, index) => (
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
                    </div>
                  </Tab>
                ) : (
                  <Loding />
                )}
                <Tab
                  eventKey="BACKDROPS"
                  title={`BACKDROPS (${
                    backDropsMovies && backDropsMovies?.length
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
                            naviget(`/detilseMov/${movieid}/backDrops`)
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
                  title={`POSTERS (${postersMovies && postersMovies?.length})`}
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
                            naviget(`/detilseMov/${movieid}/postars`)
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

          {collection && details && details.belongs_to_collection && (
            <section className="row  d-flex flex-wrap w-100  text-light">
              <div className="p-2 p-lg-5 pt-0 pt-lg-0 pb-0 pb-lg-0">
                <div
                  className="p-4 p-md-3 p-lg-3 rounded  col-12 w-100  "
                  style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
                      details.backdrop_path && details.backdrop_path
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "25% 20%",
                  }}
                >
                  <div className="col-12 d-flex flex-column flex-wrap align-items-center gap-3 z-index fw-bold">
                    <div>
                      <h2 className="text-center">
                        Part of Spider-Man Collection
                      </h2>
                    </div>
                    <div className="text-center">
                      <span className="text-info">Includes : </span>
                      <span className="d-flex flex-column">
                        {collection?.parts?.map((data, index) => (
                          <span key={index}>
                            <span className="text-info"> 1: </span> {data.title}
                          </span>
                        ))}
                      </span>
                    </div>
                    <Button
                      variant="outline-light"
                      className="rounded-pill text-info fw-bold"
                      onClick={() =>
                        naviget(
                          `/detilseMov/${movieid}/titel/${
                            details &&
                            details.belongs_to_collection &&
                            details.belongs_to_collection.id
                          }`
                        )
                      }
                    >
                      {" "}
                      VIEW THE COLLECTION
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          )}

          <section className="d-flex flex-column flex-wrap gap-2 p-2 p-lg-5 pt-0 pt-lg-0 pb-0 pb-lg-0">
            {" "}
            <h4 className="text-info">Recommendations</h4>
            <div className="col-12 d-flex flex-nowrap overflow-auto position-relative rounded gap-3 ">
              {" "}
              {recommendationsMovies &&
                recommendationsMovies.map((recomm, inedx) => (
                  <div
                    key={inedx}
                    className="bg-dark text-light col-lg-4 col-md-5 col-sm-6 col-11 shadow bg-dark-tertiary rounded card "
                  >
                    <div className="d-flex flex-column gap-3 p-2 col-12 card-body">
                      <img
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${recomm.poster_path}`}
                        alt=""
                        className="col-12 point"
                        onClick={() => naviget(`/detilseMov/${recomm.id}`)}
                      />
                      <div className="d-flex justify-content-between cursor-pointer">
                        <span>{recomm.original_title}</span>
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
      ) : (
        <Loding />
      )}
      {!lodingCredits ? (
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
              <h4>Revenue</h4>
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
      )}
    </aside>
  );
};
