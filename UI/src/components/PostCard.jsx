import React from 'react'

class PostCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    // Should implement text character limitation to standardize cards

    render() {
        return (
            <div className="card-deck mx-2 d-flex justify-content-center flex-wrap">
                <div className="card post-card bg-light shadow-sm m-3 border-primary">
                    <div className="card-body text-inline">
                        <h5 className="card-title font-weight-bold text-left">
                            Groceries pick-up
                        </h5>
                        <p className="card-subtitle mb-2 text-muted text-left">
                            Minneapolis, MN
                        </p>

                        <div className="row">
                            <div className="col-7 text-left">
                                <p className="card-text">
                                    I work in a hospital and need to quarantine
                                    myself as much as possible between shifts. I
                                    need someone to help with grocery shopping
                                    and delivery.
                                </p>
                            </div>
                            <div className="col d-flex text-justify align-item-center">
                                <button className="btn-primary btn d-flex align-self-end">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card post-card bg-light shadow-sm m-3 border-primary">
                    <div className="card-body text-inline">
                        <h5 className="card-title font-weight-bold text-left">
                            I need a ride to the pharmacy
                        </h5>
                        <p className="card-subtitle mb-2 text-muted text-left">
                            St. Louis Park, MN
                        </p>

                        <div className="row">
                            <div className="col-7 text-left">
                                <p className="card-text">
                                    I usually take the bus, but I'd like to find
                                    a ride so I don't have to expose myself to
                                    multiple people.
                                </p>
                            </div>
                            <div className="col d-flex text-justify align-item-center">
                                <button className="btn-primary btn d-flex align-self-end">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card post-card bg-light shadow-sm m-3 border-primary">
                    <div className="card-body text-inline">
                        <h5 className="card-title font-weight-bold text-left">
                            Walk my dog
                        </h5>
                        <p className="card-subtitle mb-2 text-muted text-left">
                            Mendota Heights, MN
                        </p>

                        <div className="row">
                            <div className="col-7 text-left">
                                <p className="card-text">
                                    I live alone and am not feeling well, so
                                    it'd be great to find a volunteer to walk my
                                    dog twice a day.
                                </p>
                            </div>
                            <div className="col d-flex text-justify align-item-center">
                                <button className="btn-primary btn d-flex align-self-end">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard
