import React from 'react'

interface Iprops {
    type: string,
    withStyle: string
    count: number
}

function GlobalItem(props: Iprops) {
    return (
        <div>
            <div>{props.type} : <span className={props.withStyle}>{props.count.toLocaleString()}</span></div>
        </div>
    )
}

export default GlobalItem