import React from 'react'
import GlobalItem from './GlobalItem'

function Global() {
    return (
        <div>
            <label>Global CoronaVirus Information</label>
            <GlobalItem type='Case'/>
            <GlobalItem type='Death'/>
            <GlobalItem type='Recovered'/>
        </div>
    )
}

export default Global;