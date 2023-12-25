import React from 'react';
import '../css/Product.css';
import ReactStars from 'react-rating-stars-component';
import { Link, useLocation } from 'react-router-dom';
import '../Responsive.css';



const Product = (props) => {
  const { grid } = props;
  let location = useLocation();
  const ratingChanged = (newRating) => {
    console.log(`Rating is: ${newRating}`);
  };

  return (
    <div className={`col-lg-3 col-md-4 col-sm-6 col-6`}>
    {/* <div className={`${location.pathname === '/store' ? `col-${grid}` : 'col-3'}`}> */}
      <div className='product-card store position-relative'>
        <Link to=':id p-3'>
          <div className='wishlist-icon position-absolute'>
            <div>
              <Link to='/wishlist'>
                <img src="images/wish.svg" alt="wishlist" />
              </Link>
            </div>
          </div>
          <div className='card-image'>
            <img src='images/14-midn (1).jpg' className='img-fluid' alt='product' />
          </div>
          <div className='details'>
            <h6 className='brand'>Apple</h6>
            <h5 className='title'>iPhone 14 128 GB Midnight</h5>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor='#ffd700'
            />
            <p className='price'>2149.99 AZN</p>
          </div>
          <div className='action-bar position-absolute'>
            <div className='d-flex flex-column gap-16'>
              <Link to='/compare'>
                <img src='images/prodcompare.svg' alt='compare' />
              </Link>
              <Link to='/view'>
                <img src='images/view.svg' alt='view' />
              </Link>
              <Link to='/add-to-cart'>
                <img src='images/add-cart.svg' alt='add to cart' />
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Product;
