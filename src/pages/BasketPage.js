import React, { useState } from 'react';
import Meta from '../components/Meta';
import '../css/BasketPage.css'
import BreadCrumb from '../components/BreadCrumb';
import '../Responsive.css'

const BasketPage = () => {
  
  const [basketItems, setBasketItems] = useState([
    { id: 1, name: 'Product 1', price: 29.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 39.99, quantity: 1 },
  ]);

  const getTotalPrice = () => {
    return basketItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  const handleRemoveItem = (itemId) => {
    const updatedItems = basketItems.filter((item) => item.id !== itemId);
    setBasketItems(updatedItems);
  };

  const BasketItem = ({ item }) => {
    return (
      
    <> 
    <Meta title={'Basket'} />
      <BreadCrumb title='Basket' />
     <div className="basket-item">
    <div>
      <h3>{item.name}</h3>
      <p>Qiyməti: AZN {item.price.toFixed(2)}</p>
      <p>Sayı: {item.quantity}</p>
    </div>
    <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
  </div></>
    );
  };

  return (
    <>
      <Meta title="My Basket" />
      <div className="basket-page">
        <h1>Mənim səbətim</h1>
        {basketItems.length === 0 ? (
          <p>Səbət boşdur.</p>
        ) : (
          <div className="basket-items">
            {basketItems.map((item) => (
              <BasketItem key={item.id} item={item} />
            ))}
          </div>
        )}
        {basketItems.length > 0 && (
          <div className="basket-summary">
            <h2>Cəmi</h2>
            <p>Ümumi: AZN {getTotalPrice()}</p>
            <button className="checkout-button">Yoxlamağa davam edin</button>
          </div>
        )}
      </div>
    </>
  );
};

export default BasketPage;
