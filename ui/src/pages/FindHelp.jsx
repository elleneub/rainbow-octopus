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
                    'I am happy to help with more difficult yard tasks, and I can assist with household repairs.',
            },
            {
                id: '1',
                title: 'I can help with heavy lifting/manual labor',
                location: 'Cedar/Riverside',
                categories: ['Heavy Yard Work'],
                offerer_uid: 2,
                notes: 'I can help with more difficult tasks in your home or outside yard work.',
            },
            {
                id: '2',
                title: 'I make masks',
                location: 'South Minneapolis',
                categories: ['Sewing'],
                offerer_uid: 5,
                notes:
                    'I know how to sew and am able to make a bunch of cloth masks, if anyone needs one.',
            },
        ]

        return (
            <>
                <h1 className="page-title">Find Help</h1>
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

export default FindHelpPage
