import React from 'react'
import "./Header.scss"
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

function Header() {
  const isLoggedIn = useSelector((state) => state.cart.isLoggedIn);
  const UserName = useSelector((state) => state.cart.UserName);
  return (
    <header className='Header'>
        <Link to="/" className='DivTitle'>
            <img src="/conquest_black_logo.png" alt="" />
      </Link>
      <Link to={
        isLoggedIn 
        ? 
        "" 
        : 
        "/login"
        } 
        className='DivUser'>
          <p>
            {
            isLoggedIn 
            ? 
            "Bienvenue, "+UserName 
            : 
            "Bienvenue, Ghest"}
          </p>
      </Link>
    </header>
  )
}

export default Header