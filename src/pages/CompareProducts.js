import React from 'react';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta.js';
import '../css/CompareProducts.css';
import '../Responsive.css'

const CompareProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Məhsul 1',
      type: 'Mobil telefon',
      availability: true,
      color: 'Blue',
      size: 'Medium',
      brand: 'Brand A',
    },
    {
      id: 2,
      name: 'Məhsul 2',
      type: 'Saç feni',
      availability: false,
      color: 'Red',
      size: 'Large',
      brand: 'Brand B',
    },
  ];

  const getAvailabilityStyle = (availability) => {
    return availability ? { color: 'green' } : { color: 'red' };
  };

  return (
    <>
      <Meta title={'Compare Products'} />
      <BreadCrumb title='Compare Products' />
      <div className='compare-p-wrapper py-5 home-wrapper-2'>
        <div className='container-xxl'>
          <div className='row'>
            {products.map((product) => (
              <div key={product.id} className='col-3'>
                <div className='compare-p-card'>
                  <h3>{product.name}</h3>
                  <p>Type: {product.type}</p>
                  <p style={getAvailabilityStyle(product.availability)}>
                    Availability: {product.availability ? 'In Stock' : 'Out of Stock'}
                  </p>
                  <p>Rəng: {product.color}</p>
                  <p>Ölçü: {product.size}</p>
                  <p>Marka: {product.brand}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompareProducts;
