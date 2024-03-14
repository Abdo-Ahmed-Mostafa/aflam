import React from "react";

const Foter = () => {
  return (
    <div>
      <div className="text-center z-index position-relative mt-5 pb-3">
        <h2 className="fs-6">
          ©2023 <span className="text-primary fs-4">React Movies</span>, All
          Rights Reserved
        </h2>
        <div className="d-flex flex-wrap justify-content-center">
          <h2 className="text-danger fs-6 me-3">About Us</h2>
          <h2 className="text-danger fs-6 me-3">Terms of Use</h2>
          <h2 className="text-danger fs-6">Privacy</h2>
        </div>
      </div>
    </div>
  );
};

export default Foter;
