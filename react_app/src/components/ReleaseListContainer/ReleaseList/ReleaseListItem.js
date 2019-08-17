import React from 'react';
import styles from './ReleaseList.module.scss';

export default function releaseListItem(props) {
    return (
        <div>
            <h4>{props.title}</h4>
            <p className={styles.text} > {props.price}</p>
            <p>{props.publisher}</p>
            <button onClick={()=> props.addComic(props)}>Add to List</button>
        </div>
    )
}
