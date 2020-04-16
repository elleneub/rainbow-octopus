import React from 'react'

class PostDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Josh Burnside',
            title: 'Need groceries to be picked up',
            location: 'NE Minneapolis',
            description:
                'I need someone to pick up my groceries because I live alone and have a compromised immune system. I live in an apartment in NE Minneapolis so I will need to meet you at the front door to the building.',
            notes:
                'I am available in the mornings from 9-10am or evenings from 5-7pm.',
            expiration: 'Monday May 4, 2020',
            recurring: false,
        }
    }
    render() {
        return (
            <div className="card post-details bg-light shadow-sm m-3 border-primary">
                <div className="card-body text-inline">
                    <h5 className="card-title font-weight-bold text-center">
                        Request Details
                    </h5>
                    <h6 className="card-title font-weight-bold text-left">
                        Person requesting help: {this.state.name}
                    </h6>
                    <h6 className="card-title font-weight-bold text-left">
                        (Request) {this.state.title}
                    </h6>
                    <p className="card-subtitle mb-2 text-muted text-left">
                        Location: {this.state.location}
                    </p>
                    <p className="card-text text-left">
                        {this.state.description}
                    </p>
                    <p className="card-text text-left">
                        <strong>Notes: </strong>
                        {this.state.notes}
                    </p>
                    <p className="card-text text-left">
                        <strong>Expiration Date: </strong>
                        {this.state.expiration}
                    </p>
                    <p className="card-text text-left">
                        <strong>Recurring? </strong>
                        {this.state.recurring}
                    </p>
                    <div className="row px-3">
                        <button className="btn-primary btn btn-sm d-flex align-self-end mr-2">
                            Contact {this.state.name}
                        </button>
                        <button className="btn-outline-primary btn btn-sm d-flex align-self-end mt-2">
                            Back to List
                        </button>
                        {/* <a href="/" className="mt-5">Back to List</a> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default PostDetails
