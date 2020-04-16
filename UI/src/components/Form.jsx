import React from 'react'
import FormCategories from './FormCategories'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    // faTwitter,
    // faInstagram,
    // faFacebook,
    // faGithub,
    faPaypal,
    // faCcAmazonPay,
    faCcApplePay,
    // faCcPaypal,
    faCcStripe,
    // faCcMastercard,
    // faCcAmex,
    // faCcVisa,
    faAmazonPay,
    // faStripe,
    // faStripeS,
} from '@fortawesome/free-brands-svg-icons'
import {
    // faBars,
    // faUser,
    // faUsers,
    // faUserAstronaut,
    // faPeopleCarry,
    // faUserSecret,
    // faEdit,
    // faUserEdit,
    // faDonate,
    // faHandHoldingHeart,
    // faHandHoldingUsd,
    // faMoneyBill,
    faMoneyBillWave,
    // faMoneyBillAlt,
    // faMoneyBillWaveAlt,
    // faCoins,
    faHandshake,
} from '@fortawesome/free-solid-svg-icons'
import FormFrequency from './FormFrequency'

class Form extends React.Component {
    render() {
        return (
            <div className="container form bg-light">
                <div className="form-group">
                    <h5>Post a Request for Help</h5>
                    <label for="title-input">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title-input"
                        aria-describedby="TitleHelp"
                        placeholder="Enter Title"
                    />
                </div>
                <div className="form-group">
                    <label for="location">Zip Code</label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        placeholder="Zip Code"
                    />
                </div>
                <div className="form-group">
                    <label for="description">Description</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="What is your request?"
                    />
                </div>
                <div className="form-group">
                    <label for="notes">Notes</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="notes"
                        placeholder="Are there specific details your helper should know?"
                    />
                </div>

                <FormCategories />

                <FormFrequency />

                <div className="form-group">
                    <label for="dropdown">
                        What forms of payment can you accept?
                    </label>
                    <div className="preferred-payment">
                        <div className="form-check form-check-inline">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="cash"
                            />
                            <label className="form-check-label" for="cash">
                                <FontAwesomeIcon
                                    icon={faMoneyBillWave}
                                    className="mr-1"
                                />
                                Cash
                            </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="paypal"
                            />
                            <label className="form-check-label" for="paypal">
                                <FontAwesomeIcon
                                    icon={faPaypal}
                                    className="mr-1"
                                />
                                PayPal
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="applepay"
                            />
                            <label className="form-check-label" for="applepay">
                                <FontAwesomeIcon
                                    icon={faCcApplePay}
                                    className="mr-1"
                                />
                                Apple Pay
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="barter"
                            />
                            <label className="form-check-label" for="barter">
                                <FontAwesomeIcon
                                    icon={faHandshake}
                                    className="mr-1"
                                />
                                Barter
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="stripe"
                            />
                            <label className="form-check-label" for="stripe">
                                <FontAwesomeIcon
                                    icon={faCcStripe}
                                    className="mr-1"
                                />
                                Stripe
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="amazonpay"
                            />
                            <label className="form-check-label" for="amazonpay">
                                <FontAwesomeIcon
                                    icon={faAmazonPay}
                                    className="mr-1"
                                />
                                AmazonPay
                            </label>
                        </div>
                    </div>
                </div>

                <div className="button-form mt-4">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default Form
