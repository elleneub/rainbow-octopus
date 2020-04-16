import React from 'react'
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
                <div className="form-group">
                    <label for="dropdown">
                        What type of services are you requesting?
                    </label>
                    <div class="dropdown">
                        <button
                            class="btn-sm btn btn-outline-primary dropdown-toggle text-dark"
                            type="button"
                            id="dropdown"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Services
                        </button>
                        <div
                            class="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                        >
                            <button class="dropdown-item" href="#">
                                Errands
                            </button>
                            <button class="dropdown-item" href="#">
                                Transportation
                            </button>
                            <button class="dropdown-item" href="#">
                                Light Housework
                            </button>
                            <button class="dropdown-item" href="#">
                                Heavy Housework
                            </button>
                            <button class="dropdown-item" href="#">
                                Light Yardwork
                            </button>
                            <button class="dropdown-item" href="#">
                                Heavy Yardwork
                            </button>
                            <button class="dropdown-item" href="#">
                                Other
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-4">
                    <label for="custom-radio">
                        How often do you need help?
                    </label>
                </div>
                <div>
                    <div className="custom-control custom-radio custom-control-inline ml-3">
                        <input
                            type="radio"
                            id="customRadioInline1"
                            name="customRadioInline1"
                            className="custom-control-input"
                        />
                        <label
                            className="custom-control-label"
                            for="customRadioInline1"
                        >
                            One time
                        </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline ml-3 mb-4">
                        <input
                            type="radio"
                            id="customRadioInline2"
                            name="customRadioInline1"
                            className="custom-control-input"
                        />
                        <label
                            className="custom-control-label"
                            for="customRadioInline2"
                        >
                            Recurring
                        </label>
                    </div>
                </div>

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

export default Form;
