import React from 'react'

export default function releaseListItem(props) {
    return (
        <div>
            <h4>{props.title}</h4>
            <p> {props.price}</p>
            <p>{props.publisher}</p>
            <button>Add to List</button>
        </div>
    )
}
