import React from 'react'

interface Iprops {
    type: string,
    style: string
    count: number
}

function GlobalItem(props: Iprops) {
    return (
        <div>
            <div>{props.type} : <span className={props.style}>{props.count}</span></div>
        </div>
    )
}

export default GlobalItem