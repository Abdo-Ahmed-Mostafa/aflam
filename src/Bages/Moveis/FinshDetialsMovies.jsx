import React, { useEffect, useState } from "react";
import DetialseMovies from "./DetialseMovies";
import { CastAndBagesMovies } from "./CastAndBagesMovies";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  collectionsMovei,
  detailsMovie,
} from "../../redux_system/Slices/detailsMovies";
import { creditsmove } from "../../redux_system/Slices/creditsMovies";
import { getKeyWordsMovie } from "../../redux_system/Slices/keyWordsSlice";
import { getReviewsMovies } from "../../redux_system/Slices/reviewsSlices";
import { videoDetails } from "../../redux_system/Slices/videoPlay";
import { getImageMovies } from "../../redux_system/Slices/imageSlices";
import { getDataRecommMovies } from "../../redux_system/Slices/recommendationsSlice";

const FinshDetialsMovies = () => {
  const { movieid } = useParams();

  const { details, loding, collection } = useSelector(
    (state) => state.detailsMov
  );
  const { videoPaying, lodingVideo } = useSelector(
    (state) => state.videoDetalisMovie
  );
  const { reviewsMovies } = useSelector((state) => state.reviews);
  const { keyWordsMovies } = useSelector((state) => state.keyWords);
  const { recommendationsMovies, lodingRecomm } = useSelector(
    (state) => state.recommendations
  );
  const { backDropsMovies, logosMovies, postersMovies } = useSelector(
    (state) => state.allImage
  );
  const {
    actingCast,
    directingCast,
    productionCast,
    cast,
    erorr,
    lodingCredits,
  } = useSelector((state) => state.creditsMov);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsMovie(movieid));
    dispatch(creditsmove(movieid));
    dispatch(getKeyWordsMovie(movieid));
    dispatch(getReviewsMovies(movieid));
    dispatch(videoDetails(movieid));
    dispatch(getImageMovies(movieid));
    dispatch(getDataRecommMovies(movieid));
  }, [movieid]);
  return (
    <div>
      <DetialseMovies
        show={show}
        setShow={setShow}
        details={details}
        loding={loding}
        videoPaying={videoPaying}
        actingCast={actingCast}
        directingCast={directingCast}
        productionCast={productionCast}
        movieid={movieid}
      />
      <CastAndBagesMovies
        cast={cast}
        details={details}
        lodingCredits={lodingCredits}
        erorr={erorr}
        movieid={movieid}
        keyWordsMovies={keyWordsMovies}
        reviewsMovies={reviewsMovies}
        videoPaying={videoPaying}
        backDropsMovies={backDropsMovies}
        logosMovies={logosMovies}
        postersMovies={postersMovies}
        lodingVideo={lodingVideo}
        recommendationsMovies={recommendationsMovies}
        lodingRecomm={lodingRecomm}
        collection={collection}
      />
    </div>
  );
};

export default FinshDetialsMovies;
