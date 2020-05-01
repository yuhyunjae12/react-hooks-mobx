import React, { useState, useEffect } from 'react'
import { Box } from './Components';
import PropTypes from 'prop-types'

const Board = (props) => {
    const [boxs, setBoxs] = useState([]);

    useEffect(() => {
        console.log(boxs)
        return () =>{
            console.log(boxs)
        }
    }, [boxs])

    const initData = () =>{
        setBoxs([{title:'1'},{title:'2'},{title:'3'},{title:'4'}])
    }

    return (
        <div>
            <div>{props.title}</div>
            <button onClick={initData}>init</button>
            {
                boxs.map((val, index) =>{
                    return <Box key={index} title={val.title} />
                })
            }
        </div>
    )
}

Board.propTypes = {
    title: PropTypes.string
}

export default Board