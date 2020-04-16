import React from 'react'

class FormCreateUser extends React.Component {
    render() {
        return (
            <div className="container form bg-light">
                <div className="form-group">
                    <h5>Create Your Profile</h5>
                    <label for="name-input">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="name-input"
                        aria-describedby="TitleHelp"
                        placeholder="Name"
                    />
                </div>
                <div className="form-group">
                    <label for="location">Zip Code</label>
                    <input
                        type="text"
                        className="form-control"
                        id="location"
                        placeholder="Zip Code"
                    />
                </div>
                <div className="form-group">
                    <label for="description">Description</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="description"
                        placeholder="What is your request?"
                    />
                </div>
                <div className="form-group">
                    <label for="notes">Notes</label>
                    <textarea
                        type="text"
                        className="form-control"
                        id="notes"
                        placeholder="Are there specific details your helper should know?"
                    />
                </div>
            </div>
        )
    }
}

export default FormCreateUser
