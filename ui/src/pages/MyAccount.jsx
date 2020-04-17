import React from 'react'
import ProfileCard from 'components/ProfileCard'

class MyAccountPage extends React.Component {
    render() {
        return (
            <div>
                <h1 className="page-title">My Account Page</h1>
                <div className="text-center">
                    <ProfileCard userData={this.props.userData} />
                </div>
                <div className="history">
                    <h6 className="mx-1 text-center text-serif">
                    Stevani's History of Requests & Offers
                </h6>
                </div>
                
            </div>
        )
    }
}

export default MyAccountPage
