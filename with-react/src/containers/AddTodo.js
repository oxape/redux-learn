/**
 * Created by oxape on 2017/3/4.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

//TODO 这里不使用let会怎么样
let AddTodo = ({dispatch}) => {
    let input

    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!input.value.trim()){
                    return
                }
                dispatch(addTodo(input.value))
                input.value = ''
            }}>
                <input ref={node => {
                    input = node
                }}/>
                <button type="submit">
                    Add Todo
                </button>
            </form>
        </div>
    )
}

AddTodo = connect()(AddTodo)

export default AddTodo