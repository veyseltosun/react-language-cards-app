import React from 'react'
import "./Header.scss";
import logo from "../../assets/react.svg"

function Header() {
  return (
    <div>
        <img src={logo} alt='react img' />
    </div>
  )
}

export default Header