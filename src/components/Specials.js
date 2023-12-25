import React from 'react';
import ReactStars from 'react-rating-stars-component';
import '../css/Specials.css';
import '../Responsive.css'
const Specials = () => {
  const ratingChanged = (newRating) => {
    console.log(`Rating is: ${newRating}`);
  };

  const products = [
    {
   

      id: 1,
      image: 'images/14p-gold.jpg',
      brand: 'IPhone 14 Gold',
      sale: '2999.99 AZN', 
      price: '3299.99 AZN',
      // discountDays: '5 gün',
      // badges: [1, 1, 1],
      progressValue: 25,
      productCount: 5,
    },
    {
      id: 2,
      image: 'images/samsung-ww60j42e0hs1.jpg',
      brand: 'Samsung paltaryuyan',
      sale: '549.99 AZN',
      price: '1099.99',
      // discountDays: '7 gün',
      // badges: [2, 2, 2],
      progressValue: 40,
      productCount: 8,
    },
    {
      id: 3,
      image: 'images/dyson-airwrap-complete-long-hs05-blush-bluev.png',
      brand: 'Dyson airwrap complete long hs05 blush blue',
      sale: '2299.99 AZN',
      price: '1499.99 AZN',
      // discountDays: '7 gün',
      // badges: [2, 2, 2],
      progressValue: 40,
      productCount: 8,
    },
    
    {
      id: 4,
      image: 'images/07d0767892ad3fc2e440ae6aa7f6dbf2.jpg',
      brand: 'PS4- The last of us',
      sale: '69.99 AZN',
      price: '79.99 AZN',
      // discountDays: '3 gün',
      // badges: [2, 2, 2],
      progressValue: 40,
      productCount: 8,
    },
    {
      id: 5,
      image: 'images/casio-g-shock-gma-s2100-4a2dr.jpg',
      brand: 'Casio g-shock',
      sale: '199.99 AZN',  
      price: '249.99 AZN',
      // discountDays: '14 gün',
      // badges: [2, 2, 2],
      progressValue: 40,
      productCount: 8,
    },


    
  ];

  return (
    <div className='row'>
      {products.map(product => (
        <div key={product.id} className='col-lg-3 col-md-4 col-sm-6'>
          <div className='special-product'>
            <div className='text-center'>
              <img src={product.image} className='img-fluid maintain-aspect-ratio larger-image' alt={`product-${product.id}`} />
            </div>

            <div className='special-content'>
              <h5 className='brand'>{product.brand}</h5>
              <h6 className='title'>{product.title}</h6>

            </div>

            <p className='price'>
         <span className='red-p'>{product.sale}</span> 
         &nbsp; <strike>{product.price}</strike>
            </p>


            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor='#ffd700'
              classNames="rating-stars"
            />

            <div className='discount-till d-flex align-items-center'>
              <p className='mb-0'>
                {/* <b>{product.discountDays}</b> */}
              </p>
              <div className='d-flex gap-10 align-items-center'>
                {/* {product.badges.map((badge, index) => (
                  <span key={index} className='badge rounded-circle p-2 bg-warning larger-badges'>{badge}</span>
                ))} */}
              </div>
              <div className='p-count'>
                <p>{`Məhsul sayı:${product.productCount}`}</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${product.progressValue}%` }}
                    aria-valuenow={product.progressValue}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Specials;
