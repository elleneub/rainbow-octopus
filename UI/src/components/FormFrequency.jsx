import React from 'react'

class FormFrequency extends React.Component {
    render() {
        return (
            <div className="form-group">
                <div className="mt-4">
                    <label htmlFor="custom-radio">
                        How often do you need help?
                    </label>
                </div>
                <div>
                    <div className="custom-control custom-radio custom-control-inline ml-3">
                        <input
                            type="radio"
                            id="customRadioInline1"
                            name="customRadioInline1"
                            className="custom-control-input"
                        />
                        <label
                            className="custom-control-label"
                            htmlFor="customRadioInline1"
                        >
                            One time
                        </label>
                    </div>
                    <div className="custom-control custom-radio custom-control-inline ml-3 mb-2">
                        <input
                            type="radio"
                            id="customRadioInline2"
                            name="customRadioInline1"
                            className="custom-control-input"
                        />
                        <label
                            className="custom-control-label"
                            htmlFor="customRadioInline2"
                        >
                            Recurring
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default FormFrequency
