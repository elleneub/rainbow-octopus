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
        const data = this.props.userData
        const socialSection = []
        socialSection.push(
            data.facebook_handle ? (
                <a
                    // eslint-disable-next-line
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.facebook_handle}
                    key="facebook"
                >
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className="social-icons"
                    />
                </a>
            ) : null
        )

        socialSection.push(
            data.twitter_handle ? (
                <a
                    // eslint-disable-next-line
                    target="_blank"
                    rel="noopener noreferrer"
                    href={data.twitter_handle}
                    key="twitter"
                >
                    <FontAwesomeIcon
                        icon={faTwitter}
                        className="social-icons"
                    />
                </a>
            ) : null
        )

        const paymentSection = data.payment_option.map((paymentType) => {
            return (
                <li key={paymentType}>
                    <FontAwesomeIcon
                        icon={this.paymentIcons[paymentType]}
                        className="mx-2"
                    />
                    {paymentType}
                </li>
            )
        })

        return (
            <div className="row profile-card-container mx-auto">
                <div className="col">
                    <img className="round" src={data.image} alt="user" />
                    <div className="buttons my-3">
                        <button className="send-msg btn">
                            Send {data.first_name} a Message
                        </button>
                    </div>
                    <div className="col-6">
                        <h4>
                            {data.first_name + ' ' + data.last_name}
                        </h4>
                        <h6 className="my-3">
                            {data.addresses[0].city +
                                ', ' +
                                data.addresses[0].state}
                        </h6>
                        <div className="social-icons">{socialSection}</div>
                        <div className="payment mb-3">
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
                                {data.skills.map((skill) => {
                                    return <li key={skill}>{skill}</li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCard
