import React from 'react'

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
                            src="..."
                            className="align-self-center mr-3"
                            
                        />
                        <div className="media-body">
                            <h5 className="mt-0">Neighbor</h5>
                            <p className="mb-0">
                                Aye list pirate parrel hardtack rigging barque
                                belay barkadeer bucko. Doubloon shrouds weigh
                                anchor...
                            </p>
                        </div>
                    </div>
                    <div className="media media-color py-2 my-2">
                        <img
                            src="..."
                            className="align-self-center mr-3"
                            alt="..."
                        />
                        <div className="media-body">
                            <h5 className="mt-0">Neighbor</h5>
                            <p className="mb-0">
                                Lookout grog weigh anchor crack Jennys tea cup
                                strike colors knave hardtack matey carouser...
                            </p>
                        </div>
                    </div>
                    <div className="media py-2 my-2">
                        <img
                            src="..."
                            className="align-self-center mr-3"
                            alt="..."
                        />
                        <div className="media-body">
                            <h5 className="mt-0">Neighbor</h5>
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
