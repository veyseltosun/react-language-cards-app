import React from 'react'
import "./Card.css";

function Item({card}) {
    const [show, setShow] = React.useState(false);
    const handleClick = () => {
        setShow(!show)
    }
    const{img, name, options} = card
    return (
        <div className="card"  onClick={handleClick}>
            <img className="card-logo" src={img} alt={name} />
            <div className='name'>{name}</div>
            <div className="options-show">
                {options.map((list, index) => {
                    return (
                        <li className={`${show ? "show" : "noShow"}`} key={index}>{list}</li>
                    )

                })}
            </div>
        </div>
    )
}

export default Item