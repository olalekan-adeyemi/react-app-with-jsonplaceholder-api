import React from 'react'
import './card-list.styles.css'


//Export the functional component
export const CardList = (props) => {
    console.log(props)
    return (<div className='card-list'>{ props.children }</div>)
}