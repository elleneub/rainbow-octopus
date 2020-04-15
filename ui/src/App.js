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

class App extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                <Switch>
                    <Route exact path="/offerHelp" component={OfferHelpPage} />
                    <Route exact path="/findHelp" component={FindHelpPage} />
                    <Route exact path="/messages" component={MessagesPage} />
                    <Route exact path="/account" component={MyAccountPage} />
                    <Route
                        exact
                        path="/guidelines"
                        component={CommunityGuidelinesPage}
                    />
                    <Route exact path="/demo" component={DemoPage} />
                    <Route exact path="/home" component={HomePage} />
                    <Route exact path="" component={DemoPage} />
                </Switch>
            </div>
        )
    }
}

export default App
