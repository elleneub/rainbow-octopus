import React from 'react'

class PostCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        const postData = this.props.postData
        return (
            <div className="card post-card bg-light shadow-sm m-3 border-primary">
                <div className="card-body text-inline">
                    <h5 className="card-title font-weight-bold text-left">
                        {postData.title}
                    </h5>
                    <p className="card-subtitle mb-2 text-muted text-left">
                        {postData.location}
                    </p>

                    <div className="row">
                        <div className="col-7 text-left">
                            <p className="card-text">{postData.notes}</p>
                        </div>
                        <div className="col-5 d-flex text-justify align-item-center">
                            <button
                                className="btn-primary btn d-flex align-self-end text-right"
                                onClick={() =>
                                    this.props.detailsHandler(
                                        this.props.postData
                                    )
                                }
                            >
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard
