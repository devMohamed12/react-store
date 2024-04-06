import React from 'react'
import { Link } from 'react-router-dom';
import   "./style/main.css";

function Navbar(props) {
  const {cartItemLegnth} = props;
  return (
    <nav className="navbar navbar-expand-lg bg-light  top-0 left-0 w-100 ">
      <div className="container">
        <Link className="navbar-brand" to="/">
          MSSTORE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            
            <li className="nav-item ">
              <Link className="nav-link" to="/about">
                about
              </Link>
            </li>
            <li className="nav-item  ">
              <Link className="nav-link " to="/contactUs">
                contact us
              </Link>
            </li>
            <li className="nav-item  ">
              <Link className="nav-link " to="cart">
                cart{" "}
                <button className="btn btn-outline-danger btn-sm mx-1">
                  {cartItemLegnth}
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar