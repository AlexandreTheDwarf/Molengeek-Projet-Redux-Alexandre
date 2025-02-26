import React from 'react';
import "./Header.scss";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setLoggedOut } from "../../app/features/CartSlice";

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.cart.isLoggedIn);
  const username = useSelector((state) => state.cart.username);

  const handleLogout = () => {
    dispatch(setLoggedOut());
  };

  return (
    <header className='Header'>
      <Link to="/" className='DivTitle'>
        <img src="/conquest_black_logo.png" alt="Logo" />
      </Link>
      <div className='DivUser'>
        {isLoggedIn ? (
          <>
            <p>Bienvenue, {username} </p>
            <span className="logout-btn" onClick={handleLogout}>Logout</span>
          </>
        ) : (
          <Link to="/login">Bienvenue, Guest</Link>
        )}
      </div>
    </header>
  );
}

export default Header;
