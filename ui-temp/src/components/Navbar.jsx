import * as React from "../../node_modules/@types/react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
// import navjs from 'bootstrap/js/dist/collapse'
// require('bootstrap/js/dist/collapse')

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
          <img src={logo} width="30" height="30" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home
              </Link>
              {/* <span className="sr-only">(current)</span> */}
            </li>
            <li className="nav-item">
              <Link to="/offerHelp" className="nav-link">
                Offer to Help
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/findHelp" className="nav-link">
                Find Help
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/account" className="nav-link">
                My Account
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/messages" className="nav-link">
                Messages
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/guidelines" className="nav-link">
                Community Guidelines
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/demo" className="nav-link">
                Demo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      {/* <nav className="navbar sticky-top navbar-light bg-primary">
                <a className="navbar-brand" href="/">
                    Sticky top
                </a>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/offerHelp">Offer to Help</Link>
                    </li>
                    <li>
                        <Link to="/findHelp">Find Help</Link>
                    </li>
                    <li>
                        <Link to="/account">My Account</Link>
                    </li>
                    <li>
                        <Link to="/messages">Messages</Link>
                    </li>
                    <li>
                        <Link to="/guidelines">Community Guidelines</Link>
                    </li>
                    <li>
                        <Link to="/demo">Demo</Link>
                    </li>
                    <li>
                        <Link to="/">Sign Out</Link>
                    </li>
                </ul>
            </nav> */}
    </div>
  );
};

export default Navbar;
