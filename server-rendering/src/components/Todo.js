/**
 * Created by oxape on 2017/3/4.
 */
import React, { PropTypes } from 'react'
const Todo = ({onClick, text, completed}) => (
    <li onClick={onClick} style={{textDecoration:completed?'line-through':'none'}}>
        {text}
    </li>
)

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    text:PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
}

export default Todo
/*
h1 {text-decoration:overline}
h2 {text-decoration:line-through}
h3 {text-decoration:underline}
h4 {text-decoration:blink}
*/