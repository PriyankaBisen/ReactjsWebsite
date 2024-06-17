import React from "react";
import "../App.css";
export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="#HOW">
                  HOW IT WORKS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#ABOUT">
                  ABOUT
                </a>
              </li>
              
              <li className="nav-item">
                <a className="nav-link" href="#ABOUT">
                  WORK
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ABOUT">
                  PRICING
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#ABOUT">
                  BLOG
                </a>
              </li>
            </ul>

            <a className="btn btn-primary" href="#ABOUT">
              GET STARTED
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
