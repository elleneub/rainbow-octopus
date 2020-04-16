import * as React from 'react'
import { Link } from 'react-router-dom'
import logo from 'images/x-logo.png'
// import navjs from 'bootstrap/js/dist/collapse'
// require('bootstrap/js/dist/collapse')

const Navbar = () => {
    return (
        <div className="">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/home" className="navbar-brand">
                    <img src={logo} width="50" height="50" alt="" />
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
                            <Link to="/home" className="nav-link">
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
        </div>
    )
}

export default Navbar
