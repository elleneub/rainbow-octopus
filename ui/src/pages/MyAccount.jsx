import React from 'react'
import ProfileCard from 'components/ProfileCard'
import AccountHistory from 'components/AccountHistory'

class MyAccountPage extends React.Component {
    render() {
        return (
            <div>
                <h1>My Account Page</h1>
                <ProfileCard userData={this.props.userData} />
                <AccountHistory userId={this.props.userId} />
            </div>
        )
    }
}

export default MyAccountPage
