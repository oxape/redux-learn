/**
 * Created by oxape on 2017/3/6.
 */
import { combineReducers } from 'redux'
import {SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT, REQUEST_SUBREDDIT, RECEIVE_SUBREDDIT} from '../constants'

function selectedSubreddit(state = 'reactjs', action) {
    switch (action.type){
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

function posts(state = {
    isFetching: false,
    didInvalidate: false,
    items: []
}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return Object.assign({}, state, {
                didInvalidate: true
            })
        case REQUEST_SUBREDDIT:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
            })
        case RECEIVE_SUBREDDIT:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receiveAt
            })
        default:
            return state
    }
}

function postsBySubreddit(state = {}, action) {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case REQUEST_SUBREDDIT:
        case RECEIVE_SUBREDDIT:
            return Object.assign({}, state, {
                [action.subreddit]:posts(state[action.subreddit], action)
            })
        default:
            return state
    }
}

const rootReducer = combineReducers({
    selectedSubreddit,
    postsBySubreddit
})

export default rootReducer