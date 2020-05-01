import React, { Fragment } from 'react'
import { Headers, Footers } from '../Common'
import { MainBanner } from './Components'

const Main = () => {
    return (
        <Fragment>
            <Headers/>
            <MainBanner/>
            <Footers/>
        </Fragment>
    )
}

export default Main
