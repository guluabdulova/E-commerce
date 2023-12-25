import React from 'react';
import ReactStars from 'react-rating-stars-component';
import '../css/PopularProducts.css';
import '../Responsive.css';

const PopularProducts = () => {
  const popularProducts = [
    {
      id: 1,
      image: 'images/sari-sari.png',
      brand: 'Apple',
      price: '2199.99 AZN',
      rating: 5,
    },
    {
      id: 2,
      image: 'images/casio-edifice-efs-s570db-2audf.jpg',
      brand: 'Casio',
      price: '489.99 AZN',
      rating: 4.2,
    },
    {
      id: 3,
      image: 'images/asas55xm-hairdryer-dyson-corrale-straightener-hs07-vinca-blue.png',
      brand: 'Dyson',
      price: '$79.99',
      rating: 4.8,
    },
  ];

  return (
    <div className='popular-products-container'>
      <div className='popular-products'>
        {popularProducts.map(product => (
          <div key={product.id} className='popular-product'>
            <img src={product.image} className='popular-product-image' alt={`popular-product-${product.id}`} />
            <div className='popular-product-details'>
              <h5 className='popular-product-brand'>{product.brand}</h5>
              <p className='popular-product-price'>{product.price}</p>
              <ReactStars
                count={5}
                value={product.rating}
                size={24}
                activeColor='#ffd700'
                edit={false}
                className="popular-product-rating" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
