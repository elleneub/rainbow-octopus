import React from 'react'

class Form extends React.Component {
    render() {
        return (
            <div className="form">
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
                    <label for="location-help">Zip Code</label>
                    <input
                        type="number"
                        className="form-control"
                        id="location-help"
                        placeholder="Zip Code"
                    />
                </div>
                <div className="form-check">
                    <input
                        type="checkbox"
                        className="form-check-input"
                        id="exampleCheck1"
                    />
                    <label className="form-check-label" for="exampleCheck1">
                        Check me out
                    </label>
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </div>
        )
    }
}

export default Form
