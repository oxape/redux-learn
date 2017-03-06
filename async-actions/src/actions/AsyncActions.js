/**
 * Created by oxape on 2017/3/6.
 */
import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export const requestPosts = subreddit => ({type: types.REQUEST_POSTS, subreddit})
export const receivePosts = (subreddit, json) => (
    {
        type: types.RECEIVE_POSTS,
        subreddit,
        //TODO 关于json的操作
        posts:json.data.children.map(child => child.data),
        receiveAt: Date.now()
    }
)

export function fetchPosts(subreddit) {
    return function (dispatch) {
        dispatch(requestPosts(subreddit))
        return fetch(
            `http://www.subreddit.com/r/${subreddit}.json`
        ).then(
            response => response.json()
        ).then(
            json => dispatch(receivePosts(subreddit, json))
        ).catch( ()=>
            console.error(`http://www.subreddit.com/r/${subreddit}.json fetch error`)
        )
    }
}

function shouldFetchPosts(state, subreddit) {
    const posts = state.postsBySubreddit[subreddit]
    if (!posts){
        return true
    } else if (posts.isFetching) {

    } else {
        return posts.didInvalidate
    }
}

export function fetchPostsIfNeeded(subreddit) {
    return (dispatch, getState) => {
        if (shouldFetchPosts(getState(), subreddit)){
            return dispatch(fetchPosts(subreddit))
        } else {
            return Promise.resolve()
        }
    }
}