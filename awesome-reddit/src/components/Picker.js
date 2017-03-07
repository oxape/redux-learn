/**
 * Created by oxape on 2017/3/7.
 */
import React, { PropTypes } from 'react'

const Picker = ({value, onChange, options}) => (
    <span>
        <h1>{value}</h1>
        <select value={value} onChange={e => onChange(e.target.value)}>
        {
            options.map((option) => (
                <option value={option} key={option}>{option}</option>
            ))
        }
        </select>
    </span>

)

Picker.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired
}

export default Picker