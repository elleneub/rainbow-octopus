import React from 'react'
import PostCardSection from 'components/PostCardSection'

class OfferHelpPage extends React.Component {
    render() {
        const posts = [
            {
                id: '0',
                title: 'Need groceries pick-up',
                location: 'NE Minneapolis',
                category: 'Light Yard Work',
                description:
                    'I need someone to pick up my groceries because I live alone and have a compromised immune system.',
            },
            {
                id: '1',
                title: 'Need Help Picking Up Heavy Thing',
                location: 'Cedar/Riverside',
                category: 'Heavy Yard Work',
                description: 'I need someone to pick up my heavy thing.',
            },
            {
                id: '2',
                title: 'Need mask',
                location: 'South Minneapolis',
                category: 'Light Yard Work',
                description:
                    "I need a mask because I'm elderly and still need to do my own shopping.",
            },
        ]

        return (
            <div className="m-3">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">Offer Help</h1>
                        <PostCardSection posts={posts} />
                    </div>
                </div>
            </div>
        )
    }
}

export default OfferHelpPage