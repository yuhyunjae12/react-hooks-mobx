import React from 'react'
import PropTypes from 'prop-types'

const Box = (props) => {
    return (
        <div>
            {props.title}
        </div>
    )
}

Box.propType ={
    title: PropTypes
}

export default Box
