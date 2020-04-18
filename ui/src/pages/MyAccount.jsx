import React from 'react'
import ProfileCard from 'components/ProfileCard'
import AccountHistory from 'components/AccountHistory'
import axios from 'axios'

class MyAccountPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            overrideUserData: {},
            isLoading: true,
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        const userId = this.props.urlParam
        axios
            .get(`https://fulfill-a-need.herokuapp.com/api/user/${userId}`)
            .then((res) => {
                console.log('response', res.data)
                // Fake out a bunch of data that's not yet in the API
                const randomNum = Math.floor(Math.random() * 99) + 1
                res.data.image = `https://randomuser.me/api/portraits/women/${randomNum}.jpg`
                res.data.payment_option = ['PayPal', 'Cash']
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
                    overrideUserData: res.data,
                    isLoading: false,
                })
            })
            .catch((e) => {
                console.log('error', e)
            })
    }

    render() {
        // 3 cases
        // If no urlParam load the users account
        // if there is a urlParam for another user account and it's not loaded, show loading
        // if there is a urlParam for another user account and it's loaded, show their data
        console.log(
            'this.props.overrideUserId && this.state.isLoading',
            this.props.urlParam,
            this.state.isLoading,
            this.state.overrideUserData
        )
        return (
            <div>
                <h1 className="page-title">My Account Page</h1>
                <div className="mx-2">
                    {this.props.urlParam && this.state.isLoading ? (
                        <div className="d-flex justify-content-center spinner">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <span>
                            <ProfileCard
                                userData={
                                    this.state.overrideUserData ||
                                    this.props.userData
                                }
                            />
                            <AccountHistory
                                userId={
                                    this.props.urlParam || this.props.userId
                                }
                            />
                        </span>
                    )}
                </div>
            </div>
        )
    }
}

export default MyAccountPage
