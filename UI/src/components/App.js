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

                    <h2>Donate Icons</h2>
                    <FontAwesomeIcon icon={faDonate} />
                    <FontAwesomeIcon icon={faHandHoldingHeart} />
                    <FontAwesomeIcon icon={faHandHoldingUsd} />

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
