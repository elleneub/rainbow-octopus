import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDonate } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'

class ProfileCard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div className="row card-container m-0">
                <div className="col">
                    <img
                        className="round"
                        src="https://randomuser.me/api/portraits/women/79.jpg"
                        alt="user"
                    />
                    <div className="buttons my-3">
                        <button className="send-msg btn">
                            Send Jane a Message
                        </button>
                    </div>
                </div>
                <div className="col-6">
                    <h4 className="my-3">Jane Burnside</h4>
                    <h6 className="my-3">Minneapolis, MN</h6>
                    <div className="social-icons">
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="social-icons"
                        />
                        <FontAwesomeIcon
                            icon={faTwitter}
                            className="social-icons"
                        />
                    </div>
                    <div className="payment">
                        <h6>
                            I accept:
                            <ul className="col justify-content-around mt-1">
                                <FontAwesomeIcon
                                    icon={faDonate}
                                    className="mx-2"
                                />
                                <FontAwesomeIcon
                                    icon={faDonate}
                                    className="mx-2"
                                />
                                <FontAwesomeIcon
                                    icon={faDonate}
                                    className="mx-2"
                                />
                            </ul>
                        </h6>
                    </div>
                </div>

                <div className="col">
                    <hr></hr>
                    <div className="skills">
                        <h5 className="text-center m-3">
                            Skills & Services I Offer
                        </h5>
                        <ul>
                            <li>sewing</li>
                            <li>groceries</li>
                            <li>cooking</li>
                            <li>driving</li>
                            <li>yard work</li>
                            <li>housework</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard
