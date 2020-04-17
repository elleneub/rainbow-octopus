import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import {
    faTwitter,
    faFacebook,
    faCcPaypal,
    faCcStripe,
} from '@fortawesome/free-brands-svg-icons'
// import PostCard from './PostCard'

class ProfileCard extends React.Component {
    paymentIcons = {
        PayPay: faCcPaypal,
        Stripe: faCcStripe,
        Cash: faMoneyBillWave,
    }

    render() {
        const socialSection = []
        socialSection.push(
            this.props.userData.facebook_handle ? (
                <a
                    // eslint-disable-next-line
                    target="_blank"
                    rel="noopener noreferrer"
                    href={this.props.userData.facebook_handle}
                >
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className="social-icons"
                    />
                </a>
            ) : null
        )

        socialSection.push(
            this.props.userData.twitter_handle ? (
                <a
                    // eslint-disable-next-line
                    target="_blank"
                    rel="noopener noreferrer"
                    href={this.props.userData.twitter_handle}
                >
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className="social-icons"
                    />
                </a>
            ) : null
        )

        const paymentSection = this.props.userData.payment_option.map(
            (paymentType) => {
                return (
                    <li>
                        <FontAwesomeIcon
                            icon={this.paymentIcons[paymentType]}
                            className="mx-2"
                        />
                        {paymentType}
                    </li>
                )
            }
        )

        return (
            <div className="row card-container profile-card-container m-0">
                <div className="col">
                    <img
                        className="round"
                        src={this.props.userData.image}
                        alt="user"
                    />
                    <div className="buttons my-3">
                        <button className="send-msg btn">
                            Send {this.props.userData.first_name} a Message
                        </button>
                    </div>
                    <div className="col-6">
                        <h4 className="my-3">
                            {this.props.userData.first_name +
                                ' ' +
                                this.props.userData.last_name}
                        </h4>
                        <h6 className="my-3">
                            {this.props.userData.addresses[0]}
                        </h6>
                        <div className="social-icons">{socialSection}</div>
                        <div className="payment">
                            <h6>
                                I accept:
                                <ul className="col justify-content-around mt-1">
                                    {paymentSection}
                                </ul>
                            </h6>
                        </div>
                    </div>

                    <div className="col">
                        <hr></hr>
                        <div className="skills">
                            <h5 className="text-center m-3">
                                I Can Help With:
                            </h5>
                            <ul>
                                {this.props.userData.skills.map((skill) => {
                                    return <li>{skill}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <div className="container mt-4">
                    <h6 className="mx-1 text-center">
                        Stevani's History of Requests & Offers
                    </h6>
                    <PostCard postData={{}} />
                </div> */}
            </div>
        )
    }
}

export default ProfileCard
