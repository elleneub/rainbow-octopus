import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PostDetails from 'components/PostDetails'
import { Link } from 'react-router-dom'

class ModalDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
            postData: {},
        }
    }

    showModalDetails(postData) {
        this.setState({ show: true, postData })
    }

    render() {
        const postData = this.state.postData

        return this.state.show ? (
            <div className="row m-auto">
                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                >
                    <Modal.Header className="bg-primary" closeButton>
                        <Modal.Title>Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PostDetails postData={postData} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="outline-primary"
                            onClick={() => this.setState({ show: false })}
                        >
                            Back to List
                        </Button>
                        <button className="btn-primary btn btn-sm d-flex align-self-end">
                            <Link
                                to={`/account/${
                                    postData.requester_user_id ||
                                    postData.offerer_uid
                                }`}
                            >
                                Poster Account
                            </Link>
                        </button>
                    </Modal.Footer>
                </Modal>
            </div>
        ) : null
    }
}

export default ModalDetails
