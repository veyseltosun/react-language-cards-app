import React from 'react';
import { categories } from '../../helper/data';
import "./Card.scss"
function Card() {
  return (
    <div className='card-container'>
      <h2>Languages</h2>
      {categories.map((card, index)=>{
        const{name, img, options } = card
        return(
          <div className="card" key={index}>

            <div className='name'>{name}</div>
            <img src={img} alt={name}/>
            <div className="options">
              <p>{options}</p>
            </div>

          </div>

        )
        
      })}
    </div>
  )
}

export default Card;