import React from 'react'
import PostCardSection from 'components/PostCardSection'

class FindHelpPage extends React.Component {
    render() {
        const posts = [
            {
                id: '0',
                title: 'Can help pick-up Stuff',
                location: 'NE Minneapolis',
                categories: ['Light Yard Work'],
                offerer_uid: 3,
                notes:
                    'I have a car and am frequently out and about. I can pick up small items',
            },
            {
                id: '1',
                title: 'Can Help Picking Up Heavy Things',
                location: 'Cedar/Riverside',
                categories: ['Heavy Yard Work'],
                offerer_uid: 2,
                notes: 'I like lifting heavy stuff',
            },
            {
                id: '2',
                title: 'I make masks',
                location: 'South Minneapolis',
                categories: ['Sewing'],
                offerer_uid: 5,
                notes:
                    'I know how to sew and am able to make a bunch of cloth masks, if anyone would like one.',
            },
        ]

        return (
            <div className="m-3">
                <div className="card">
                    <div className="card-body">
                        <h1 className="card-title">Find Help</h1>
                        <PostCardSection posts={posts} />
                    </div>
                </div>
            </div>
        )
    }
}

export default FindHelpPage
