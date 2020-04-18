import React from 'react'
import image1 from 'images/user1.png';
import image2 from 'images/user2.png';
import image3 from 'images/user3.png'

class MessagesPage extends React.Component {
    render() {
        return (
            <div>
                <h1 className="page-title">Messages</h1>

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="search-bar mx-5">
                        <h6>Search</h6>
                    </div>
                    </div>
                    
                    <div className="media py-2 my-2">
                        <img
                            src={image1}
                            className="align-self-center mr-3 ml-2"
                            
                        />
                        <div className="media-body">
                            <h5 className="mt-0">Victoria Georges</h5>
                            <p className="mb-0">
                                Aye list pirate parrel hardtack rigging barque
                                belay barkadeer bucko. Doubloon shrouds weigh
                                anchor...
                            </p>
                        </div>
                    </div>
                    <div className="media media-color py-2 my-2">
                        <img
                            src={image2}
                            className="align-self-center mr-3 ml-2"
                            alt="..."
                        />
                        <div className="media-body">
                            <h5 className="mt-0">Mohammad Saladin</h5>
                            <p className="mb-0">
                                Lookout grog weigh anchor crack Jennys tea cup
                                strike colors knave hardtack matey carouser...
                            </p>
                        </div>
                    </div>
                    <div className="media py-2 my-2">
                        <img
                            src={image3}
                            className="align-self-center mr-3 ml-2"
                            alt="..."
                        />
                        <div className="media-body">
                            <h5 className="mt-0">Laia Caldera</h5>
                            <p className="mb-0">
                                Hogshead belaying pin crack Jennys tea cup
                                piracy Nelsons folly jib wench log chase gun...
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MessagesPage
