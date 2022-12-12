import React from 'react';
import { categories } from '../../helper/data';
import "./Card.css"
import Item from './Item';
function Card() {

  
  
  return (
    <div className='card-container'>
      <h2 className='language-title'>Languages</h2>
      {categories.map((card, index)=>{
       
        return(
          <Item card={card} key={index} />

        )
        
      })}
    </div>
  )
}

export default Card;