import React, { useState } from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import '../css/Wishlist.css';
import '../Responsive.css'

const Wishlist = () => {

  const [wishlistItems, setWishlistItems] = useState([
    {
      id: 1,
      title: 'Samsung kondisioner',
      price: '999.99 AZN',
      image: 'images/samsung-ar12txhqasixua-1.jpg',
    },
    {      id: 1,
      title: 'Iphone 14',
      price: '2199.99 AZN',
      image: 'images/sari-sari.png',
      
    }
  ]);

  const removeFromWishlist = (itemId) => {
    const updatedWishlist = wishlistItems.filter((item) => item.id !== itemId);
    setWishlistItems(updatedWishlist);
  };

  return (
    <>
      <Meta title={'Wishlist'} />
      <BreadCrumb title='Wishlist' />
      <div className='wishlist-wrapper home-wrapper-2 py-5'>
        <div className='container-xxl'>
          <div className='row'>
            {wishlistItems.map((item) => (
              <div className='col-3' key={item.id}>
                <div className='wishlist-card position-relative'>
                  <div className='close-icon' onClick={() => removeFromWishlist(item.id)}>
                    <span>&times;</span>
                  </div>
                  <div className='wishlist-card-image'>
                    <img src={item.image} className='img-fluid w-100' alt='watch' />
                  </div>
                  <div className='py-3'>
                    <h5 className='title'>{item.title}</h5>
                    <h6 className='price'>{item.price}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
