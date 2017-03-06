/**
 * Created by oxape on 2017/3/6.
 */
import 'babel-polyfill'
import store from './store'
import {selectSubreddit, fetchPostsIfNeeded} from './actions'

store.dispatch(selectSubreddit('reactjs'))
store.dispatch(fetchPostsIfNeeded('reactjs')).then(() =>
    console.log(store.getState())
)