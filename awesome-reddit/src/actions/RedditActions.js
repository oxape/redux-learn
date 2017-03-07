/**
 * Created by oxape on 2017/3/6.
 */
import * as types from '../constants'

export const selectSubreddit = subreddit => ({type: types.SELECT_SUBREDDIT, subreddit})
export const invalidateSubreddit = subreddit => ({type: types.INVALIDATE_SUBREDDIT, subreddit})

export const requestPosts = subreddit => ({type: types.REQUEST_SUBREDDIT, subreddit})
export const receivePost = (subreddit, json) => ({
    type: types.RECEIVE_SUBREDDIT,
    subreddit,
    posts: json.data.children.map(child => child.data),
    receiveAt: Date.now()
})

export function fetchPosts(subreddit) {
    return dispatch => {
        dispatch(requestPosts(subreddit))
        return fetch(`http://www.reddit.com/r/${subreddit}.json`).then(
            response => response.json()
        ).then(
            json => dispatch(receivePost(subreddit, json))
        )
    }
}

function shouldFetchPosts(state, subreddit) {
    const posts = state.postsBySubreddit[subreddit]
    if (!posts){
        return true
    } else if (posts.isFetching) {
        return false
    } else {
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(subreddit) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)) {
            dispatch(fetchPosts(subreddit))
        }
    }
}