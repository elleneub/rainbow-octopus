import React from 'react'
import FormPayments from 'components/FormPayments'
import ProfileCategories from './ProfileCategories'

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
                        placeholder="she/her, he/him, they/them, zie/zir, etc."
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
                <ProfileCategories />
                <div className="form-group">
                    <label for="social">Twitter</label>
                    <input
                        type="text"
                        className="form-control"
                        id="social"
                        placeholder="Twitter Profile URL"
                    />
                </div>
                <div className="form-group">
                    <label for="social">Facebook</label>
                    <input
                        type="text"
                        className="form-control"
                        id="social"
                        placeholder="Facebook Profile URL"
                    />
                </div>
            </div>
        )
    }
}

export default FormCreateUser
