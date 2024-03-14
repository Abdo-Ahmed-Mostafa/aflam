import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  collectionsMovei,
  detailsMovie,
} from "../../redux_system/Slices/detailsMovies";
import { useParams } from "react-router-dom";

const CollectionPage = () => {
  const { details, loding, collection } = useSelector(
    (state) => state.detailsMov
  );
  const { movieid } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(detailsMovie(movieid));
    if (details && details.belongs_to_collection) {
      dispatch(collectionsMovei(details?.belongs_to_collection?.id));
    }
  }, []);
  console.log(details);
  return (
    <section className="row d-flex flex-column gap-4">
      <div className=" flex-column flex-wrap w-100 p-0 mt-5 text-light">
        <div
          className="bg-img-collection w-100 h-100"
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/w600_and_h900_bestv2${
              collection && collection.backdrop_path
            })`,
            backgroundSize: "cover",
            backgroundPosition: "30% 20%",
          }}
        >
          <div className="d-flex flex-column flex-lg-row justify-content-center align-items-center gap-4 flex-wrap z-index">
            <div className="col-9 col-sm-7 col-lg-3 text-center p-lg-5 pe-lg-0  text-lg-start">
              <img
                className="col-12 p-3 p-md-5 p-lg-0"
                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2/${
                  collection && collection?.poster_path
                }.jpg`}
              />
            </div>
            <div className="col-10 col-lg-8 d-flex flex-column align-items-center align-items-lg-start justify-content-center gap-3 flex-wrap text-center text-lg-start">
              <h2>{collection && collection.name}</h2>
              <div className="d-flex">
                {collection &&
                  details?.genres &&
                  details.genres.map((data, index) => (
                    <h4 key={index}>{data.name + ","}</h4>
                  ))}
              </div>
              <h2 class="fs-6 d-flex flex-column gap-2">
                <span class="text-info fs-4 ">Overview :- </span>
                <span>{collection.overview}</span>
              </h2>
              <h2 class="fs-4">
                <span class="text-info">Number of Movies : </span>
                <span>{collection?.parts?.length}</span>
              </h2>
              <h2 class="fs-4">
                <span class="text-info">Revenue : </span>
                <span>
                  {details && details.revenue && details.revenue > 0
                    ? details.revenue &&
                      "$" +
                        details.revenue
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    : "-"}
                </span>
              </h2>{" "}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionPage;
