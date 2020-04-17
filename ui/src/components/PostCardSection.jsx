import React from 'react'
import PostCard from './PostCard'
import FilterAndPostHeader from 'components/FilterAndPostHeader'
import Modal from 'components/Modal'

class PostCardSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryFilter: '',
            locationFilter: '',
            show: false
        }
        this.changeFilterCategoryHandler = this.changeFilterCategoryHandler.bind(
            this
        )
        this.changeLocationHandler = this.changeLocationHandler.bind(this)
        this.postHandler = this.postHandler.bind(this)
        this.child = React.createRef()
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
        // alert('Implement creating a new posting')
        this.child.current.showModal()
    }

    render() {
        return (
            <>
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
                        return post.category.includes(
                            this.state.categoryFilter
                        ) ? (
                            <PostCard postData={post} key={post.id} />
                        ) : null
                    })}
                </div>
            </div>
                <Modal ref={this.child} />
            </>
        )
    }
}

export default PostCardSection
