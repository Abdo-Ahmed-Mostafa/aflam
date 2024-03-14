import React from "react";
import "./style.css";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
const ErorrBage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="page_404 text-light  ">
        <div className="container pt-5 w-100 ">
          <div className="row">
            <div className="col-sm-12 d-flex justify-content-center  align-items-center">
              <div className="col-sm-10 col-sm-offset-1  text-center ">
                <div className="four_zero_four_bg">
                  <h1 className="text-center text-dark">404</h1>
                </div>
                <div className="contant_box_404 mt-5">
                  <h1 className="h2">Data Not Founed !</h1>
                  <p></p>
                  <Button onClick={() => navigate("/")}>Go To Home</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ErorrBage;
