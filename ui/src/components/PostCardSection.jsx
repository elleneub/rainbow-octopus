import React from 'react'
import PostCard from './PostCard'
import FilterAndPostHeader from 'components/FilterAndPostHeader'

class PostCardSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryFilter: '',
            locationFilter: '',
        }
        this.changeFilterCategoryHandler = this.changeFilterCategoryHandler.bind(
            this
        )
        this.changeLocationHandler = this.changeLocationHandler.bind(this)
        this.postHandler = this.postHandler.bind(this)
    }

    changeFilterCategoryHandler(e) {
        const category = e.target.value
        this.setState({
            categoryFilter: category,
        })
    }

    // implement actual filter
    changeLocationHandler(e) {
        const location = e.target.value
        this.setState({
            locationFilter: location,
        })
        alert('Implement filtering on location')
    }

    postHandler() {
        alert('Implement creating a new posting')
    }

    render() {
        return (
            <div>
                <FilterAndPostHeader
                    changeFilterCategoryHandler={
                        this.changeFilterCategoryHandler
                    }
                    changeLocationHandler={this.changeLocationHandler}
                    postHandler={this.postHandler}
                />
                <div className="card-deck mx-2 d-flex justify-content-center flex-wrap">
                    {this.props.posts.map((post) => {
                        return !this.state.categoryFilter ||
                            post.categories.includes(
                                this.state.categoryFilter
                            ) ? (
                            <PostCard
                                postData={post}
                                key={post.request_id || post.offer_id}
                            />
                        ) : null
                    })}
                </div>
            </div>
        )
    }
}

export default PostCardSection
