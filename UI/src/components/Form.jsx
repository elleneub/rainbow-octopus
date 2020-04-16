import React from 'react'
import FormCategories from './FormCategories'
import FormPayments from './FormPayments'

import FormFrequency from './FormFrequency'

class Form extends React.Component {
    render() {
        return (
            <div className="container form bg-light">
                <div className="form-group">
                    <h5>Post a Request for Help</h5>
                    <label htmlFor="title-input">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title-input"
                        aria-describedby="TitleHelp"
                        placeholder="Enter Title"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="location">Zip Code</label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        placeholder="Zip Code"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="What is your request?"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="notes">Notes</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="notes"
                        placeholder="Are there specific details your helper should know?"
                    />
                </div>

                <FormCategories />

                <FormFrequency />

                <FormPayments />

                <div className="button-form mt-4">
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

export default Form
