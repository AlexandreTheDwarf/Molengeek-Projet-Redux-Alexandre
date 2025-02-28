import React, { useState } from 'react';
import "./ShoppingCard.scss";
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { addToCart } from '../../app/features/CartSlice';
import { useNavigate } from 'react-router-dom';

function ShoppingCard({ figurine }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.cart.isLoggedIn);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(figurine));
  };

  const handleMouseEnter = () => {
    if (!isHovered) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % figurine.Images.length);
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
  };

  const handleCardClick = () => {
    navigate(`/details/${figurine.id}`);
  };

  return (
    <div className='ShoppingCard' data-aos="zoom-in">
      <div
        className='Top'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleCardClick}
      >
        <img src={figurine.Images[currentImageIndex]} alt={figurine.name} />
      </div>
      <div className='Mid' onClick={handleCardClick}>
        <h2>{figurine.name}</h2>
      </div>
      <div className='Bot'>
        <span>Prix : €{figurine.price.toFixed(2)}</span>
        {isLoggedIn ? <FaShoppingCart onClick={handleAddToCart} /> : ""}
      </div>
    </div>
  );
}

export default ShoppingCard;
