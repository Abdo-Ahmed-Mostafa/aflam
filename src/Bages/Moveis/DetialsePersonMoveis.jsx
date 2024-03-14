import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loding from "../Lod_errors/Loding";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import { TiHomeOutline } from "react-icons/ti";
import { FaYoutube } from "react-icons/fa6";
import { getExternalMovie } from "../../redux_system/Slices/externalIDsSlice";
import {
  getPirsonMovies,
  getPirsonMoviesKnown,
} from "../../redux_system/Slices/pirsonSlices";

const DetialsePersonMoveis = () => {
  const { detialsPirsonMoveis, detialsPirsonKnownForMoveis, loding } =
    useSelector((state) => state.pirsonDetails);
  const { personid } = useParams();
  const { externalMovie } = useSelector((state) => state.externalId);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const newDetialsPirsonKnownForMoveis =
    detialsPirsonKnownForMoveis.cast?.filter((s, index) => {
      return index < 3;
    });

  useEffect(() => {
    dispatch(getExternalMovie(personid));
    dispatch(getPirsonMovies(personid));
    dispatch(getPirsonMoviesKnown(personid));
  }, []);
  console.log(newDetialsPirsonKnownForMoveis);
  return (
    <div>
      {!loding ? (
        <div className="row p-5">
          <div className="mb-5 mb-lg-0 col-12 col-lg-4 d-flex flex-column align-items-center align-items-lg-start gap-5 container ">
            <div className="col-12 text-center text-lg-start">
              <img
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
                  detialsPirsonMoveis && detialsPirsonMoveis.profile_path
                }`}
                className="col-10 col-sm-7 col-md-6 col-lg-11 rounded"
                alt=""
              />
            </div>
            <div className="text-info d-flex gap-3 gap-md-4 fs-4 ">
              <a
                className={
                  externalMovie && externalMovie.facebook_id
                    ? "cursor-pointer text-info hoverIcons"
                    : "cursor-pointer text-info"
                }
                target={
                  externalMovie && externalMovie.facebook_id ? "_blank" : ""
                }
                href={
                  externalMovie && externalMovie.facebook_id
                    ? `https://www.facebook.com/${externalMovie.facebook_id}`
                    : `#`
                }
              >
                <FaFacebook />
              </a>
              <a
                className={
                  externalMovie && externalMovie.twitter_id
                    ? "cursor-pointer text-info hoverIcons"
                    : "cursor-pointer text-info"
                }
                target={
                  externalMovie && externalMovie.twitter_id ? "_blank" : ""
                }
                href={
                  externalMovie && externalMovie.twitter_id
                    ? `https://twitter.com/${externalMovie.twitter_id}`
                    : `#`
                }
              >
                <FaTwitter />
              </a>
              <a
                className={
                  externalMovie && externalMovie.instagram_id
                    ? "cursor-pointer text-info hoverIcons"
                    : "cursor-pointer text-info"
                }
                target={
                  externalMovie && externalMovie.instagram_id ? "_blank" : ""
                }
                href={
                  externalMovie && externalMovie.instagram_id
                    ? `https://www.instagram.com/${externalMovie.instagram_id}`
                    : `#`
                }
              >
                <FaInstagram />
              </a>
              <a
                className={
                  externalMovie && externalMovie.tiktok_id
                    ? "cursor-pointer text-info hoverIcons"
                    : "cursor-pointer text-info"
                }
                target={
                  externalMovie && externalMovie.tiktok_id ? "_blank" : ""
                }
                href={
                  externalMovie && externalMovie.tiktok_id
                    ? `https://www.tiktok.com/${externalMovie.tiktok_id}`
                    : `#`
                }
              >
                <FaTiktok />
              </a>
              <a
                className={
                  externalMovie && externalMovie.youtube_id
                    ? "cursor-pointer text-info hoverIcons"
                    : "cursor-pointer text-info"
                }
                target={
                  externalMovie && externalMovie.youtube_id ? "_blank" : ""
                }
                href={
                  externalMovie && externalMovie.youtube_id
                    ? `https://www.youtube.com/${externalMovie.youtube_id}`
                    : `#`
                }
              >
                <FaYoutube />
              </a>
              <a
                className={
                  externalMovie && externalMovie.facebook_id
                    ? "cursor-pointer text-info hoverIcons"
                    : "cursor-pointer text-info"
                }
                target={
                  externalMovie && externalMovie.facebook_id ? "_blank" : ""
                }
                href={
                  externalMovie && externalMovie.facebook_id
                    ? `${detialsPirsonMoveis.homepage}`
                    : `#`
                }
              >
                <TiHomeOutline />
              </a>
            </div>
            <div className="text-light d-flex flex-column align-items-center align-items-lg-start gap-4 text-light">
              <h3>Personal Info</h3>
              <div className="text-center text-lg-start">
                <h4>Known For</h4>
                <h6 className="text-info">
                  {detialsPirsonMoveis &&
                    detialsPirsonMoveis.known_for_department}
                </h6>
              </div>
              <div className="text-center text-lg-start">
                <h4 className="">Known Credits</h4>
                <h5 className="text-info">-</h5>
              </div>
              <div className="text-center text-lg-start">
                <h4 className="">Gender</h4>
                <h6 className="text-info">
                  {detialsPirsonMoveis && detialsPirsonMoveis.gender == 1
                    ? "Female"
                    : "Male"}
                </h6>
              </div>
              <div className="text-center text-lg-start">
                <h4 className="">Birthday</h4>
                <h6 className="text-info">
                  {detialsPirsonMoveis && detialsPirsonMoveis.birthday}
                </h6>
              </div>
              <div className="text-center text-lg-start">
                <h4 className="">Place of Birth</h4>
                <h6 className="text-info">
                  {detialsPirsonMoveis && detialsPirsonMoveis.place_of_birth}
                </h6>
              </div>
              <div className="text-center text-lg-start">
                <h4 className="">Also Known As</h4>
                <div className=" d-flex flex-column ">
                  {detialsPirsonMoveis.also_known_as &&
                    detialsPirsonMoveis.also_known_as.map((det, index) => (
                      <h6 key={index}>{det}</h6>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-8 text-light">
            <div className="d-flex flex-column align-items-center align-items-lg-start gap-5 container ps-0">
              <div className="text-center text-lg-start mt-2">
                <h2>{detialsPirsonMoveis && detialsPirsonMoveis.name}</h2>
              </div>
              <div>
                <h3 className="text-info">Biography</h3>
                <div>
                  {detialsPirsonMoveis &&
                  detialsPirsonMoveis.biography != "" ? (
                    <p>{detialsPirsonMoveis.biography}</p>
                  ) : (
                    <p>
                      We don't have a biography for{" "}
                      <span className="text-info">
                        {detialsPirsonMoveis && detialsPirsonMoveis.name}
                      </span>
                    </p>
                  )}
                </div>
              </div>
              <div>
                <h3 className="text-info">Known For</h3>
                <div className="col-12 d-flex flex-nowrap  gap-3 mt-5 ">
                  {newDetialsPirsonKnownForMoveis?.map((known, index) => (
                    <div
                      key={index}
                      className="bg-dark text-light col-lg-3 col-md-4 col-sm-7 col-12  rounded "
                    >
                      <img
                        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${known.poster_path}`}
                        className="col-12 point"
                        alt=""
                      />{" "}
                      <div
                        className="text-center"
                        onClick={() => navigate(`/detilseMov/${known.id}`)}
                      >
                        <p className="point">{known.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-flex justify-content-center  w-100">
                <Button onClick={() => navigate(-1)} variant="outline-info">
                  Back a Step
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loding />
      )}
    </div>
  );
};

export default DetialsePersonMoveis;
