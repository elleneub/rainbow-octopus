import React from 'react'


class PostDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="card bg-light border-light shadow-sm post-card">
                <div className="card-body">
                    <h5 className="card-title font-weight-bold text-left">
                        Need groceries pick-up
                    </h5>
                    <p className="card-subtitle mb-2 text-muted text-left">
                        NE Minneapolis
                    </p>

                    <div className="row">
                        <div className="col text-left">
                            <p className="card-text">
                                I need someone to pick up my groceries because I
                                live alone and have a compromised immune system.
                            </p>
                        </div>
                        <div class="col d-flex text-justify align-item-center">
                            <button className="btn-primary btn btn-sm d-flex align-self-end">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostDetails;