import React from 'react'
import PostCard from 'components/PostCard'

class OfferHelpPage extends React.Component {
    render() {
        return (
            <>
                <div>
                    <h1 className="page-title">Offer Help</h1>
                </div>
                <div>
                    <div className="row d-flex justify-content-center mt-5">
                        <h5 className="text-center">
                            Opportunities to help your neighbors in (Minneapolis, MN)
                        </h5>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-start ml-4">
                            <h6 className="justify-content-start bg-secondary">
                                Sort/Filter
                            </h6>
                        </div>
                        
                        <div className="col d-flex justify-content-end mr-4">
                            <button className="btn btn-secondary px-3 shadow">
                                Secondary Button
                            </button>
                        </div>
                    </div>

                    <div className="col d-flex justify-content-center"></div>

                    <PostCard />
                    <PostCard />
                </div>
            </>
        )
    }
}

export default OfferHelpPage
