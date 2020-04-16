import React from 'react';

class ProfileCategories extends React.Component {
    render() {
        return (
            <div className="form-group mt-4">
                <label for="categories">
                    What help can you offer (if any)?<br></br>
                </label>
                <div className="categories my-2">
                    <div className="form-check form-check-inline">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="errands"
                        />
                        <label className="form-check-label" for="errands">
                            {/* <FontAwesomeIcon
                                icon={faMoneyBillWave}
                                className="mr-1"
                            /> */}
                            Errands
                        </label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="transportation"
                        />
                        <label
                            className="form-check-label"
                            for="transportation"
                        >
                            {/* <FontAwesomeIcon
                                icon={fatransportation}
                                className="mr-1"
                            /> */}
                            Transportation
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="light-housework"
                        />
                        <label
                            className="form-check-label"
                            for="light-housework"
                        >
                            {/* <FontAwesomeIcon
                                icon={faCclight - housework}
                                className="mr-1"
                            /> */}
                            Light Housework
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="heavy-housework"
                        />
                        <label
                            className="form-check-label"
                            for="heavy-housework"
                        >
                            {/* <FontAwesomeIcon
                                icon={faHandshake}
                                className="mr-1"
                            /> */}
                            Heavy Housework
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="light-yardwork"
                        />
                        <label
                            className="form-check-label"
                            for="light-yardwork"
                        >
                            {/* <FontAwesomeIcon
                                icon={faCclight - yardwork}
                                className="mr-1"
                            /> */}
                            Light Yardwork
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="heavy-yardwork"
                        />
                        <label
                            className="form-check-label"
                            for="heavy-yardwork"
                        >
                            {/* <FontAwesomeIcon
                                icon={faheavy - yardwork}
                                className="mr-1"
                            /> */}
                            Heavy Yardwork
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="other"
                        />
                        <label
                            className="form-check-label"
                            for="other"
                        >
                            {/* <FontAwesomeIcon
                                icon={faheavy - yardwork}
                                className="mr-1"
                            /> */}
                            Other
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileCategories;