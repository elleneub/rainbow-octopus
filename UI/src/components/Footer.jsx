import * as React from 'react';
// import { Link } from 'react-router-dom';
import logo from 'images/V2logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTwitter,
    faInstagram,
    faFacebook,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="page-footer font-small mt-4 bg-light" id="footer">
            <div className="social">
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faGithub} />
            </div>
            <div className="copy">  
                <div className="footer-copyright text-center py-3">
                    © 2020 XIMITY 
                </div>
                <img src={logo} width="15" height="15" alt="" />
            </div>
        </div>
    )
}

export default Footer
