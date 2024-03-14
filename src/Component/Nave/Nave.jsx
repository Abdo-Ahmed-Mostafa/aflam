import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const Nave = ({
  search,
  setSearch,
  ceheck,
  setCechek,
  searchMovies,
  navigate,
  handelSearch,
  searchSeriesBage,
}) => {
  // console.log(searchSeriesBage);
  return (
    <div>
      <Navbar expand="lg" className=" position-fixed w-100 z-1 bg-dark ">
        <Container>
          <Navbar.Brand className="text-light">Redux Movies</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to="/" className="text-light">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/moveis" className="text-light">
                Movies
              </Nav.Link>
              <Nav.Link as={NavLink} to="/series" className="text-light">
                Series
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contactus" className="text-light">
                Contact Us
              </Nav.Link>
            </Nav>
            <Form className="d-flex flex-column flex-md-row justify-content-between gap-4 gap-md-2 align-items-center">
              <Form.Control
                type="search"
                placeholder={
                  ceheck ? "Search With Movies" : "Search With Sieris"
                }
                className="me-2"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {ceheck
                ? searchMovies.length > 0 && (
                    <ul
                      style={{
                        top: "3em",
                        left: "56em",
                        height: "50vh",
                      }}
                      className="position-absolute  p-0 mt-3 bg-dark text-light overflow-auto   "
                    >
                      {searchMovies &&
                        searchMovies.map((search, indexs) => (
                          <div
                            key={indexs}
                            className=" point d-flex justify-content-between  border border-end-0 border-start-0 mb-2 border-info rounded-2 p-2  "
                            onClick={() => navigate(`/detilseMov/${search.id}`)}
                          >
                            <li onClick={() => setSearch("")}>
                              <img
                                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${search.poster_path}`}
                                className="rounded-circle"
                                style={{ width: "2.5em", height: "2.5em" }}
                                alt=" Found"
                              />
                              {search.original_title}
                            </li>
                          </div>
                        ))}
                    </ul>
                  )
                : searchSeriesBage.length > 0 && (
                    <ul
                      style={{
                        top: "3em",
                        left: "56em",
                        height: "auto",
                        maxHeight: "50vh",
                        width: "27em",
                      }}
                      className="position-absolute  p-0 mt-3 bg-dark text-light overflow-auto   "
                    >
                      {searchSeriesBage &&
                        searchSeriesBage.map((search, indexs) => (
                          <div
                            key={indexs}
                            className=" point d-flex justify-content-between  border border-end-0 border-start-0 mb-2 border-info rounded-2 p-2  "
                            onClick={() => navigate(`/detilseMov/${search.id}`)}
                          >
                            <li onClick={() => setSearch("")}>
                              <img
                                src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${search.poster_path}`}
                                className="rounded-circle"
                                style={{ width: "2.5em", height: "2.5em" }}
                                alt=" Found"
                              />
                              {search.name}
                            </li>
                          </div>
                        ))}
                    </ul>
                  )}
            </Form>
            <div className="d-flex justify-content-center flex-wrap flex-md-nowrap gap-3 gap-md-2">
              <Button
                variant="outline-success"
                onClick={handelSearch}
                disabled={search == "" ? true : false}
              >
                Search
              </Button>
              {ceheck ? (
                <Button
                  className="fw-bold"
                  style={{ width: "9em" }}
                  variant="outline-primary"
                  onClick={() => setCechek(!ceheck)}
                >
                  serach Series
                </Button>
              ) : (
                <Button
                  className="fw-bold"
                  style={{ width: "9em" }}
                  variant="outline-danger"
                  onClick={() => setCechek(!ceheck)}
                >
                  serach Movies
                </Button>
              )}
            </div>
            <Button variant="outline-info" className="ms-lg-2  fw-bold ">
              LogIn
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Nave;
/*


*/
