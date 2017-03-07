/**
 * Created by oxape on 2017/3/7.
 */
import React, { Component, PropTypes } from 'react'
import {selectSubreddit, invalidateSubreddit, fetchPostsIfNeeded} from '../actions'
import { connect } from 'react-redux'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class AsyncApp extends Component {
    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    componentDidMount() {
        const { dispatch, selectedSubreddit} = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = nextProps
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }

    handleChange(nextSubreddit) {
        this.props.dispatch(selectSubreddit(nextSubreddit))
    }

    handleRefreshClick(e) {
        console.log(e)
        e.preventDefault()
        const { dispatch, selectedSubreddit } = this.props
        dispatch(invalidateSubreddit(selectedSubreddit))
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    render() {
        const {selectedSubreddit, posts, isFetching, lastUpdated} = this.props
        return (
            <div>
                <Picker value={selectedSubreddit}
                        onChange={this.handleChange}
                        options={['reactjs', 'frontend']}>
                </Picker>
                <p>
                    {
                        lastUpdated &&  <span>
                            Last updated at {new Date(lastUpdated).toLocaleTimeString()}{' '}
                        </span>
                    }
                    {
                        !isFetching && <a href="#" onClick={this.handleRefreshClick}>Refresh</a>
                    }
                </p>
                {
                    isFetching && posts.length === 0 &&
                    <h2>Loading...</h2>
                }
                {!isFetching && posts.length === 0 &&
                    <h2>Empty.</h2>
                }
                {
                    posts.length > 0 &&
                    <div style={{opacity: isFetching ? 0.5 : 1}}>
                        <Posts posts={posts}/>
                    </div>
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { selectedSubreddit, postsBySubreddit } = state
    const {
        isFetching,
        lastUpdated,
        items: posts
    } = postsBySubreddit[selectedSubreddit] || {
        isFetching: true,
        items: []
    }

    return {
        selectedSubreddit,
        isFetching,
        lastUpdated,
        posts
    }
}

AsyncApp.propTypes = {
    selectedSubreddit: PropTypes.string.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    posts: PropTypes.array.isRequired,
    dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(AsyncApp)

