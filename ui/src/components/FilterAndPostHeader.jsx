import * as React from 'react'

class FilterAndPostHeader extends React.Component {
    render() {
        return (
            <div className="row">
                <h5 className="col-sm-2 my-2">Filter by:</h5>
                <div className="col-sm-2 my-2">
                    {/* Replace with the actual category select */}
                    <select
                        className="custom-select mr-2"
                        onChange={this.props.changeFilterCategoryHandler}
                    >
                        <option default value="">
                            Category
                        </option>
                        <option value="Light Yard Work">Light Yard Work</option>
                        <option value="Heavy Yard Work">Heavy Yard Work</option>
                        <option value="Sewing">Sewing</option>
                    </select>
                </div>
                <div className="col-sm-2 my-2">
                    <select
                        className="custom-select mr-2"
                        onChange={this.props.changeLocationHandler}
                    >
                        <option default value="">
                            Location
                        </option>
                        <option value="Minneapolis">Minneapolis</option>
                        <option value="Saint Paul">Saint Paul</option>
                        <option value="Madison">Madison</option>
                    </select>
                </div>
                <div className="col-sm-6 my-2 d-flex">
                    <button
                        className="ml-sm-auto btn-secondary btn btn-sm"
                        onClick={this.props.postHandler}
                    >
                        Post New Offer/Request
                    </button>
                </div>
            </div>
        )
    }
}

export default FilterAndPostHeader
