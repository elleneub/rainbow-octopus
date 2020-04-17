import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import PostDetails from 'components/PostDetails'

class ModalDetails extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }

    showModalDetails() {
        this.setState({ show: true })
    }

    render() {
        return (
            <div className="row m-auto">
                <Modal
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <PostDetails />
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
                            // onClick={}
                        >
                            Submit
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default ModalDetails
