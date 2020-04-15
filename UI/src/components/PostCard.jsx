import React from 'react'

class PostCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="card bg-light border-light shadow-sm d-flex justify-content-start">
                <div className="card-body">
                    <h6 className="card-title font-weight-bold">
                        Need groceries pick-up
                    </h6>
                    <p className="card-subtitle mb-2 text-muted">
                        NE Minneapolis
                    </p>
                    <p className="card-text">
                        I need someone to pick up my groceries because I live
                        alone and have a compromised immune system.
                    </p>
                    <button className="btn-primary btn">
                        <a href="/" className="card-link">
                            Learn More
                        </a>
                    </button>
                </div>
            </div>
        )
    }
}

export default PostCard
