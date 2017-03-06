/**
 * Created by oxape on 2017/3/6.
 */
import * as types from '../constants/ActionTypes'

export const selectSubreddit = subreddit => ({type: types.SELECT_SUBREDDIT, subreddit})
export const invalidateSubreddit = subreddit => ({type: types.INVALIDATE_SUBREDDIT, subreddit})