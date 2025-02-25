import React from 'react';
import "./ShoppingCard.scss";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addToCart } from '../../app/features/CartSlice';

function ShoppingCard({ figurine }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(figurine));
  };

  return (
    <div className='ShoppingCard'>
      <div className='Top'>
        <img src={figurine.Images[0]} alt={figurine.name} />
      </div>
      <div className='Mid'>
        <h2>{figurine.name}</h2>
      </div>
      <div className='Bot'>
        <span>Prix : €{figurine.price.toFixed(2)}</span>
        <FaShoppingCart onClick={handleAddToCart} />
      </div>
    </div>
  );
}

export default ShoppingCard;

