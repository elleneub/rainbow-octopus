import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons'
import {
    faTwitter,
    faFacebook,
    faCcPaypal,
    faCcStripe,
} from '@fortawesome/free-brands-svg-icons'

class ProfileCard extends React.Component {
    socialIcons = {
        twitter: faTwitter,
        facebook: faFacebook,
    }

    paymentIcons = {
        PayPay: faCcPaypal,
        Stripe: faCcStripe,
        Cash: faMoneyBillWave,
    }

    render() {
        const socialSection = Object.keys(this.props.userData.social).map(
            (socialType) => {
                return (
                    <a
                        // eslint-disable-next-line
                        target="_blank"
                        href={this.props.userData.social[socialType]}
                    >
                        <FontAwesomeIcon
                            icon={this.socialIcons[socialType]}
                            className="social-icons"
                        />
                    </a>
                )
            }
        )

        const paymentSection = this.props.userData.paymentMethods.map(
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
            <div className="row card-container m-0">
                <div className="col">
                    <img
                        className="round"
                        src={this.props.userData.image}
                        alt="user"
                    />
                    <div className="buttons my-3">
                        <button className="send-msg btn">
                            Send {this.props.userData.firstName} a Message
                        </button>
                    </div>
                </div>
                <div className="col-6">
                    <h4 className="my-3">
                        {this.props.userData.firstName +
                            ' ' +
                            this.props.userData.lastName}
                    </h4>
                    <h6 className="my-3">{this.props.userData.location}</h6>
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
                        <h5 className="text-center m-3">I Can Help With:</h5>
                        <ul>
                            {this.props.userData.skills.map((skill) => {
                                return <li>{skill}</li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard
