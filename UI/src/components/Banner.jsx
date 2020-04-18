import * as React from 'react';
import { Link } from 'react-router-dom';


const Banner = () => {
    return (
        <div className="banner">
            <div className="group">
                <h1 className="head">XIMITY</h1>
                <p className="tail">Neighbors Helping Neighbors.</p>
                <Link to="/offerHelp">
                    <button className="btn btn-primary px-3">Start Now</button>
                </Link>
            </div>
        </div>
    )
}

export default Banner