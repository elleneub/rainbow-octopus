import React from 'react'
import PostCard from 'components/PostCard'
import FormCreateUser from 'components/FormCreateUser'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class OfferHelpPage extends React.Component {
    constructor() {
        super()
        this.state = {
            show: false,
        }
    }

    render() {
        return (
            <>
                <div>
                    <h1 className="page-title">Offer Help</h1>
                </div>
                <div>
                    <div className="row d-flex justify-content-center mt-5">
                        <h5 className="text-center mb-5">
                            Neighbors requesting help in (Minneapolis, MN)
                        </h5>
                    </div>
                    <div className="row">
                        <div className="col d-flex justify-content-start ml-4">
                            <h6 className="justify-content-start bg-secondary">
                                Sort/Filter
                            </h6>
                        </div>

                        <div className="col d-flex justify-content-end mr-4">
                            <button
                                className="btn btn-secondary px-3 shadow"
                                onClick={() => this.setState({ show: true })}
                            >
                                Post a Request
                            </button>
                        </div>
                    </div>
                    <PostCard />
                    <PostCard />
                    <div className="row d-flex justify-content-center text-center mb-5">
                        <a href="/"><h5>Load More</h5></a>
                    </div>
                </div>

                <Modal
                    show={this.state.show}
                    onClick={() => this.setState({ show: false })}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Create Your Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormCreateUser />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="outline-secondary"
                            onClick={() => this.setState({ show: false })}
                        >
                            Close
                        </Button>
                        <Button
                            variant="primary"
                            // onClick={this.handleClose()}
                        >
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default OfferHelpPage
