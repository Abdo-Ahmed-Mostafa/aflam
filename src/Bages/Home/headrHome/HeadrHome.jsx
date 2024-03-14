import React from "react";
import Button from "react-bootstrap/Button";

const TopHome = () => {
  return (
    <div className="pt-5 w">
      <div className="text-center text-info pt-5 ">
        <h1>Home</h1>
      </div>
      <div className="d-flex flex-wrap justify-content-evenly align-items-center">
        <div className="text-center col-12 mb-4 mt-4 mb-lg-0 mt-lg-0 col-lg-6 text-light ">
          <h2>SORT BY</h2>
          <div className="d-flex flex-wrap justify-content-evenly align-items-center">
            <Button variant="outline-light">Title</Button>
            <Button variant="outline-light">Poplarity</Button>
            <Button variant="outline-light">Date</Button>
            <Button variant="outline-light">Ratin</Button>
          </div>
        </div>
        <div className="text-center text-light col-lg-6">
          <h2>SORT ORDER</h2>
          <div className="d-flex flex-wrap justify-content-evenly align-items-center">
            <Button variant="outline-light">Descingin</Button>
            <Button variant="outline-light">Ascending</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHome;
