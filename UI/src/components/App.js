import React from 'react'
import '../App.scss'
import ButtonPrimary from './ButtonPrimary'
import ButtonSecondary from './ButtonSecondary'
import Navbar from './Navbar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faInstagram,
    faFacebook,
    faGithub,
    faPaypal,
    faCcAmazonPay,
    faCcApplePay,
    faCcPaypal,
    faCcStripe,
    faCcMastercard,
    faCcAmex,
    faCcVisa,
    faAmazonPay,
    faStripe,
    faStripeS,
} from '@fortawesome/free-brands-svg-icons'
import {
    faBars,
    faUser,
    faUsers,
    faUserAstronaut,
    faPeopleCarry,
    faUserSecret,
    faEdit,
    faUserEdit,
    faDonate,
    faHandHoldingHeart,
    faHandHoldingUsd,
    faMoneyBill,
    faMoneyBillWave,
    faMoneyBillAlt,
    faMoneyBillWaveAlt,
    faCoins,
    faHandshake,
} from '@fortawesome/free-solid-svg-icons'

class App extends React.Component {
    render() {
        return (
            <>
                <div className="App">
                    <Navbar />
                    <h1>Helper App</h1>
                    <ButtonPrimary />
                    <ButtonSecondary />

                    <h2>General Icons</h2>
                    <FontAwesomeIcon icon={faEdit} />
                    <FontAwesomeIcon icon={faBars} />

                    <h2>User Icons</h2>
                    <FontAwesomeIcon icon={faUserAstronaut} />
                    <FontAwesomeIcon icon={faUser} />
                    <FontAwesomeIcon icon={faUserEdit} />
                    <FontAwesomeIcon icon={faUserSecret} />

                    <h2>Donate and Payment Icons</h2>
                    <FontAwesomeIcon icon={faDonate} />
                    <FontAwesomeIcon icon={faHandHoldingHeart} />
                    <FontAwesomeIcon icon={faHandHoldingUsd} />
                    <FontAwesomeIcon icon={faPaypal} />
                    <FontAwesomeIcon icon={faCcAmazonPay} />
                    <FontAwesomeIcon icon={faCcApplePay} />
                    <FontAwesomeIcon icon={faCcPaypal} />
                    <FontAwesomeIcon icon={faCcStripe} />
                    <FontAwesomeIcon icon={faCcMastercard} />
                    <FontAwesomeIcon icon={faCcAmex} />
                    <FontAwesomeIcon icon={faCcVisa} />
                    <FontAwesomeIcon icon={faAmazonPay} />
                    <FontAwesomeIcon icon={faStripe} />
                    <FontAwesomeIcon icon={faStripeS} />
                    <FontAwesomeIcon icon={faMoneyBill} />
                    <FontAwesomeIcon icon={faMoneyBillWave} />
                    <FontAwesomeIcon icon={faMoneyBillAlt} />
                    <FontAwesomeIcon icon={faMoneyBillWaveAlt} />
                    <FontAwesomeIcon icon={faCoins} />
                    <FontAwesomeIcon icon={faHandshake} />
            
                    <h2>Volunteer Icons</h2>
                    <FontAwesomeIcon icon={faUsers} />
                    <FontAwesomeIcon icon={faPeopleCarry} />

                    <h2>Social Media Icons</h2>
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faInstagram} />
                    <FontAwesomeIcon icon={faFacebook} />
                    <FontAwesomeIcon icon={faGithub} />
                </div>
            </>
        )
    }
}

export default App
