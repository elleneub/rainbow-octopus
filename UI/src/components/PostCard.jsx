import React from 'react'
import { Link } from 'react-router-dom'

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
                            {/* { 
                                The Learn More button should open a modal with the post details
                                In that modal should be the link the user account
                            
                            } */}
                            {/* <button className="btn-primary btn btn-sm d-flex align-self-end">
                                Learn More
                            </button> */}
                            <button className="btn-primary btn btn-sm d-flex align-self-end">
                                <Link
                                    to={`/account/${
                                        postData.requester_user_id ||
                                        postData.offerer_uid
                                    }`}
                                    className="nav-link"
                                >
                                    Poster Account
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PostCard
