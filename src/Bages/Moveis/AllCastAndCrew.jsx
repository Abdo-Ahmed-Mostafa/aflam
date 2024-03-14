import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { creditsmove } from "../../redux_system/Slices/creditsMovies";
import { detailsMovie } from "../../redux_system/Slices/detailsMovies";
import { FaArrowLeftLong } from "react-icons/fa6";
import Card from "react-bootstrap/Card";

const AllCastAndCrew = () => {
  const {
    cast,
    crew,
    crewCrew,
    crewArt,
    crewSound,
    crewEditing,
    crewVisualEffects,
    crewLighting,
    crewCamera,
    crewWriting,
    crewCostumeMakeUp,
    directingCrew,
  } = useSelector((state) => state.creditsMov);
  const { details } = useSelector((state) => state.detailsMov);

  const navegate = useNavigate();
  const { movieid } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(creditsmove(movieid));
    dispatch(detailsMovie(movieid));
  }, [movieid]);
  return (
    <div className="pt-5  text-light  ">
      <div className="col-12 bg-dark mb-5 ">
        <div className="col-12 border border-0 bg-dark text-light container p-3">
          <div className="text-light bg-dark d-flex flex-column flex-sm-row align-items-center gap-3 card-body">
            <img
              src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${details.poster_path}`}
              width="11%"
              alt="Not Found"
              className="col-6 col-sm-4 col-md-3 rounded col-lg-1 "
            />
            <div className="d-flex justify-content-center  ms-3 flex-column point ">
              <h3>
                {details.title} ({details.release_date?.slice(0, 4)})
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
      <div className="d-flex flex-column flex-lg-row align-items-center align-items-lg-start container mt-2 mt-lg-5">
        <section className=" container pt-5 mt-5 ">
          <h2 className=" mb-5">
            Cast <span className="text-info">{cast.length}</span>
          </h2>
          {cast.map((castes, index) => (
            <div className="col-12   point bg-dark  p-0  col-9 col-sm-10 col-md-12 col-lg-8 fw-bold ">
              <div className="text-light d-flex  flex-column flex-sm-row align-items-center gap-2 mb-5 textMedia">
                <Card
                  key={index}
                  className="text-light d-flex border-0 flex-column flex-sm-row align-items-center bg-dark  p-0 me-3 "
                  style={{ width: "13em" }}
                >
                  <Card.Img
                    onClick={() => navegate(`/detilseMov/${castes.id}/person`)}
                    variant="top"
                    className=" w-80 p-sm-0 col-7 col-sm-5 col-md-4 col-lg-6"
                    src={
                      castes.profile_path
                        ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${castes.profile_path}`
                        : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                    }
                  />
                  <div className="text-center text-sm-start   pb-sm-3 col-12  col-lg-11 container  ">
                    <Card.Body>
                      <Card.Title className="fs-5">
                        {castes.original_name}
                      </Card.Title>
                      <Card.Title className="fs-5">
                        {castes.character}
                      </Card.Title>
                    </Card.Body>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </section>
        <div className=" container pt-5 mt-5 ">
          <h2 className="">
            Crew <span className="text-info">{crew.length}</span>
          </h2>
          {crewArt.length != 0 && (
            <section>
              <div>
                <h1 className="text-info mt-5">Art</h1>
              </div>
              {crewArt.map((castes, index) => (
                <div className="col-12   point bg-dark  p-0  col-9 col-sm-10 col-md-12 col-lg-7 fw-bold rounded mt-5 ">
                  <div className="text-light d-flex  flex-column flex-sm-row align-items-center gap-2 mb-5 textMedia">
                    <Card
                      key={index}
                      className="text-light d-flex border-0 flex-column flex-sm-row align-items-center bg-dark  p-0 me-3 "
                      style={{ width: "14rem" }}
                    >
                      <Card.Img
                        onClick={() =>
                          navegate(`/detilseMov/${castes.id}/person`)
                        }
                        variant="top"
                        className="imgMedia w-75 p-sm-0 col-7 col-sm-5 col-md-4 col-lg-6"
                        src={
                          castes.profile_path
                            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${castes.profile_path}`
                            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                        }
                      />
                      <div className="text-center text-sm-start   pb-sm-3 col-12  col-lg-11 container  ">
                        <Card.Body>
                          <Card.Title className="fs-5">
                            {castes.original_name}
                          </Card.Title>
                          <Card.Title className="fs-5">
                            {castes.character}
                          </Card.Title>
                        </Card.Body>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}{" "}
            </section>
          )}

          {crewCamera.length != 0 && (
            <section>
              <h2 className=""></h2>
              <div>
                <h1 className="text-info mt-5">Camera</h1>
              </div>
              {crewCamera.map((castes, index) => (
                <div className="col-12   point bg-dark  p-0  col-9 col-sm-10 col-md-12 col-lg-7 fw-bold rounded mt-5 ">
                  <div className="text-light d-flex  flex-column flex-sm-row align-items-center gap-2 mb-5 textMedia">
                    <Card
                      key={index}
                      className="text-light d-flex border-0 flex-column flex-sm-row align-items-center bg-dark  p-0 me-3 "
                      style={{ width: "14rem" }}
                    >
                      <Card.Img
                        onClick={() =>
                          navegate(`/detilseMov/${castes.id}/person`)
                        }
                        variant="top"
                        className="imgMedia w-75 p-sm-0 col-7 col-sm-5 col-md-4 col-lg-6"
                        src={
                          castes.profile_path
                            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${castes.profile_path}`
                            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                        }
                      />
                      <div className="text-center text-sm-start   pb-sm-3 col-12  col-lg-11 container  ">
                        <Card.Body>
                          <Card.Title className="fs-5">
                            {castes.original_name}
                          </Card.Title>
                          <Card.Title className="fs-5">
                            {castes.character}
                          </Card.Title>
                        </Card.Body>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </section>
          )}
          {crewCostumeMakeUp.length != 0 && (
            <section>
              <h2 className=""></h2>
              <div>
                <h1 className="text-info mt-5">Costume & Make-Up</h1>
              </div>
              {crewCostumeMakeUp.map((castes, index) => (
                <div className="col-12   point bg-dark  p-0  col-9 col-sm-10 col-md-12 col-lg-7 fw-bold rounded mt-5 ">
                  <div className="text-light d-flex  flex-column flex-sm-row align-items-center gap-2 mb-5 textMedia">
                    <Card
                      key={index}
                      className="text-light d-flex border-0 flex-column flex-sm-row align-items-center bg-dark  p-0 me-3 "
                      style={{ width: "14rem" }}
                    >
                      <Card.Img
                        onClick={() =>
                          navegate(`/detilseMov/${castes.id}/person`)
                        }
                        variant="top"
                        className="imgMedia w-75 p-sm-0 col-7 col-sm-5 col-md-4 col-lg-6"
                        src={
                          castes.profile_path
                            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${castes.profile_path}`
                            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                        }
                      />
                      <div className="text-center text-sm-start   pb-sm-3 col-12  col-lg-11 container  ">
                        <Card.Body>
                          <Card.Title className="fs-5">
                            {castes.original_name}
                          </Card.Title>
                          <Card.Title className="fs-5">
                            {castes.character}
                          </Card.Title>
                        </Card.Body>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </section>
          )}
          {crewWriting.length != 0 && (
            <section>
              <h2 className=""></h2>
              <div>
                <h1 className="text-info mt-5">Writing</h1>
              </div>
              {crewWriting.map((castes, index) => (
                <div className="col-12   point bg-dark  p-0  col-9 col-sm-10 col-md-12 col-lg-7 fw-bold rounded mt-5 ">
                  <div className="text-light d-flex  flex-column flex-sm-row align-items-center gap-2 mb-5 textMedia">
                    <Card
                      key={index}
                      className="text-light d-flex border-0 flex-column flex-sm-row align-items-center bg-dark  p-0 me-3 "
                      style={{ width: "14rem" }}
                    >
                      <Card.Img
                        onClick={() =>
                          navegate(`/detilseMov/${castes.id}/person`)
                        }
                        variant="top"
                        className="imgMedia w-75 p-sm-0 col-7 col-sm-5 col-md-4 col-lg-6"
                        src={
                          castes.profile_path
                            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${castes.profile_path}`
                            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                        }
                      />
                      <div className="text-center text-sm-start   pb-sm-3 col-12  col-lg-11 container  ">
                        <Card.Body>
                          <Card.Title className="fs-5">
                            {castes.original_name}
                          </Card.Title>
                          <Card.Title className="fs-5">
                            {castes.character}
                          </Card.Title>
                        </Card.Body>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </section>
          )}
          {crewCrew.length != 0 && (
            <section>
              <h2 className=""></h2>
              <div>
                <h1 className="text-info mt-5">Crew</h1>
              </div>
              {crewCrew.map((castes, index) => (
                <div className="col-12   point bg-dark  p-0  col-9 col-sm-10 col-md-12 col-lg-7 fw-bold rounded mt-5 ">
                  <div className="text-light d-flex  flex-column flex-sm-row align-items-center gap-2 mb-5 textMedia">
                    <Card
                      key={index}
                      className="text-light d-flex border-0 flex-column flex-sm-row align-items-center bg-dark  p-0 me-3 "
                      style={{ width: "14rem" }}
                    >
                      <Card.Img
                        onClick={() =>
                          navegate(`/detilseMov/${castes.id}/person`)
                        }
                        variant="top"
                        className="imgMedia w-75 p-sm-0 col-7 col-sm-5 col-md-4 col-lg-6"
                        src={
                          castes.profile_path
                            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${castes.profile_path}`
                            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                        }
                      />
                      <div className="text-center text-sm-start   pb-sm-3 col-12  col-lg-11 container  ">
                        <Card.Body>
                          <Card.Title className="fs-5">
                            {castes.original_name}
                          </Card.Title>
                          <Card.Title className="fs-5">
                            {castes.character}
                          </Card.Title>
                        </Card.Body>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </section>
          )}
          {directingCrew.length != 0 && (
            <section>
              <h2 className=""></h2>
              <div>
                <h1 className="text-info mt-5">Directing</h1>
              </div>
              {directingCrew.map((castes, index) => (
                <div className="col-12   point bg-dark  p-0  col-9 col-sm-10 col-md-12 col-lg-7 fw-bold rounded mt-5 ">
                  <div className="text-light d-flex  flex-column flex-sm-row align-items-center gap-2 mb-5 textMedia">
                    <Card
                      key={index}
                      className="text-light d-flex border-0 flex-column flex-sm-row align-items-center bg-dark  p-0 me-3 "
                      style={{ width: "14rem" }}
                    >
                      <Card.Img
                        onClick={() =>
                          navegate(`/detilseMov/${castes.id}/person`)
                        }
                        variant="top"
                        className="imgMedia w-75 p-sm-0 col-7 col-sm-5 col-md-4 col-lg-6"
                        src={
                          castes.profile_path
                            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${castes.profile_path}`
                            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                        }
                      />
                      <div className="text-center text-sm-start   pb-sm-3 col-12  col-lg-11 container  ">
                        <Card.Body>
                          <Card.Title className="fs-5">
                            {castes.original_name}
                          </Card.Title>
                          <Card.Title className="fs-5">
                            {castes.character}
                          </Card.Title>
                        </Card.Body>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </section>
          )}
          {crewEditing.length != 0 && (
            <section>
              <h2 className=""></h2>
              <div>
                <h1 className="text-info mt-5">Editing</h1>
              </div>
              {crewEditing.map((castes, index) => (
                <div className="col-12   point bg-dark  p-0  col-9 col-sm-10 col-md-12 col-lg-7 fw-bold rounded mt-5 ">
                  <div className="text-light d-flex  flex-column flex-sm-row align-items-center gap-2 mb-5 textMedia">
                    <Card
                      key={index}
                      className="text-light d-flex border-0 flex-column flex-sm-row align-items-center bg-dark  p-0 me-3 "
                      style={{ width: "14rem" }}
                    >
                      <Card.Img
                        onClick={() =>
                          navegate(`/detilseMov/${castes.id}/person`)
                        }
                        variant="top"
                        className="imgMedia w-75 p-sm-0 col-7 col-sm-5 col-md-4 col-lg-6"
                        src={
                          castes.profile_path
                            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${castes.profile_path}`
                            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                        }
                      />
                      <div className="text-center text-sm-start   pb-sm-3 col-12  col-lg-11 container  ">
                        <Card.Body>
                          <Card.Title className="fs-5">
                            {castes.original_name}
                          </Card.Title>
                          <Card.Title className="fs-5">
                            {castes.character}
                          </Card.Title>
                        </Card.Body>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </section>
          )}
          {crewLighting.length != 0 && (
            <section>
              <h2 className=""></h2>
              <div>
                <h1 className="text-info mt-5">Lighting</h1>
              </div>
              {crewLighting.map((castes, index) => (
                <div className="col-12   point bg-dark  p-0  col-9 col-sm-10 col-md-12 col-lg-7 fw-bold rounded mt-5 ">
                  <div className="text-light d-flex  flex-column flex-sm-row align-items-center gap-2 mb-5 textMedia">
                    <Card
                      key={index}
                      className="text-light d-flex border-0 flex-column flex-sm-row align-items-center bg-dark  p-0 me-3 "
                      style={{ width: "14rem" }}
                    >
                      <Card.Img
                        onClick={() =>
                          navegate(`/detilseMov/${castes.id}/person`)
                        }
                        variant="top"
                        className="imgMedia w-75 p-sm-0 col-7 col-sm-5 col-md-4 col-lg-6"
                        src={
                          castes.profile_path
                            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${castes.profile_path}`
                            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                        }
                      />
                      <div className="text-center text-sm-start   pb-sm-3 col-12  col-lg-11 container  ">
                        <Card.Body>
                          <Card.Title className="fs-5">
                            {castes.original_name}
                          </Card.Title>
                          <Card.Title className="fs-5">
                            {castes.character}
                          </Card.Title>
                        </Card.Body>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </section>
          )}
          {crewSound.length != 0 && (
            <section>
              <h2 className=""></h2>
              <div>
                <h1 className="text-info mt-5">Sound</h1>
              </div>
              {crewSound.map((castes, index) => (
                <div className="col-12   point bg-dark  p-0  col-9 col-sm-10 col-md-12 col-lg-7 fw-bold rounded mt-5 ">
                  <div className="text-light d-flex  flex-column flex-sm-row align-items-center gap-2 mb-5 textMedia">
                    <Card
                      key={index}
                      className="text-light d-flex border-0 flex-column flex-sm-row align-items-center bg-dark  p-0 me-3 "
                      style={{ width: "14rem" }}
                    >
                      <Card.Img
                        variant="top"
                        className="imgMedia w-75 p-sm-0 col-7 col-sm-5 col-md-4 col-lg-6"
                        src={
                          castes.profile_path
                            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${castes.profile_path}`
                            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                        }
                      />
                      <div className="text-center text-sm-start   pb-sm-3 col-12  col-lg-11 container  ">
                        <Card.Body>
                          <Card.Title className="fs-5">
                            {castes.original_name}
                          </Card.Title>
                          <Card.Title className="fs-5">
                            {castes.character}
                          </Card.Title>
                        </Card.Body>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </section>
          )}
          {crewVisualEffects.length != 0 && (
            <section>
              <h2 className=""></h2>
              <div>
                <h1 className="text-info mt-5">Visual Effects</h1>
              </div>
              {crewVisualEffects.map((castes, index) => (
                <div className="col-12   point bg-dark  p-0  col-9 col-sm-10 col-md-12 col-lg-7 fw-bold rounded mt-5 ">
                  <div className="text-light d-flex  flex-column flex-sm-row align-items-center gap-2 mb-5 textMedia">
                    <Card
                      key={index}
                      className="text-light d-flex border-0 flex-column flex-sm-row align-items-center bg-dark  p-0 me-3 "
                      style={{ width: "14rem" }}
                    >
                      <Card.Img
                        onClick={() =>
                          navegate(`/detilseMov/${castes.id}/person`)
                        }
                        variant="top"
                        className="imgMedia w-75 p-sm-0 col-7 col-sm-5 col-md-4 col-lg-6"
                        src={
                          castes.profile_path
                            ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${castes.profile_path}`
                            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
                        }
                      />
                      <div className="text-center text-sm-start   pb-sm-3 col-12  col-lg-11 container  ">
                        <Card.Body>
                          <Card.Title className="fs-5">
                            {castes.original_name}
                          </Card.Title>
                          <Card.Title className="fs-5">
                            {castes.character}
                          </Card.Title>
                        </Card.Body>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </section>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllCastAndCrew;
