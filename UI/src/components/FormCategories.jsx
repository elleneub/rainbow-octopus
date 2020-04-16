import React from 'react';

class FormCategories extends React.Component {

    render() {
        return (
            <div className="form-group">
                <label for="dropdown">
                    What type of services are you requesting?
                </label>
                <div class="dropdown">
                    <button
                        class="btn-sm btn btn-outline-primary dropdown-toggle text-dark"
                        type="button"
                        id="dropdown"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Services
                    </button>
                    <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <button class="dropdown-item" href="#">
                            Errands
                        </button>
                        <button class="dropdown-item" href="#">
                            Transportation
                        </button>
                        <button class="dropdown-item" href="#">
                            Light Housework
                        </button>
                        <button class="dropdown-item" href="#">
                            Heavy Housework
                        </button>
                        <button class="dropdown-item" href="#">
                            Light Yardwork
                        </button>
                        <button class="dropdown-item" href="#">
                            Heavy Yardwork
                        </button>
                        <button class="dropdown-item" href="#">
                            Other
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormCategories;