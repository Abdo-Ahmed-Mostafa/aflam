import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { detailsMovie } from "../../redux_system/Slices/detailsMovies";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./movies.css";
import { MdAddToPhotos } from "react-icons/md";
import { RiStarSLine } from "react-icons/ri";
import { FaPlayCircle } from "react-icons/fa";
import { creditsmove } from "../../redux_system/Slices/creditsMovies";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { videoDetails } from "../../redux_system/Slices/videoPlay";
import Loding from "./../Lod_errors/Loding";

const DetialseMovies = ({
  show,
  details,
  setShow,
  loding,
  videoPaying,
  actingCast,
  directingCast,
  productionCast,
  movieid,
}) => {
  const dispatch = useDispatch();
  const navigete = useNavigate();
  useEffect(() => {
    dispatch(detailsMovie(movieid));
    dispatch(creditsmove(movieid));
  }, [movieid]);
  const handleClose = () => setShow(false);
  const moviesVideo = (movie) => {
    setShow(true);
    dispatch(videoDetails(movie));
  };
  return (
    <div>
      {loding ? (
        <Loding />
      ) : (
        <div
          className=" flex-column flex-wrap w-100 text-light"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
              details.backdrop_path && details.backdrop_path
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {details.original_title && (
            <div className="bg-img w-100 pt-5  ">
              <div className="text-center pt-4 mb-4 z-index">
                <h2 className="text-info">Movie - Details</h2>
              </div>
              <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 flex-wrap z-index">
                <div className="col-7 col-lg-4 text-center text-lg-end">
                  <img
                    className="col-12 col-sm-10 col-md-8 col-lg-9"
                    src={
                      details && details.poster_path
                        ? `https://image.tmdb.org/t/p/w600_and_h900_bestv2${
                            details && details.poster_path
                          }`
                        : `https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg`
                    }
                    alt=""
                  />
                </div>
                <div className="col-12 col-md-10 col-lg-7 d-flex flex-column align-items-center align-items-lg-start justify-content-center gap-3 flex-wrap">
                  <h2 className="text-center text-lg-start">
                    {details && details.title}
                  </h2>
                  <h2 className="fs-6 d-flex flex-column flex-sm-row align-items-center align-items-sm-start gap-2">
                    <span className="text-center">
                      {details && details.release_date}
                      {`(${
                        details.original_language &&
                        details.original_language.toUpperCase()
                      })`}
                    </span>

                    <span className="text-center">
                      {details &&
                        details.genres.map((genre, index) => (
                          <span key={index}>{genre.name + " , "}</span>
                        ))}
                      {/* {details &&
                  details.genres[0].name +
                    " , " +
                    details.genres[1].name +
                    " , " +
                    details.genres[2].name} */}
                    </span>

                    <span className="text-center">
                      {details && Math.floor(details.runtime / 60)}h{" "}
                      <span></span>
                      {details && details.runtime % 60}min
                    </span>
                  </h2>

                  <h2 className="text-info lh-1 text-center text-lg-start">
                    OverView :{" "}
                    <span className="text-light fs-6">
                      {details && details.overview}
                    </span>
                  </h2>
                  <h2 className="text-info">Casting :</h2>

                  {/*  */}
                  <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center justify-content-md-evenly align-items-md-start justify-content-lg-evenly align-items-lg-start w-100 flex-wrap">
                    <div className="text-center">
                      <h2 className="fs-5">
                        {actingCast.length > 0 && actingCast[0].original_name}
                      </h2>
                      <h2 className="fs-6 text-warning">Acting</h2>
                    </div>
                    <div className="text-light">||</div>
                    <div className="text-center">
                      <h2 className="fs-5">
                        {actingCast.length > 1 && actingCast[1].original_name}
                      </h2>
                      <h2 className="fs-6 text-warning">Acting</h2>
                    </div>
                  </div>

                  {/*  */}
                  <div className="d-flex flex-column flex-md-row flex-lg-row align-items-center justify-content-md-evenly align-items-md-start justify-content-lg-evenly align-items-lg-start w-100 flex-wrap">
                    <div className="text-center me-md-3 me-lg-0">
                      <h2 className="fs-5">
                        {productionCast.length > 0 &&
                          productionCast[0].original_name}
                      </h2>
                      <h2 className="fs-6 text-warning">Production</h2>
                    </div>
                    <div className="text-light me-md-3 me-lg-0">||</div>
                    <div className="text-center me-md-3 me-lg-0">
                      <h2 className="fs-5">
                        {directingCast.length > 0 &&
                          directingCast[0].original_name}
                      </h2>
                      <h2 className="fs-6 text-warning">Directing</h2>
                    </div>
                    <div className="text-light me-md-3 me-lg-0">||</div>
                    <div className="text-center me-md-3 me-lg-0">
                      <h2 className="fs-5">
                        {productionCast.length > 1 &&
                          productionCast[1].original_name}
                      </h2>
                      <h2 className="fs-6 text-warning">Production</h2>
                    </div>
                  </div>

                  {/*  */}
                  <div className="d-flex justify-content-evenly align-items-start w-100 flex-wrap">
                    <div className="text-center cursor-pointer">
                      <MdAddToPhotos className="text-success fs-4" />
                      <h2 className="fs-6">AddTo WatchList</h2>
                    </div>
                    <div className="text-center cursor-pointer">
                      <RiStarSLine className="text-warning fs-4" />
                      <h2 className="fs-6">Rate Movie</h2>
                    </div>
                    <div className="text-center cursor-pointer">
                      <FaPlayCircle
                        className="text-danger fs-4"
                        onClick={() => moviesVideo(details && details.id)}
                        style={{ cursor: "pointer" }}
                      />
                      <h2 className="fs-6">Play Trailer</h2>
                    </div>
                  </div>
                  <div className="text-center w-100 mb-4">
                    <Button variant="outline-info" onClick={() => navigete(-1)}>
                      Back a step
                    </Button>{" "}
                  </div>
                </div>

                <Modal show={show} onHide={handleClose}>
                  <Modal.Body variant="dark" className="bg-dark text-light">
                    {videoPaying.results && videoPaying.results.length > 0 ? (
                      <iframe
                        width="470"
                        height="400"
                        src={`https://www.youtube.com/embed/${videoPaying.results[0].key}`}
                      ></iframe>
                    ) : (
                      <p>
                        {details && details.homepage !== "" ? (
                          <Link
                            target="_blank"
                            href={`${details && details.homepage}`}
                          >
                            Go to the Home Page
                          </Link>
                        ) : (
                          "The video not found"
                        )}
                      </p>
                    )}
                  </Modal.Body>
                </Modal>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DetialseMovies;
