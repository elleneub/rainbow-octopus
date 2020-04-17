import React from 'react'
import PostCardSection from './PostCardSection'
import axios from 'axios'

class AccountHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userOffers: {},
            userOffersAreLoading: true,
            userRequests: {},
            userRequestsAreLoading: true,
        }
        this.componentDidMount = this.componentDidMount.bind(this)
    }

    componentDidMount() {
        const userId = this.props.userId
        axios
            .get(
                `https://fulfill-a-need.herokuapp.com/api/user-offers/${userId}`
            )
            .then((res) => {
                console.log('user-offers', res.data)
                if (res.data.length) {
                    const post = res.data[0]
                    post.title = 'Doing a thing'
                    post.location = '55418'
                }
                this.setState({
                    userOffers: res.data,
                    userOffersAreLoading: false,
                })
            })
            .catch((e) => {
                console.log('user-offers error', e)
            })

        axios
            .get(
                `https://fulfill-a-need.herokuapp.com/api/user-requests/${userId}`
            )
            .then((res) => {
                console.log('user-requests response', res.data)
                if (res.data.length) {
                    const post = res.data[0]
                    post.title = 'Doing a thing'
                    post.location = '55418'
                }

                this.setState({
                    userRequests: res.data,
                    userRequestsAreLoading: false,
                })
            })
            .catch((e) => {
                console.log('user-requests error', e)
            })
    }

    render() {
        return (
            <div className="m-3">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">User Request History</h1>
                        {this.state.userRequestsAreLoading ||
                        this.state.userOffersAreLoading ? (
                            <div className="d-flex justify-content-center spinner">
                                <div className="spinner-border" role="status">
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div>
                        ) : (
                            <PostCardSection
                                posts={[
                                    ...this.state.userRequests,
                                    ...this.state.userOffers,
                                ]}
                            />
                        )}
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountHistory
