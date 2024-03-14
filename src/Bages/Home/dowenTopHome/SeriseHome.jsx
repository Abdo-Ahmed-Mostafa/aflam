import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSeires } from "../../../redux_system/Slices/seiresSlice";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";
import Loding from "../../Lod_errors/Loding";
import ErorrBage from "../../Lod_errors/ErorrBage";
const SeriseHome = () => {
  const { seiresHome } = useSelector((state) => state.seires);
  const { loding } = useSelector((state) => state.seires);
  const { erorr } = useSelector((state) => state.seires);
  const navgate = useNavigate();
  const dispatch = useDispatch();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  useEffect(() => {
    dispatch(getSeires());
  }, []);

  return (
    <div>
      {!erorr ? (
        !loding ? (
          seiresHome && (
            <div className="text-light  container mt-5 ">
              <h2 className="mt-5 mb-5  text-info text-center text-lg-start">
                SEIRES
              </h2>
              <Slider
                style={{ cursor: "pointer" }}
                className="m-4"
                {...settings}
              >
                {seiresHome.results ? (
                  seiresHome.results.map((data, index) => (
                    <div key={index} className="">
                      <div className="d-flex justify-content-center ">
                        <img
                          className="cursor-pointer res p-md-2 p-lg-3 p-xl-3 size-img-media"
                          src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${data.poster_path}`}
                          style={{ width: "18rem" }}
                          onClick={() => navgate(`/series/${data.id}`)}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <h1></h1>
                )}
              </Slider>
            </div>
          )
        ) : (
          <Loding />
        )
      ) : (
        <ErorrBage />
      )}
    </div>
  );
};

export default SeriseHome;
