import React, { useState } from 'react';
import "./ShoppingCard.scss";
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../app/features/CartSlice';

function ShoppingCard({ figurine }) {
  const dispatch = useDispatch();
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

  return (
    <div className='ShoppingCard'>
      <div
        className='Top'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={figurine.Images[currentImageIndex]} alt={figurine.name} />
      </div>
      <div className='Mid'>
        <h2>{figurine.name}</h2>
      </div>
      <div className='Bot'>
        <span>Prix : €{figurine.price.toFixed(2)}</span>
        {
        isLoggedIn 
        ?
        <FaShoppingCart onClick={handleAddToCart} />
        :
        ""
        }
      </div>
    </div>
  );
}

export default ShoppingCard;
