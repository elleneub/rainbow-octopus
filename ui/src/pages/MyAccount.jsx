import React from 'react'
import ProfileCard from 'components/ProfileCard'

class MyAccountPage extends React.Component {
    render() {
        return (
            <div>
                <h1 className="page-title">My Account Page</h1>
                <ProfileCard userData={this.props.userData} />
            </div>
        )
    }
}

export default MyAccountPage
