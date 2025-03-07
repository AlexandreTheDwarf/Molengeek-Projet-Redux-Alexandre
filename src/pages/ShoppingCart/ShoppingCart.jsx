import React from 'react';
import "./ShoppingCart.scss";
import MyTemplate from '../../template/MyTemplate';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, incrementQuantity, decrementQuantity, resetCart } from '../../app/features/CartSlice';
import { FaRegTrashAlt } from "react-icons/fa";

function ShoppingCart() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart.items);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleReset = () => {
    dispatch(resetCart());
    navigate('/');
  };

  const total = cartItems.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  return (
    <MyTemplate>
      <section className='ShoppingCart'>
        <h2>Votre Panier</h2>
        {cartItems.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id} className='CartItem'>
                <img src={item.Images[0]} alt={item.name} width="50" />
                <div className='DivPizza'>
                  <h3>{item.name}</h3>
                  <p>Prix : €{(item.price)}</p>
                  <div className='QuantityControls'>
                    <button onClick={() => handleDecrement(item.id)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.id)}>+</button>
                    <button onClick={() => handleRemove(item.id)}><FaRegTrashAlt /></button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        {cartItems.length > 0 && (
        <div className='DivTotalCart'>
          <Link to="/" className='Modify'>Modifier la commande</Link>
          <p>Total : €{total.toFixed(2)}</p>
        </div>
        )}
        {cartItems.length > 0 && (
          <button className='resume' onClick={handleReset}>Finaliser la commande</button>
        )}
      </section>
    </MyTemplate>
  );
}

export default ShoppingCart;
