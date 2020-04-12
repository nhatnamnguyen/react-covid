import React from 'react'

interface Iprops {
    type: String,
    count: number
}

function GlobalItem(props: Iprops) {
    return (
        <div>
            <div>{props.type} : {props.count}</div>
        </div>
    )
}

export default GlobalItem