import React from "react";
import "./style/footer.css";
import { Link } from 'react-router-dom';
// import "./@fontawesome/fontawesome-free/css/all.css";
// import "../node_modules/@fontawesome/fontawesome-free/css/all.css";


function Footer() {
  return (
    <div class="footer-basic">
      <footer>
        <ul class="list-inline">
          <li class="list-inline-item">
            <Link to="/">Home</Link>
          </li>

          <li class="list-inline-item">
            <Link to="/about">About</Link>
          </li>
          <li class="list-inline-item">
            <Link to="/contactUs">contactUs</Link>
            {/* <i class="fa-solid fa-trash"></i> */}
          </li>
          <li class="list-inline-item">
            <Link to="/cart">cart</Link>
          </li>
        </ul>
        <p class="copyright">MSSTORE © 2022</p>
      </footer>
    </div>
  );
}

export default Footer;
