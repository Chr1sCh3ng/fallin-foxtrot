import React from "react";
import { Link } from "react-router-dom";
import RequestHelp from "../modal/RequestHelp";

function SiteNav() {
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <Link
            to="/"
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </Link>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link to="./" className="nav-link px-2 text-white link-button">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/DailyUpdate"
                  className="nav-link px-2 text-white link-button"
                >
                  Daily Update
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Options
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <RequestHelp></RequestHelp>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/mission">
                    Mission
                  </a>
                </div>
              </li>
            </ul>
          </div>
          <div className="text-end">
            <a
              href="/profile"
              className="align-items-center mb-2 me-2 mb-lg-0 text-white text-decoration-none"
            >
              User
            </a>
            <Link
              to="login"
              type="button"
              className="btn btn-outline-light me-2"
            >
              Login
            </Link>
            <Link to="register" className="btn btn-info">
              Register
            </Link>
          </div>
        </div>
      </nav>
      <div className="divider p-1"></div>
    </React.Fragment>
  );
}

export default SiteNav;
