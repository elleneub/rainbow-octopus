import React from 'react'
import PostCardSection from 'components/PostCardSection'

class FindHelpPage extends React.Component {
    render() {
        const posts = [
            {
                id: '0',
                title: 'Can help pick-up Stuff',
                location: 'NE Minneapolis',
                category: 'Light Yard Work',
                description:
                    'I have a car and am frequently out and about. I can pick up small items.',
            },
            {
                id: '1',
                title: 'I can help with heavy lifting/manual labor',
                location: 'Cedar/Riverside',
                category: 'Heavy Yard Work',
                description: 'I am happy to help with more difficult yard tasks, and I can assist with household repairs.'
            },
            {
                id: '2',
                title: 'I make masks',
                location: 'South Minneapolis',
                category: 'Sewing',
                description:
                    'I know how to sew and am able to make a bunch of cloth masks, if anyone would like one.',
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
