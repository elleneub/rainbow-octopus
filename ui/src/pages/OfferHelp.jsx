import React from 'react'
import PostCardSection from 'components/PostCardSection'

class OfferHelpPage extends React.Component {
    render() {
        const posts = [
            {
                id: '0',
                title: 'Need groceries pick-up',
                location: 'NE Minneapolis',
                categories: ['Light Yard Work'],
                requester_user_id: 4,
                notes:
                    'I need someone to pick up my groceries because I live alone and have a compromised immune system.',
            },
            {
                id: '1',
                title: 'Need Help Picking Up Heavy Thing',
                location: 'Cedar/Riverside',
                categories: ['Heavy Yard Work'],
                requester_user_id: 2,
                notes: 'I need someone to pick up my heavy thing.',
            },
            {
                id: '2',
                title: 'Need mask',
                location: 'South Minneapolis',
                categories: ['Light Yard Work'],
                requester_user_id: 4,
                notes:
                    "I need a mask because I'm elderly and still need to do my own shopping.",
            },
        ]

        return (
            <>
            <h1 className="page-title">Offer to Help</h1>
            <div className="m-3">
                <div className="card">
                    <div className="card-body">
                        <PostCardSection posts={posts} />
                    </div>
                </div>
                </div>
            </>
        )
    }
}

export default OfferHelpPage
