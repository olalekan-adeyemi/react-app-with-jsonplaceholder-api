import React from 'react'
import './card-list.styles.css'
import { Card } from '../card/card.component'


//Export the functional component
export const CardList = (props) => {
    console.log(props)
    return (
    <div className='container'>
        <div className='card-list'>
        
        {props.family.map( family => (
            <Card key={family.id} family={family} />
          ))}
    </div>
    </div>
    )
}