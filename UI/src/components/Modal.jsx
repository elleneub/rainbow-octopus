import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

class ModalComp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: false,
        }
    }

    showModal() {
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
                        <Modal.Title>Title</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>(Insert Form or text here)</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button
                            variant="outline-secondary"
                            onClick={() => this.setState({ show: false })}
                        >
                            Close
                        </Button>
                        <Button
                            variant="secondary"
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

export default ModalComp
