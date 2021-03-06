import React from 'react';
import Banner from 'components/Banner';



class HomePage extends React.Component {
    render() {
        return (
            <div>
                <Banner />
                <div className="card my-2 mx-5">
                    <div className="card-body bg-primary">
                        <p className="subtitle">
                            Ximity is a volunteer community exchange. We provide a
                            platform for vulnerable or at-risk people to post
                            their needs and for helpers to step-up to assist.
                        </p>
                    </div>
                </div>
                <div className="card my-2 mx-5">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <h3 className="card-title">
                                    Current Needs Posted
                                </h3>
                                <ul>
                                    <li>
                                        Ilsa needs someone to come and shovel
                                        her front walk
                                    </li>
                                    <li>
                                        Max needs a ride to the clinic on
                                        Tuesday afternoon
                                    </li>
                                    <li>
                                        Jerome is looking for someone to help
                                        plant tomatoes
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-4 d-flex" id="hpbutton">
                                <button className="btn btn-secondary ml-auto ml-auto">
                                    I Want To Help
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card my-2 mx-5">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-12 col-md-8">
                                <h3 className="card-title">
                                    Current Offers Posted
                                </h3>
                                <ul>
                                    <li>Janet is making COVID-19 face masks</li>
                                    <li>
                                        Janelle can run to the grocery store
                                    </li>
                                    <li>
                                        Don has extra white paint left over from
                                        a project
                                    </li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-4 d-flex" id="hpbutton">
                                <button className="btn btn-secondary ml-auto">
                                    I Need Help
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage
