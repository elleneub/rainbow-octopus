import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <div className="container form bg-light">
                <div className="form-group">
                    <h5>Post a Request for Help</h5>
                    <label for="title-input">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title-input"
                        aria-describedby="TitleHelp"
                        placeholder="Enter Title"
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
                            <a class="dropdown-item" href="#">
                                Errands
                            </a>
                            <a class="dropdown-item" href="#">
                                Transportation
                            </a>
                            <a class="dropdown-item" href="#">
                                Light Housework
                            </a>
                            <a class="dropdown-item" href="#">
                                Heavy Housework
                            </a>
                            <a class="dropdown-item" href="#">
                                Light Yardwork
                            </a>
                            <a class="dropdown-item" href="#">
                                Heavy Yardwork
                            </a>
                            <a class="dropdown-item" href="#">
                                Other
                            </a>
                        </div>
                    </div>
                    <div className="button-form">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Form
