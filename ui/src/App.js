import React from 'react'
import DemoPage from './pages/Demo.jsx'
import HomePage from './pages/Home.jsx'
import { Route, Switch } from 'react-router-dom'
import MyAccountPage from './pages/MyAccount.jsx'
import FindHelpPage from './pages/FindHelp.jsx'
import OfferHelpPage from './pages/OfferHelp.jsx'
import MessagesPage from './pages/Messages.jsx'
import CommunityGuidelinesPage from './pages/CommunityGuidelines.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from 'components/Footer'
import axios from 'axios'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: {},
            isLoading: true,
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        axios
            .get(`https://fulfill-a-need.herokuapp.com/api/user/2`)
            .then((res) => {
                console.log('response', res.data)
                // Fake out a bunch of data that's not yet in the API
                const randomNum = Math.floor(Math.random() * 99) + 1
                res.data.image = `https://randomuser.me/api/portraits/women/${randomNum}.jpg`
                res.data.payment_option = ['PayPay', 'Cash']
                res.data.skills = [
                    'Errands',
                    'Transportation',
                    'Light housework',
                    'Light yardwork',
                    'Heavy housework',
                    'Heavy yardwork',
                ]
                res.data.facebook_handle = 'https://www.facebook.com/elleneub'
                res.data.twitter_handle = 'https://twitter.com/e_neub'

                this.setState({
                    userData: res.data,
                    isLoading: false,
                })
            })
            .catch((e) => {
                console.log('error', e)
            })
    }

    render() {
        const mainPage = this.state.isLoading ? (
            <div className="d-flex justify-content-center spinner">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        ) : (
            <Switch>
                <Route exact path="/offerHelp" component={OfferHelpPage} />
                <Route exact path="/findHelp" component={FindHelpPage} />
                <Route exact path="/messages" component={MessagesPage} />
                <Route
                    exact
                    path="/account"
                    render={() => {
                        return <MyAccountPage userData={this.state.userData} />
                    }}
                />
                <Route
                    exact
                    path="/guidelines"
                    component={CommunityGuidelinesPage}
                />
                <Route exact path="/demo" component={DemoPage} />
                <Route exact path="/home" component={HomePage} />
                <Route exact path="" component={DemoPage} />
            </Switch>
        )

        return (
            <div>
                <Navbar />
                {mainPage}
                <Footer />
            </div>
        )
    }
}

export default App
