import React from 'react';
import { categories } from '../../helper/data';
import "./Card.css"
function Card() {
  const [show, setShow] = React.useState(true);
  const handleClick = () => {
    setShow(!show)
  }
  console.log("show:" ,show);
  return (
    <div className='card-container'>
      <h2 className='language-title'>Languages</h2>
      {categories.map((card, index)=>{
        const{name, img, options } = card
        return(
          <div className="card" key={index} onClick={handleClick}>

            <img className="card-logo" src={img} alt={name}/>
            <div className='name'>{name}</div>
            <div className="options-show">
              {options.map((list,index)=>{
                return(
                  <li className={`${show ? "show": "noShow"}`} key={index}>{options[index]}</li>
                )

              })}
            </div>

          </div>

        )
        
      })}
    </div>
  )
}

export default Card;