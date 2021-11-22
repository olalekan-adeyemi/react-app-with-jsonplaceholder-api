import React from "react";
import './card.styles.css'

export const Card = (props) => {
    return (
    <div className='card'>
        <img alt="monster" src={`https://robohash.org/${props.family.id}?set=set2&size=180x180`} />
        <h3 className={props.family.id}> { props.family.name }</h3>
        <p>{ props.family.email }</p>
    </div>
    )
}