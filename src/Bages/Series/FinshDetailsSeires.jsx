import React, { useEffect, useState } from "react";
import DetailsSeries from "./DetailsSeries";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getVieowSires } from "../../redux_system/Slices/videoPlayeSeires";
import { getDetailsSeires } from "../../redux_system/Slices/detailsSeires";
import { creditsSeire } from "../../redux_system/Slices/creditsSeires";
import CastAndBageSeires from "./CastAndBageSeires";
import { getReviewsSeries } from "../../redux_system/Slices/reviewsSlices";
import { getImageseries } from "../../redux_system/Slices/imageSlices";
import { getDataRecommSeires } from "../../redux_system/Slices/recommendationsSlice";

const FinshDetailsSeires = () => {
  const { detailsSer, loding } = useSelector(
    (state) => state.detailsSeriesData
  );
  const { seiresVideo, lodingSeriesViedeo } = useSelector(
    (state) => state.seiresVideos
  );
  const { reviewsSerires } = useSelector((state) => state.reviews);
  const { recommendationsSeires } = useSelector(
    (state) => state.recommendations
  );
  const { postersSeires, backDropsSeires } = useSelector(
    (state) => state.allImage
  );
  const { actingCast, directingCast, productionCast, cast, crew } = useSelector(
    (state) => state.creditsSeries
  );
  const { seriesid } = useParams();
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigete = useNavigate();
  const handleClose = () => setShow(false);
  const moviesVideo = (movie) => {
    setShow(true);
    dispatch(getVieowSires(movie));
  };
  useEffect(() => {
    dispatch(getDetailsSeires(seriesid));
    dispatch(creditsSeire(seriesid));
    dispatch(getReviewsSeries(seriesid));
    dispatch(getVieowSires(seriesid));
    dispatch(getImageseries(seriesid));
    dispatch(getDataRecommSeires(seriesid));
  }, [seriesid]);
  return (
    <div>
      <DetailsSeries
        seiresVideo={seiresVideo}
        detailsSer={detailsSer}
        actingCast={actingCast}
        directingCast={directingCast}
        loding={loding}
        productionCast={productionCast}
        show={show}
        setShow={setShow}
        seriesid={seriesid}
        dispatch={dispatch}
        handleClose={handleClose}
        moviesVideo={moviesVideo}
        navigete={navigete}
      />
      <CastAndBageSeires
        cast={cast}
        crew={crew}
        detailsSer={detailsSer}
        reviewsSerires={reviewsSerires}
        seiresVideo={seiresVideo}
        lodingSeriesViedeo={lodingSeriesViedeo}
        backDropsSeires={backDropsSeires}
        postersSeires={postersSeires}
        recommendationsSeires={recommendationsSeires}
      />
    </div>
  );
};

export default FinshDetailsSeires;
