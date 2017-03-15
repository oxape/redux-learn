/**
 * Created by oxape on 2017/3/4.
 */
import React from 'react'
import FilterLink from '../containers/FilterLink'

const Footer = () => (
    <p>
        Show:{" "}
        <FilterLink filter="SHOW_ALL">
            All
        </FilterLink>
        {","}
        <FilterLink filter="SHOW_ACTIVE">
            Active
        </FilterLink>
        {","}
        <FilterLink filter="SHOW_COMPLETED">
            Completed
        </FilterLink>
    </p>
)

export default Footer