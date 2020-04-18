import React from 'react'
import image1 from 'images/user1.png'
import image2 from 'images/user2.png'
import image3 from 'images/user3.png'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

class MessagesPage extends React.Component {
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
            <>
                <div>
                    <h1 className="page-title">Messages</h1>

                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="search-bar mx-5">
                                <h6>Search</h6>
                            </div>
                        </div>

                        <div
                            className="media py-2 my-2"
                            onClick={() => this.setState({ show: true })}
                            cursor="pointer"
                        >
                            <img
                                src={image1}
                                className="align-self-center mr-3 ml-2"
                            />
                            <div className="media-body">
                                <h5 className="mt-0">Victoria Georges</h5>
                                <p className="mb-0">
                                    Aye list pirate parrel hardtack rigging
                                    barque belay barkadeer bucko. Doubloon
                                    shrouds weigh anchor...
                                </p>
                            </div>
                        </div>
                        <div
                            className="media media-color py-2 my-2"
                            onClick={() => this.setState({ show: true })}
                            cursor="pointer"
                        >
                            <img
                                src={image2}
                                className="align-self-center mr-3 ml-2"
                                alt="..."
                            />
                            <div className="media-body">
                                <h5 className="mt-0">Mohammad Saladin</h5>
                                <p className="mb-0">
                                    Lookout grog weigh anchor crack Jennys tea
                                    cup strike colors knave hardtack matey
                                    carouser...
                                </p>
                            </div>
                        </div>
                        <div
                            className="media py-2 my-2"
                            onClick={() => this.setState({ show: true })}
                            cursor="pointer"
                        >
                            <img
                                src={image3}
                                className="align-self-center mr-3 ml-2"
                            />
                            <div className="media-body">
                                <h5 className="mt-0">Laia Caldera</h5>
                                <p className="mb-0">
                                    Hogshead belaying pin crack Jennys tea cup
                                    piracy Nelsons folly jib wench log chase
                                    gun...
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row m-auto">
                    <Modal
                        show={this.state.show}
                        onHide={() => this.setState({ show: false })}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title>Chat</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div className="chat mx-2">
                                <div className="media mr-5 my-3 shadow p-2">
                                    <img className="m-3" src={image3} />
                                    <div className="media-body">
                                        <h5 className="mt-0">Your Neighbor</h5>
                                        Thanks for replying to my request! Are
                                        you available on Saturday?
                                    </div>
                                </div>

                                <div className="media bg-secondary text-white text-right ml-5 my-3 shadow p-2">
                                    <div className="media-body">
                                        <h5 className="mt-0">Me</h5>
                                        Yeah I can do Saturday!
                                    </div>
                                    <img className="m-3" src={image2} />
                                </div>
                            </div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Form.Control
                                size="sm"
                                type="text"
                                placeholder="Type a message..."
                            />{' '}
                            <Button
                                variant="outline-secondary"
                                // onClick={}
                            >
                                Send
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </>
        )
    }
}

export default MessagesPage
