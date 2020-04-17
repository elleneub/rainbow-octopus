import React from 'react'
import PostCard from './PostCard'
import FilterAndPostHeader from 'components/FilterAndPostHeader'
import ModalDetails from 'components/ModalDetails'
import ModalForm from 'components/ModalForm'

class PostCardSection extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categoryFilter: '',
            locationFilter: '',
            show: false,
        }
        this.changeFilterCategoryHandler = this.changeFilterCategoryHandler.bind(
            this
        )
        this.changeLocationHandler = this.changeLocationHandler.bind(this)
        this.postHandler = this.postHandler.bind(this)
        this.detailsHandler = this.detailsHandler.bind(this)
        this.formRef = React.createRef()
        this.detailsRef = React.createRef()
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

    postHandler = () => {
        this.formRef.current.showModalForm()
    }

    detailsHandler = () => {
        this.detailsRef.current.showModalDetails()
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
                    <div className="card-deck d-flex justify-content-center flex-wrap">
                        {this.props.posts.map((post) => {
                            return post.category.includes(
                                this.state.categoryFilter
                            ) ? (
                                    <PostCard
                                        postData={post}
                                        key={post.id}
                                        detailsHandler={this.detailsHandler}
                                    />
                            ) : null
                        })}
                    </div>
                </div>
                <ModalForm ref={this.formRef} />
                <ModalDetails ref={this.detailsRef} />
            </>
        )
    }
}

export default PostCardSection
