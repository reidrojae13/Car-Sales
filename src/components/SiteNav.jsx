import React from "react";
// import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

//import { useState } from "react";
//import { useEffect } from "react";
// import Home from "./Home";
// import { useNavigate } from "react-router-dom";
//import usersService from "./codeChallenge/services/usersService";

function SiteNav(props) {
  const onLogOutClicked = () => {
    console.log("logoutclickeddddd");
    props.userUpdater((prevState) => {
      let clone = { ...prevState };
      clone.firstName = "";
      clone.lastName = "";
      clone.isLoggedIn = false;
      return clone;
    });
  };

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-info"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://pw.sabio.la/images/Sabio.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Sabio"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link
                  to="/home"
                  className="nav-link px-2 text-dark link-button "
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/friends"}
                  className="nav-link px-2 text-dark link-button"
                  id="friends"
                >
                  Friends
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"onedit"}
                  className="nav-link px-2 text-dark link-button"
                >
                  Add/Edit Friends
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/jobs"}
                  className="nav-link px-2 text-dark link-button"
                >
                  Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/editjobs"}
                  className="nav-link px-2 text-dark link-button"
                >
                  add/edit Jobs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/companies"}
                  className="nav-link px-2 text-dark link-button"
                >
                  Tech Companies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/companyadd"}
                  className="nav-link px-2 text-dark link-button"
                >
                  Add Company
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/events"}
                  className="nav-link px-2 text-dark link-button"
                >
                  Events
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link px-2 text-dark link-button">
                  Test and Ajax Call
                </Link>
              </li>
            </ul>
            <div className="text-end">
              <a
                href="/"
                className="align-items-center mb-2 me-2 mb-lg-0 text-white text-decoration-none"
              >
                {props.user.firstName}
              </a>
              {!props?.user.firstName ? (
                <Link
                  to={"/login"}
                  type="button"
                  className="btn btn-outline-light me-2"
                >
                  Log in
                </Link>
              ) : (
                <Link
                  to={"/home"}
                  type="button"
                  className="btn btn-outline-light me-2"
                  onClick={onLogOutClicked}
                >
                  Log out
                </Link>
              )}
              <Link to={"/register"} type="button" className="btn btn-warning">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* <div className="container d-none">
        <button
          type="button"
          id="pg1"
          data-page="/home"
          className="btn btn-primary"
          onClick={Home}
        ></button>
        <button
          type="button"
          id="pg2"
          data-page="/page2"
          className="btn btn-primary"
          onClick={goToPage}
        ></button>
        <button
          type="button"
          id="pg3"
          data-page="/page3"
          className="btn btn-primary"
          onClick={goToPage}
        ></button>
        <button
          type="button"
          id="home"
          data-page="/"
          className="btn btn-primary"
          onClick={goToPage}
        ></button>
      </div> */}
    </React.Fragment>
  );
}

export default SiteNav;
