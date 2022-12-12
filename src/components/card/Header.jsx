import React from 'react'
import "./Header.css";
import logo from "../../assets/react.svg"

function Header() {
  return (
    <div className='logo-container'>
        <img className="react-logo" src={logo} alt='react img' />
    </div>
  )
}

export default Header