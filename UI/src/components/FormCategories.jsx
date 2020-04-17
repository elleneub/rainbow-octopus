import React from 'react'

class FormCategories extends React.Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor="dropdown">
                    What type of services are you requesting?
                </label>
                <div className="dropdown">
                    <button
                        className="btn-sm btn btn-outline-secondary dropdown-toggle text-dark"
                        type="button"
                        id="dropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Services
                    </button>
                    <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <button className="dropdown-item" href="#">
                            Errands
                        </button>
                        <button className="dropdown-item" href="#">
                            Transportation
                        </button>
                        <button className="dropdown-item" href="#">
                            Light Housework
                        </button>
                        <button className="dropdown-item" href="#">
                            Heavy Housework
                        </button>
                        <button className="dropdown-item" href="#">
                            Light Yardwork
                        </button>
                        <button className="dropdown-item" href="#">
                            Heavy Yardwork
                        </button>
                        <button className="dropdown-item" href="#">
                            Other
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormCategories
