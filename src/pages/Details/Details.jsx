import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../app/features/CartSlice';
import MyTemplate from '../../template/MyTemplate';
import figurinesData from '../../data/figurine.json';
import "./Details.scss"

function Details() {
  const { id } = useParams();
  const figurines = Object.values(figurinesData[0]).flatMap(faction => faction.figurines);
  const figurine = figurines.find((fig) => fig.id === parseInt(id));
  const isLoggedIn = useSelector((state) => state.cart.isLoggedIn);

  const [imagePrincipale, setImagePrincipale] = useState(figurine?.Images[0]);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
      dispatch(addToCart(figurine));
    };
  

  if (!figurine) {
    return <div>Figurine not found</div>;
  }

  return (
    <MyTemplate>
      <section className='Details'>
        <div className='DivLeft'>
          <div className='ImagePrincipal'>
            <img src={imagePrincipale} alt={figurine.name} />
          </div>
          <div className='ImageSecondaire'>
            {figurine.Images.map((image, index) => (
              <div key={index} onClick={() => setImagePrincipale(image)} className="clickable-image">
                <img src={image} alt={`${figurine.name} - ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        <div className='DivRight'>
          <div className='Title'>
            <h1>{figurine.name}</h1>
          </div>
          <div className='Price'>
            <div className='PriceRight'>€ {figurine.price.toFixed(2)} <span>Tax Included</span></div>
            <div className='PriceLeft'>
              <span>{figurine.Available ? 'AVAILABLE' : 'Pre Order'}</span>
            </div>
          </div>
          <div className='BoxDescription'>
            <h3>Box Content</h3>
            <ul>
              {figurine['Box Contents'].map((content, index) => (
                <li key={index}>{content}</li>
              ))}
            </ul>
            <h3>Product Information</h3>
            <ul>
              <li>Assembly: {figurine['Product Information'].Assembly ? 'Yes' : 'Required'}</li>
              <li>Box size: {figurine['Product Information']['Box size']}</li>
              <li>Box weight: {figurine['Product Information']['Box weight']}</li>
              <li>Material: {figurine['Product Information'].Material}</li>
            </ul>
          </div>
          {
          isLoggedIn 
          ?
          <div className='AddCart' onClick={handleAddToCart}>
            ADD TO CART
          </div>
          :
          ""
          }
        </div>
      </section>
    </MyTemplate>
  );
}

export default Details;
