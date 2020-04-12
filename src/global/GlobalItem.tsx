import React from 'react'

interface Iprops {
    type: String
}

function GlobalItem(props: Iprops) {
    return (
        <div>
            <div>Global Item</div>
            <div>Type {props.type}</div>
        </div>
    )
}

export default GlobalItem