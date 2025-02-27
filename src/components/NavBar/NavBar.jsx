import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "./NavBar.scss";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  const cartItems = useSelector((state) => state.cart.items);
  const isLoggedIn = useSelector((state) => state.cart.isLoggedIn);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Calculer le nombre total d'articles dans le panier
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleMouseOver = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className='NavBar'>
      <div className='NavLink'>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/catalogue">Catalogue</Link></li>
          <li
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className='dropdown-toggle'
          >
            Factions
            {isDropdownOpen && (
              <ul className='dropdown-menu'>
                <li><Link to="/factions/dweghom">Dweghom</Link></li>
                <li><Link to="/factions/hundred-kingdoms">Hundred Kingdoms</Link></li>
                <li><Link to="/factions/wadrhun">W'adrhun</Link></li>
                <li><Link to="/factions/old-dominion">Old Dominion</Link></li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      {
        isLoggedIn
        ?
        <Link to="/cart" className='DivShoppingCart'>
          <p>
            <span className='ArticleCounter'>{totalItems}</span>
            <FaShoppingCart />
          </p>
        </Link>
        :
        ""
      }
    </nav>
  );
}

export default NavBar;
