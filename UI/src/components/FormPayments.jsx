import React from 'react';
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

class FormPayments extends React.Component {

    render() {
        return (
            <div className="form-group mt-4">
                <label for="preferred-payment">
                    What forms of payment can you accept/offer?<br></br>
                    <em>
                         ‣ Exchange of money may be required, e.g. grocery shopping.
                    </em>
                    
                </label>
                <div className="preferred-payment my-2">
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
                            <FontAwesomeIcon icon={faPaypal} className="mr-1" />
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
        )
    }
}

export default FormPayments;