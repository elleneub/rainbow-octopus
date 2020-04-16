import React from 'react'
import FormPayments from 'components/FormPayments'

class FormCreateUser extends React.Component {
    render() {
        return (
            <div className="container form bg-light">
                <h5>Create Your Profile</h5>
                <div className="form-group">
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
                    <label for="pronouns-input">Pronouns</label>
                    <input
                        type="text"
                        className="form-control"
                        id="pronouns-input"
                        aria-describedby="PronounHelp"
                        placeholder="she/her, he/him, they them, zie/zir, etc."
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
                <FormPayments />
            </div>
        )
    }
}

export default FormCreateUser
